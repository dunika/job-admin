import { createSelector } from 'reselect';
import { createKeyedSelector } from 'client/shared/utils';

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
