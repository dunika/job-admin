import { call, put, takeLatest } from 'redux-saga/effects';
import { isFunction } from 'lodash';

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

export const createAsyncSaga = (actionCreator, asyncFunction, args) => {
  function* execute(action) {
    console.log('ls');
    const asyncArgs = yield getArgs(action, args);
    try {
      const data = yield call(asyncFunction, ...asyncArgs);
      yield put(actionCreator.success(data));
    } catch (error) {
      yield put(actionCreator.failure(error));
    }
  }

  function* wait() {
    yield takeLatest(actionCreator.request, execute);
  }

  return wait;
};


export default createAsyncSaga;
