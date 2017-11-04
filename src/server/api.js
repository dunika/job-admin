import { Router } from 'express';

import { api as job } from 'server/job';
import { api as wordpress } from 'server/wordpress';
import { api as cvLibrary } from 'server/cv-library';
import { api as indeed } from 'server/indeed';
import { api as scrape } from 'server/scraper';

export default () => {
  const api = Router();

  api.use('/', job());
  api.use('/', scrape());
  api.use('/', indeed());
  api.use('/', cvLibrary());
  api.use('/', wordpress());

  api.use((error, req, res, next) => {
    console.log(error);
    const message = error.message || error;
    console.error(`Error: ${message}`);
    res.status(500).json({ error: message });
  });
  return api;
};
