import parseXml from 'xml2json';

import { cvLibraryApi } from 'config';
import request from 'isomorphic';
import { getInsertManyResult, models } from 'database';

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
    const xml = await request(cvLibraryApi);
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
        return sanitazedSalary ? withSalary(data, sanitazedSalary) : data;
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

