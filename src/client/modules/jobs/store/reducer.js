import { handleActions } from 'redux-actions';
import { createAsyncLeaf } from 'client/lib/redux-helpers';

import actions from './actions';

const initialState = {
  activeFilters: {
    posted: false,
    location: '',
  },
  data: null,
  selected: {},
  error: null,
  isLoading: false,
};


export default handleActions({ // TODO: research lodash methods for making this easier
  [actions.getJobs]: createAsyncLeaf(),
  [actions.addCvLibraryJobs]: createAsyncLeaf(({ data }, { payload }) => ({
    data: {
      ...data,
      ...payload,
    },
  })),
  [actions.addJobsToWordpress]: createAsyncLeaf(({ data }, { payload }) => ({
    data: {
      ...data,
      ...payload,
    },
  })),
  [actions.dismissJobs]: createAsyncLeaf(({ data }, { payload }) => ({
    data: {
      ...Object.keys(data)
        .filter(id => !payload.includes(id))
        .reduce((newData, item) => ({
          ...newData, [item]: data[item],
        }), {}),
    },
  })),
  [actions.toggleJob]: (state, { payload }) => ({
    ...state,
    selected: {
      ...state.selected,
      [payload]: !state.selected[payload],
    },
  }),
  [actions.togglePostedFilter](state) {
    const { activeFilters } = state;
    return {
      ...state,
      activeFilters: {
        ...activeFilters,
        posted: !activeFilters.posted,
      },
    };
  },
  [actions.setLocationFilter](state, { payload }) {
    const { activeFilters } = state;
    return {
      ...state,
      activeFilters: {
        ...activeFilters,
        location: payload,
      },
    };
  },
}, initialState);
