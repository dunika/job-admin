import { Router } from 'express';
import { models } from 'server/database';
import { omit } from 'lodash';

import BlueBird from 'bluebird';
import postJob from './post-job';

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

      const postedJobs = await BlueBird.map(jobs, async (job) => {
        try {
          const url = await postJob(omit(job._doc, ['date', '_id']));
          job.urls.posted = url;
          await job.save();
          return job._doc;
        } catch (error) {
          console.log(error);
          return false;
        }
      }, { concurrency: 1 });

      console.log('Finished creating job posts');
      res.status(200).json([...postedJobs.filter(value => value)]);
      return;
    } catch (error) {
      next(error);
    }
  });

  api.use('/wordpress/post-job', async (req, res, next) => {
    try {
      const jobData = req.body;
      console.log(jobData);
      const url = await postJob(jobData);

      const job = new models.Job({
        ...jobData,
        urls: {
          ...jobData.urls,
          posted: url,
        },
      });

      await job.save();
      console.log('Finished creating job posts');
      res.status(200).json({ ...job._doc });
      return;
    } catch (error) {
      next(error);
    }
  });

  return api;
};
