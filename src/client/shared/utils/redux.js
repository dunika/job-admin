import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { createAction } from 'redux-actions';

import { call, put, takeLatest } from 'redux-saga/effects';
import { isFunction } from 'lodash';

const [
  ASYNC_REQUEST_SUFFIX,
  ASYNC_FAILURE_SUFFIX,
  ASYNC_SUCCESS_SUFFIX,
] = ['REQUEST', 'FAILURE', 'SUCCESS'].reduce((results, action) => [...results, `@ASYNC_${action}`]);

export const createAsyncAction = (name, payloadCreator) => {
  const actionCreator = (payload) => {
    const request = createAction(`${name}${ASYNC_REQUEST_SUFFIX}`);
    return request(payload);
  };
  actionCreator.failure = createAction(`${name}${ASYNC_FAILURE_SUFFIX}`);
  actionCreator.success = createAction(`${name}${ASYNC_SUCCESS_SUFFIX}`, payloadCreator);

  actionCreator.toString = () => name;

  return actionCreator;
};

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

const defaultSuccessHandler = (state, { payload }) => ({ data: payload });

export const createAsyncLeaf = (successHandler = defaultSuccessHandler) => ({
  [ASYNC_REQUEST_SUFFIX]: state => ({ ...state, isLoading: true }),
  [ASYNC_FAILURE_SUFFIX]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
  [ASYNC_SUCCESS_SUFFIX]: (state, action) => ({
    ...state,
    ...successHandler(state, action),
    isLoading: false,
  }),
});

export const createKeyedDataSelector = (key, getState) => createSelector(
  getState,
  state => state[key],
);

export const connectReselect = (selectors, ...rest) =>
  connect(createStructuredSelector(selectors), ...rest);
