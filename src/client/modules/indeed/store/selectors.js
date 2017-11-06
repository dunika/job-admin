import { createSelector } from 'reselect';
import { createKeyedSelector } from 'client/lib/redux-helpers';

const getJobsState = ({ indeed }) => indeed;

const getIsLoading = createKeyedSelector('isLoading', getJobsState);

const getData = createKeyedSelector('data', getJobsState);

const getJobs = createSelector(
  getData,
  data => (data ? Object.values(data) : []),
);

export default {
  jobs: getJobs,
  isLoading: getIsLoading,
};
