import { Router } from 'express';
import { models } from 'server/database';

import postJobs from './postJobs';

export default () => {
  const api = Router();

  api.use('/wordpress/post-jobs', async (req, res, next) => {
    try {
      const jobs = await models.Job.find(
        {
          _id: {
            $in: req.body,
          },
          'urls.posted': null,
        },
      );

      const postedJobs = await postJobs(jobs);

      console.log('Finished creating job posts');
      res.status(200).json([...postedJobs.filter(({ error }) => !error)]);
      return;
    } catch (error) {
      next(error);
    }
  });

  api.use('/wordpress/post-job', async (req, res, next) => {
    try {
      const {
        urls: { source: sourceUrl },
        ...otherJobProperties
      } = req.body;

      const job = new models.Job({
        ...otherJobProperties,
        urls: { source: sourceUrl },
      });
      // await job.save();

      const postedJobs = await postJobs(job);

      console.log('Finished creating job posts');
      res.status(200).json([...postedJobs.filter(({ error }) => !error)]);
      return;
    } catch (error) {
      next(error);
    }
  });

  return api;
};
