import { handleActions } from 'redux-actions';
import { createAsyncLeaf } from 'client/shared/utils';

import actions from './actions';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

export default handleActions({ // TODO: research lodash methods for making this easier
  [actions.search]: createAsyncLeaf((state, { payload }) => ({
    data: payload,
  })),
  [actions.addJobToWordpress]: createAsyncLeaf(({ data }, { payload }) => ({
    data: {
      ...data,
      [payload[0].sourceId]: payload[0],
    },
  })),
}, initialState);

