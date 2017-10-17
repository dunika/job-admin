import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { createAction } from 'redux-actions';

import { call, put, takeLatest } from 'redux-saga/effects';
import { isFunction } from 'lodash';

export const createAsyncAction = (name, payloadCreator) => {
  const actionCreator = createAction(`${name}@ASYNC_REQUEST`);
  actionCreator.failure = createAction(`${name}@ASYNC_FAILURE`);
  actionCreator.success = createAction(`${name}@ASYNC_SUCCESS`, payloadCreator);
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

export const createAsyncLeaf = (asyncAction, successHandler = defaultSuccessHandler) => ({
  [asyncAction]: state => ({ ...state, isLoading: true }),
  [asyncAction.failure]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
  [asyncAction.success]: (state, action) => ({
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
