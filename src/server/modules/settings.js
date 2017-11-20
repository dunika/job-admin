import { Router } from 'express';

import { models } from '../database';

export const api = () => {
  const routes = Router();

  routes.post('/settings', async (req, res, next) => {
    const { name } = req.body;
    try {
      const { settings } = await models.Setting.findOne({ name }).lean();

      res.json({ settings });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  routes.post('/settings', async (req, res, next) => {
    const { name, settings: updatedSettings } = req.body;
    try {
      const setting = await models.Settings.findOne({ name });

      setting.settings = {
        ...setting.settings,
        ...updatedSettings,
      };

      await setting.save();
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  return routes;
};
