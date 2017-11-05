import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { createAction } from 'redux-actions';

export createAsyncSaga from './createAsyncSaga';

const [
  ASYNC_REQUEST_SUFFIX,
  ASYNC_FAILURE_SUFFIX,
  ASYNC_SUCCESS_SUFFIX,
] = ['REQUEST', 'FAILURE', 'SUCCESS'].reduce((results, action) => [...results, `@ASYNC_${action}`], []);

export const createAsyncAction = (name, payloadCreator) => {
  const requestAction = createAction(`${name}/${ASYNC_REQUEST_SUFFIX}`);
  const actionCreator = payload => requestAction(payload);
  actionCreator.request = requestAction;
  actionCreator.failure = createAction(`${name}/${ASYNC_FAILURE_SUFFIX}`);
  actionCreator.success = createAction(`${name}/${ASYNC_SUCCESS_SUFFIX}`, payloadCreator);

  actionCreator.toString = () => name;

  return actionCreator;
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

export const createKeyedSelector = (key, getState) => createSelector(
  getState,
  state => state[key],
);

export const connectReselect = (selectors, ...rest) =>
  connect(createStructuredSelector(selectors), ...rest);
