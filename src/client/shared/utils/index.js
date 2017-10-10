import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export const createAsyncAction = (name, payloadCreator) => {
  const actionCreator = createAction(`${name}@ASYNC_REQUEST`);
  actionCreator.failure = createAction(`${name}@ASYNC_FAILURE`);
  actionCreator.success = createAction(`${name}@ASYNC_SUCCESS`, payloadCreator);
  return actionCreator;
};

export const connectReselect = (selectors, ...rest) =>
  connect(createStructuredSelector(selectors), ...rest);
