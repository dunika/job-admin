import { Router } from 'express';

import postJobs from './post-jobs';

export default () => {
  const api = Router();

  api.use('/wordpress/post-jobs', postJobs);

  return api;
};
