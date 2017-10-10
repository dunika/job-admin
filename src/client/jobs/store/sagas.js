import { call, put, takeLatest } from 'redux-saga/effects';

import { request } from 'isomorphic';
import actions from './actions';

function* getJobs(action) {
  try {
    const data = yield call(request, '/api/job');
    yield put(actions.getJobs.success(data));
  } catch (error) {
    yield put(actions.getJobs.failure(error));
    throw new Error(error);
    console.log(error);
  }
}

function* addCvLibraryJobs(action) {
  try {
    const data = yield call(request, '/api/cv-library/add-jobs');
    yield put(actions.addCvLibraryJobs.success(data));
  } catch (error) {
    yield put(actions.addCvLibraryJobs.failure(error));
    throw new Error(error);
    console.log(error);
  }
}

export default [
  takeLatest(actions.getJobs, getJobs),
  takeLatest(actions.addCvLibraryJobs, addCvLibraryJobs),
];
