import { handleActions } from 'redux-actions';

import actions from './actions';

function toggleArray(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    return [
      ...array.slice(0, index),
      ...array.slice(index + 1),
    ];
  }
  return [...array, item];
}

const initialState = {
  activeFilters: [],
  data: null,
  selected: {},
  error: null,
  isLoading: false,
};

const createAsyncLeaf = (asyncAction, successHandler) => ({
  [asyncAction]: state => ({ ...state, isLoading: true }),
  [asyncAction.failure]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
  [asyncAction.success]: (state, action) => ({
    ...state,
    ...successHandler(state, action),
    isLoading: false,
  }),
});

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
      [payload]: !state.selected,
    },
  }),
  [actions.toggleFilter]: (state, { payload }) => ({
    ...state,
    activeFilters: toggleArray(state.activeFilters, payload),
  }),
}, initialState);

