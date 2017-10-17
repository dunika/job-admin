import { createAsyncSaga } from 'client/shared/utils';

import { request } from 'isomorphic';
import actions from './actions';

const search = createAsyncSaga(actions.search, request.post, ({ payload }) => { //eslint-disable-line
  return ['/api/indeed/search', payload];
});

const addJobToWordpress = createAsyncSaga(actions.addJobToWordpress, request.post, ({ payload }) => { //eslint-disable-line
  return ['/api/indeed/post-job', payload];
});

export default [
  addJobToWordpress,
  search,
];
