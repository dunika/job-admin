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

const mapData = data => data;

export const createAsyncSaga = (actionCreator, asyncFunction, args, dataMapper = mapData) => {
  function* execute(action) {
    const asyncArgs = yield getArgs(action, args);
    try {
      const data = yield call(asyncFunction, ...asyncArgs);
      yield put(actionCreator.success(dataMapper(data, action.payload)));
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
