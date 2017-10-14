import { Router } from 'express';

import { api as job } from 'server/job';
import { api as cvLibrary } from 'server/cv-library';

export default () => {
  const api = Router();

  api.use('/', job());
  api.use('/', cvLibrary());

  api.use((error, req, res, next) => {
    console.log(error);
    const message = error.message || error;
    console.error(`Error: ${message}`);
    res.status(500).json({ error: message });
  });
  return api;
};
