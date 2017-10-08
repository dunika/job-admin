import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export const createAsyncAction = name => ({
  request: createAction(`${name}@ASYNC_REQUEST`),
  failure: createAction(`${name}@ASYNC_FAILURE`),
  success: createAction(`${name}@ASYNC_SUCCESS`),
});


export const connectReselect = (selectors, ...rest) =>
  connect(createStructuredSelector(selectors), ...rest);
