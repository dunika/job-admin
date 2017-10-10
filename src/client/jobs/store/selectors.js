import { createSelector } from 'reselect';
import moment from 'moment';

const selectJobsState = ({ jobs }) => jobs;

const selectIsLoading = createSelector(
  selectJobsState,
  ({ isLoading }) => isLoading,
);

const selectSelected = createSelector(
  selectJobsState,
  ({ selected }) => selected,
);

const selectJobs = createSelector(
  selectJobsState,
  ({ entities: { jobs }, result }) => result.map(id => jobs[id]).sort((a, b) => { // eslint-disable-line arrow-body-style
    return moment.utc(a.date).diff(moment.utc(b.date));
  }),
);

export default {
  isLoading: selectIsLoading,
  jobs: selectJobs,
  selected: selectSelected,
};
