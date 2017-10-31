import { createAsyncSaga } from 'client/shared/utils';

import { request } from 'isomorphic';
import actions from './actions';

const search = createAsyncSaga(actions.search, request.post, ({ payload }) => { //eslint-disable-line
  return ['/api/indeed/search', payload];
});

const postJobToWordpress = createAsyncSaga(actions.postJobToWordpress, request.post, ({ payload }) => { //eslint-disable-line
  return ['/api/wordpress/post-job', payload];
});

export default [
  postJobToWordpress,
  search,
];
