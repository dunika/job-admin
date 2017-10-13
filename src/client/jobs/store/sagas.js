import { call, put, takeLatest } from 'redux-saga/effects';
import { isFunction } from 'lodash';

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

const getArgs = (args, action) => {
  if (isFunction(args)) {
    return args(action);
  }
  if (!Array.isArray(args)) {
    throw new Error(`createAsyncSaga expected an array of arguments, instead got: ${args}`);
  }
  if (args) {
    return args;
  }
  const { payload } = action;
  return payload ? [payload] : [];
};

const createAsyncSaga = (actionCreator, asyncFunction, args) => {
  function* execute(action) {
    const asyncArgs = getArgs(args, action);
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

