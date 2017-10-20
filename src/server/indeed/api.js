import { Router } from 'express';

import search from './search';

export default () => {
  const routes = Router();
  routes.use('/indeed/search', search);
  return routes;
};
