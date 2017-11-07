import parseXml from 'xml2json';
import { isString } from 'lodash';
import BlueBird from 'bluebird';
import request from 'request-promise';
import { Router } from 'express';

import locations from 'isomorphic/locations';
import { models } from 'server/database';
import { cvLibraryApi } from 'config';

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
    const jobLocation = locations.find(region => regex.test(region));
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

export const api = () => {
  const routes = Router();
  routes.use('/cv-library/add-jobs', async (req, res, next) => {
    res.status(200).json({ message: 'Operation started. Refresh this page in about 5 minutes to see new jobs' });
    try {
      console.log('Fetching jobs from CV Library');
      const xml = await request(cvLibraryApi);
      const { jobs: { job: parsedJobs } } = parseXml.toJson(xml, { object: true });
      const jobs = withLocation(parsedJobs);
      await BlueBird.map(jobs, async ({
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
          return null;
        }
      });
      return;
    } catch (error) {
      next(error);
    }
  });

  return routes;
};
