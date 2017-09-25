import { Router } from 'express';

import { routes as cvLibrary } from 'server/jobs/cv-library';

export default () => {
  const api = Router();
  api.use('/cv-library', cvLibrary());
  api.use((error, req, res, next) => {
    const message = error.message || error;
    console.error(`Error: ${message}`);
    res.status(500).json({ error: message });
  });
  return api;
};
