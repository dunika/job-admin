import { Router } from 'express';

import createPosts from './create-posts';
import getJobs from './add-jobs';

export default () => {
  const routes = Router();
  routes.use('/create-posts', createPosts);
  routes.use('/add-jobs', getJobs);
  return routes;
};
