import { Router } from 'express';
import BlueBird from 'bluebird';
import restify from 'express-restify-mongoose';

import { models } from '../database';

export default () => {
  const api = Router();

  restify.serve(api, models.Job, {
    name: 'job',
    prefix: '',
    version: '',
  });

  api.patch('/job', async (req, res, next) => {
    try {
      const updatedJobs = await BlueBird.map(req.body, async ({ _id, ...data }) => {
        const updatedJob = await models.Job.findByIdAndUpdate({ _id }, { $set: { ...data } });
        return updatedJob;
      });
      res.status(200).json(updatedJobs.map(({ _id }) => _id));
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  return api;
};
