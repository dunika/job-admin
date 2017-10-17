import { createSelector } from 'reselect';
import moment from 'moment';
import { createKeyedDataSelector } from 'client/shared/utils';

const getJobsState = ({ indeed }) => indeed;

const getIsLoading = createKeyedDataSelector('isLoading', getJobsState);

const getData = createKeyedDataSelector('data', getJobsState);

const getJobs = createSelector(
  getData,
  data => (data ? Object.values(data) : []),
);

export default {
  jobs: getJobs,
  isLoading: getIsLoading,
};
