import { Router } from 'express';

import { api as job } from 'server/modules/job';
import { api as wordpress } from 'server/modules/wordpress';
import { api as cvLibrary } from 'server/modules/cv-library';
import { api as indeed } from 'server/modules/indeed';
import { api as scrape } from 'server/modules/scraper';
import { apiErrorHandler } from 'server/middleware';
import { api as facebook } from 'server/facebook';

export default () => {
  const api = Router();

  api.use('/', job());
  api.use('/', scrape());
  api.use('/', indeed());
  api.use('/', cvLibrary());
  api.use('/', facebook());
  api.use('/', wordpress());

  api.use(apiErrorHandler());
  return api;
};
