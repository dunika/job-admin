import { createSelector } from 'reselect';

const selectJobsState = ({ jobs }) => jobs;

const selectSelected = createSelector(
  selectJobsState,
  ({ selected }) => selected,
);

const selectJobs = createSelector(
  selectJobsState,
  ({ entities: { jobs }, result }) => result.map(id => jobs[id]),
);

export default {
  jobs: selectJobs,
  selected: selectSelected,
};
