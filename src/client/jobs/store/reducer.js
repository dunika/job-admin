import { handleActions } from 'redux-actions';
import { createAsyncLeaf } from 'client/shared/utils';

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
  ...createAsyncLeaf(actions.getJobs, (state, { payload }) => ({
    data: payload,
  })),
  ...createAsyncLeaf(actions.addCvLibraryJobs, ({ data }, { payload }) => ({
    data: {
      ...data,
      ...payload,
    },
  })), // TODO Fix this mess with lodash
  ...createAsyncLeaf(actions.dismissJobs, ({ data }, { payload }) => ({
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

