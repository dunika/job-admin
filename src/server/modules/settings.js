import { Router } from 'express';

import { models } from '../database';

export const api = () => {
  const routes = Router();

  routes.get('/settings', async (req, res, next) => {
    try {
      const result = await models.Setting.findOne({ name: 'facebook' }, '-_id name settings').lean();
      res.json({ ...result });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  routes.post('/settings', async (req, res, next) => {
    const { name, settings } = req.body;
    try {
      const setting = await models.Setting.findOneAndUpdate({ name }, { settings });

      await setting.save();
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  return routes;
};
