import { Router } from 'express';

import { routes as cvLibrary } from 'cv-library';

export default () => {
  const api = Router();
  api.use('/cv-library', cvLibrary());
  return api;
};
