import parseXml from 'xml2json';
// import { promisify } from 'util';
import { isString } from 'lodash';
// import { resolve } from 'path';
// import fs from 'fs';

import { cvLibraryApi } from 'config';
import { request } from 'isomorphic';
import { getInsertManyResult, models } from 'server/database';
import regions from 'server/shared/regions';

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
    console.log('Fetching jobs from CV Library');
    // const testXml = await readAsync(resolve(__dirname, '../../files/test.xml'));
    const xml = await request(cvLibraryApi);
    const { jobs: { job: parsedJobs } } = parseXml.toJson(xml, { object: true });
    const jobs = withLocation(parsedJobs);
    try {
      await models.Job.insertMany(jobs.map(({
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
        return sanitizedSalary ? withSalary(data, sanitizedSalary) : data;
      }), { ordered: false });
    } catch (error) {
      res.status(200).json(getInsertManyResult(jobs, error));
      return;
    }
    res.status(200).json({ added: jobs.length });
    return;
  } catch (error) {
    next(error);
  }
};

