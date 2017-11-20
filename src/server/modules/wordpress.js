import { Router } from 'express';
import { omit } from 'lodash';
import request from 'request-promise';
import BlueBird from 'bluebird';

import { models } from 'server/database';
import { createPost } from 'config';

const postJob = async (job) => {
  const {
    urls: { source },
    location,
    salary,
    date,
    ...otherJobProperties
  } = job;
  try {
    const response = await request.post({
      url: createPost.url,
      json: true,
      formData: {
        action: createPost.action,
        location,
        locationId: location,
        url: source,
        ...salary && { salary },
        ...otherJobProperties,
      },
    });
    if (response.url) {
      console.log(`Succesfully posted to ${response.url}`);
      return response.url;
    }
    throw new Error(`Failed to post - ${response}`);
  } catch (error) {
    throw error;
  }
};

const postAndSave = async (job) => {
  try {
    const url = await postJob(omit(job._doc, ['date', '_id']));
    job.urls.posted = url;
    await job.save();
    return job._doc;
  } catch (error) {
    throw error;
  }
};

export const api = () => {
  const routes = Router();

  routes.use('/wordpress/post-jobs', async (req, res, next) => {
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
          const postedJob = await postAndSave(job);
          return postedJob;
        } catch (error) {
          console.log(error);
          return false;
        }
      }, { concurrency: 1 });

      console.log('Finished creating job posts');
      res.json([...postedJobs.filter(value => value)]);
      return;
    } catch (error) {
      next(error);
    }
  });

  routes.use('/wordpress/post-job', async (req, res, next) => {
    try {
      const jobData = req.body;

      const job = new models.Job(jobData);

      const postedJob = await postAndSave(job);
      await job.save();
      console.log('Finished creating job post');
      res.json({ postedJob });
      return;
    } catch (error) {
      next(error);
    }
  });

  return api;
};
