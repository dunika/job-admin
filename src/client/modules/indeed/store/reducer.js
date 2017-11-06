import { handleActions } from 'redux-actions';
import { createAsyncLeaf } from 'client/lib/redux-helpers';

import actions from './actions';

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

export default handleActions({ // TODO: research lodash methods for making this easier
  [actions.scrapeJobData]: createAsyncLeaf(({ data }, { payload: { id, ...rest } }) => ({
    data: {
      ...data,
      [id]: {
        ...data[id],
        ...rest,
      } },
  })),
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

