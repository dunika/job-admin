import { handleActions } from 'redux-actions';
import { createAsyncLeaf } from 'client/shared/utils';

import actions from './actions';

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};


export default handleActions({ // TODO: research lodash methods for making this easier
  [actions.search]: createAsyncLeaf((state, { payload }) => ({
    data: payload,
  })),
  [actions.postJobToWordpress]: createAsyncLeaf(({ data }, { payload }) => ({
    data: {
      ...data,
      [payload.sourceId]: payload,
    },
  })),
}, initialState);

