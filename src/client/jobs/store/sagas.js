import { call, put, select, takeLatest } from 'redux-saga/effects';
import { isFunction } from 'lodash';

import { request } from 'isomorphic';
import selectors from './selectors';
import actions from './actions';

function* getArgs(action, args) {
  if (isFunction(args)) {
    return yield args(action);
  }
  if (args) {
    return Array.isArray(args) ? args : [args];
  }
  const { payload } = action;
  return payload ? [payload] : [];
}


const createAsyncSaga = (actionCreator, asyncFunction, args) => {
  function* execute(action) {
    const asyncArgs = yield getArgs(action, args);
    try {
      const data = yield call(asyncFunction, ...asyncArgs);
      yield put(actionCreator.success(data));
    } catch (error) {
      yield put(actionCreator.failure(error));
    }
  }

  function* wait() {
    yield takeLatest(actionCreator, execute);
  }

  return wait;
};

const getJobs = createAsyncSaga(actions.getJobs, request, ['/api/job', {
  queryString: {
    query: JSON.stringify({
      flag: { $ne: 'dismissed' },
    }),
  },
}]);
const addCvLibraryJobs = createAsyncSaga(actions.addCvLibraryJobs, request, '/api/cv-library/add-jobs');

const dismissJobs = createAsyncSaga(actions.dismissJobs, request.patch, function* () { // eslint-disable-line func-names
  const jobIds = yield select(selectors.selected);
  return ['api/job', jobIds.map(id => ({ _id: id, flag: 'dismissed' }))];
});

const addJobsToWordpress = createAsyncSaga(actions.addCvLibraryJobs, request, function* () { // eslint-disable-line func-names
  const jobIds = yield select(selectors.selected);
  return ['/api/wordpress/add-jobs', jobIds];
});

export default [
  addJobsToWordpress,
  getJobs,
  dismissJobs,
  addCvLibraryJobs,
];
