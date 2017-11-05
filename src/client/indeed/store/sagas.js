import { createAsyncSaga } from 'client/shared/utils';

import { request } from 'isomorphic';
import actions from './actions';

const scrapeJobData = createAsyncSaga(actions.scrapeJobData, request.post, ({ payload }) => { //eslint-disable-line
  const { urls: { nonSponsoredSource } } = payload;
  return ['/api/scrape', { url: nonSponsoredSource }];
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
