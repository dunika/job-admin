import { Router } from 'express';

import createPosts from './create-posts';
import getJobs from './add-jobs';

export default () => {
  const routes = Router();
  routes.use('/cv-library/create-posts', createPosts);
  routes.use('/cv-library/add-jobs', getJobs);
  return routes;
};
