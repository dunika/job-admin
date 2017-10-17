import { handleActions } from 'redux-actions';
import { createAsyncLeaf } from 'client/shared/utils';

import actions from './actions';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

export default handleActions({ // TODO: research lodash methods for making this easier
  ...createAsyncLeaf(actions.search, (state, { payload }) => ({
    data: payload,
  })),
  ...createAsyncLeaf(actions.addJobToWordpress, ({ data }, { payload }) => ({
    data,
  })),
}, initialState);

