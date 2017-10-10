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

export default handleActions({ // TODO: research lodash methods for making this easier
  [actions.getJobs]: state => ({ ...state, isLoading: true }),
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
  [actions.addCvLibraryJobs]: state => ({ ...state, isLoading: true }),
  [actions.addCvLibraryJobs.failure]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
  [actions.addCvLibraryJobs.success]: (state, { payload: { entities, results } }) => ({
    ...state,
    entities: {
      ...state.entities,
      ...entities,
    },
    results: {
      ...state.results,
      ...results,
    },
    isLoading: false,
  }),
  [actions.toggleJob]: (state, { payload }) => ({ ...state, selected: xor(state.selected, payload) }),
}, initialState);
