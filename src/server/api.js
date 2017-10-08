import { Router } from 'express';
import restify from 'express-restify-mongoose';

import { api as cvLibrary } from 'server/cv-library';
import { models } from 'server/database';

export default () => {
  const api = Router();

  restify.serve(api, models.Job, {
    name: 'job',
    prefix: '',
    version: '',
  });

  api.use('/cv-library', cvLibrary());

  api.use((error, req, res) => {
    console.log(error);
    const message = error.message || error;
    console.error(`Error: ${message}`);
    res.status(500).json({ error: message });
  });
  return api;
};
