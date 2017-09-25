import { Router } from 'express';

import createPosts from './create-posts';
import getJobs from './get-jobs';

export default () => {
  const routes = Router();
  routes.use('/create-posts', createPosts);
  routes.use('/get-jobs', getJobs);
  return routes;
};
