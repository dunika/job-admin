import { select } from 'redux-saga/effects';
import { createAsyncSaga } from 'client/shared/utils';

import { request } from 'isomorphic';
import selectors from './selectors';
import actions from './actions';

const addCvLibraryJobs = createAsyncSaga(actions.addCvLibraryJobs, request, '/api/cv-library/add-jobs');

const dismissJobs = createAsyncSaga(actions.dismissJobs, request.patch, function* () { // eslint-disable-line func-names
  const jobIds = yield select(selectors.selectedJobIdsArray);
  return ['api/job', jobIds.map(id => ({ _id: id, flag: 'dismissed' }))];
});

const addJobsToWordpress = createAsyncSaga(actions.addJobsToWordpress, request.post, function* () { // eslint-disable-line func-names
  const jobIds = yield select(selectors.selectedJobIdsArray);
  return ['/api/wordpress/post-jobs', jobIds];
});

export default [
  addJobsToWordpress,
  getJobs,
  dismissJobs,
  addCvLibraryJobs,
];
