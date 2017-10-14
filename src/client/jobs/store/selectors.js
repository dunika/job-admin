import { createSelector } from 'reselect';
import moment from 'moment';
import { compose } from 'lodash/fp';

const selectJobsState = ({ jobs }) => jobs;

const createKeyedDataSelector = (key, selectState) => createSelector(
  selectState,
  state => state[key],
);

const selectIsLoading = createKeyedDataSelector('isLoading', selectJobsState);

const selectActiveFilters = createKeyedDataSelector('activeFilters', selectJobsState);

const selectSelectedJobs = createSelector(
  selectJobsState,
  ({ selected }) => (
    Object.entries(selected)
      .reduce((results, [key, value]) => ([
        ...results,
        ...value ? [key] : [],
      ]), [])
  ),
);

const selectJobs = createSelector(
  selectJobsState,
  ({ data }) => (data ? Object.values(data).sort((a, b) => { // eslint-disable-line arrow-body-style
    return moment.utc(a.date).diff(moment.utc(b.date));
  }) : []),
);

const filterOperations = {
  posted: jobs => jobs.filter(({ urls: { posted } }) => !!posted),
};

const selectFilteredJobs = createSelector(
  selectJobs,
  selectActiveFilters,
  (jobs, activeFilters) => {
    const filterJobs = compose(...activeFilters.map(filter => filterOperations[filter]));
    return filterJobs(jobs);
  },
);

export default {
  activeFilters: selectActiveFilters,
  isLoading: selectIsLoading,
  filteredJobs: selectFilteredJobs,
  selectedJobs: selectSelectedJobs,
};
