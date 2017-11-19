import { handleActions } from 'redux-actions';

import { createAsyncLeaf } from 'client/lib/redux-helpers';
import actions from './actions';

const initalState = {
  isLoading: false,
  error: null,
  data: null,
};

const reducer = handleActions({
  [actions.loadConfig]: createAsyncLeaf(),
}, initalState);

export default reducer;

