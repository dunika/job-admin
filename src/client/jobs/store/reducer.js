import { handleActions } from 'redux-actions';
import { xor } from 'lodash';

import actions from './actions';

const initialState = {
  entities: {
    jobs: {},
  },
  result: [],
  selected: [],
  error: null,
  isLoading: false,
};

export default handleActions({
  [actions.getJobs.request]: state => ({ ...state, isLoading: true }),
  [actions.getJobs.failure]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
  [actions.getJobs.success]: (state, { payload }) => ({
    ...state,
    ...payload,
    isLoading: false,
  }),
  [actions.toggleJob]: (state, { payload }) => ({ ...state, selected: xor(state.selected, payload) }),
}, initialState);
