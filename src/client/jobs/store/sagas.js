import { call, put, select, takeLatest } from 'redux-saga/effects';
import { isFunction } from 'lodash';

import { request } from 'isomorphic';
import actions from './actions';

function* getArgs(action, args) {
  if (isFunction(args)) {
    yield args(action);
  }
  if (!Array.isArray(args)) {
    throw new Error(`createAsyncSaga expected an array of arguments, instead got: ${args}`);
  }
  if (args) {
    return args;
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
      throw new Error(error);
    }
  }

  function* wait() {
    yield takeLatest(actionCreator, execute);
  }

  return wait;
};


const getJobs = createAsyncSaga(actions.getJobs, request, '/api/job');
const dismissJob = createAsyncSaga(actions.getJobs, request.put, ({ payload }) => [`api/job/${payload}`, { flag: 'dismissed' }]);
const addCvLibraryJobs = createAsyncSaga(actions.addCvLibraryJobs, request, '/api/cv-library/add-jobs');

const addJobsToWordpress = createAsyncSaga(actions.addCvLibraryJobs, request, function* () { // eslint-disable-line func-names
  const jobs = yield select(({ jobs: { selected } }) => selected);
  return ['/api/wordpress/add-jobs', jobs];
});

export default [
  addJobsToWordpress,
  getJobs,
  dismissJob,
  addCvLibraryJobs,
];
