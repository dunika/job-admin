import fs from 'fs';
import { promisify } from 'util';

import parseXml from 'xml2json';

import config from 'config';
import request from 'shared/request';
import { models } from 'database';
import { resolvePath } from 'utils';

const read = promisify(fs.readFile);

const sanitizeSalary = (salary) => {
  if (typeof salary === 'string') {
    const sanitized = salary.replace(/&pound;|&euro;/g, '€').replace('€NEG', '');
    const match = sanitized.match(/(.*[/][^\s]+)/g);
    return match ? match[0] : sanitized;
  }
  return null;
};

const withSalary = ({ description, ...data }, salary) => ({
  salary,
  description: `${salary}
          
${description}`,
  ...data,
});

export default async (req, res, next) => {
  try {
    console.log('Fetching jobs from CV Library');
    // const xml = await request(config.cvLibrary);
    const xml = await read(resolvePath('../files/test.xml', 'utf8'));
    const { jobs: { job: jobs } } = parseXml.toJson(xml, { object: true });
    try {
      await models.Job.insertMany(jobs.map(({
        description,
        jobref,
        location,
        salary,
        title,
        url,
      }) => {
        const sanitazedSalary = sanitizeSalary(salary);
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
        console.log(jobref);
        return sanitazedSalary ? withSalary(data, sanitazedSalary) : data;
      }), { ordered: false });
    } catch (error) {
      console.log('lad');
      console.log(error.message || error);
    }
    console.log('done');
    res.status(200);
  } catch (error) {
    next(error);
  }
};

