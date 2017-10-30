import parseXml from 'xml2json';
// import { promisify } from 'util';
import { isString } from 'lodash';
import BlueBird from 'bluebird';
// import { resolve } from 'path';
// import fs from 'fs';

import { cvLibraryApi } from 'config';
import { regions, request } from 'isomorphic';
import { models } from 'server/database';
// const readAsync = promisify(fs.readFile);

const sanitizeSalary = (salary) => {
  if (typeof salary === 'string') {
    const sanitized = salary.replace(/&pound;|&euro;/g, '€').replace('€NEG', '');
    const match = sanitized.match(/(.*[/][^\s]+)/g);
    return match ? match[0] : sanitized;
  }
  return null;
};

const withLocation = jobs => jobs.map(({ county, location, ...job }) => {
  if (isString(county)) {
    const regex = new RegExp(`${`${county} ${location}`.split(' ').join('|')}`);
    const jobLocation = regions.find(region => regex.test(region));
    return {
      ...job,
      location: jobLocation,
    };
  }
  return job;
}).filter(({ location }) => !!location);


const withSalary = ({ description, ...data }, salary) => ({
  salary,
  description: `${salary}
          
${description}`,
  ...data,
});

export default async (req, res, next) => {
  try {
    req.setTimeout(0);
    console.log('Fetching jobs from CV Library');
    // const testXml = await readAsync(resolve(__dirname, '../../files/test.xml'));
    const xml = await request(cvLibraryApi);
    const { jobs: { job: parsedJobs } } = parseXml.toJson(xml, { object: true });
    const jobs = withLocation(parsedJobs);
    const addedJobs = await BlueBird.map(jobs, async ({
      description,
      jobref,
      location,
      salary,
      title,
      url,
    }) => {
      const sanitizedSalary = sanitizeSalary(salary);
      const data = {
        description,
        location,
        urls: {
          source: url,
        },
        source: 'cv-library',
        sourceId: jobref,
        title,
      };
      try {
        const newJob = new models.Job(sanitizedSalary ? withSalary(data, sanitizedSalary) : data);
        const addedJob = await newJob.save();
        return addedJob;
      } catch (error) {
        console.log(error);
        return null;
      }
    });
    res.status(200).json([...addedJobs.filter(value => !!value)]);
    return;
  } catch (error) {
    next(error);
  }
};

