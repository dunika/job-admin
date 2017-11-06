import { createAsyncSaga } from 'client/lib/redux-helpers';

import request from 'client/lib/request';
import actions from './actions';

const scrapeJobData = createAsyncSaga(actions.scrapeJobData, request.post, ({ payload }) => { //eslint-disable-line
  const { urls: { source } } = payload;
  return ['/api/scrape', { url: source }];
}, (data, payload) => {
  const { _id } = payload;
  return {
    id: _id,
    ...data,
  };
});

const search = createAsyncSaga(actions.search, request.post, ({ payload }) => { //eslint-disable-line
  return ['/api/indeed/search', payload];
});

const postJobToWordpress = createAsyncSaga(actions.postJobToWordpress, request.post, ({ payload }) => { //eslint-disable-line
  return ['/api/wordpress/post-job', payload];
});

export default [
  scrapeJobData,
  postJobToWordpress,
  search,
];
