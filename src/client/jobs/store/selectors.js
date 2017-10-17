import { createSelector } from 'reselect';
import moment from 'moment';
import { compose, lowerCase } from 'lodash/fp';
import { createKeyedDataSelector } from 'client/shared/utils';

const getJobsState = ({ jobs }) => jobs;

const getIsLoading = createKeyedDataSelector('isLoading', getJobsState);

const getActiveFilters = createKeyedDataSelector('activeFilters', getJobsState);

const getSelectedJobIds = createKeyedDataSelector('selected', getJobsState);

const getData = createKeyedDataSelector('data', getJobsState);

const getPostedFilter = createKeyedDataSelector('posted', getActiveFilters);

const getLocationFilter = createKeyedDataSelector('location', getActiveFilters);

const getSelectedJobIdsArray = createSelector(
  getSelectedJobIds,
  selectedJobIds => Object.entries(selectedJobIds)
    .reduce((results, [key, value]) => ([
      ...results,
      ...value ? [key] : [],
    ]), []),
);

const getSelectedJobs = createSelector(
  getData,
  getSelectedJobIdsArray,
  (data, selectedJobIds) => selectedJobIds.map(key => data[key]),
);

const getJobs = createSelector(
  getData,
  data => (data ? Object.values(data).sort((a, b) => { // eslint-disable-line arrow-body-style
    return moment.utc(a.date).diff(moment.utc(b.date));
  }) : []),
);

const filterOperationBuilders = {
  posted: posted => jobs => (!posted ? jobs : jobs.filter(({ urls: { posted } }) => !!posted)),
  location: location => (jobs) => {
    if (!location) {
      return jobs;
    }
    return jobs.filter(({ location: jobLocation }) => (
      lowerCase(jobLocation).includes(lowerCase(location))
    ));
  },
};

const getFilteredJobs = createSelector(
  getJobs,
  getActiveFilters,
  (jobs, activeFilters) => {
    const filterOperations = Object.keys(activeFilters).map((filterKey) => {
      const operationBuilder = filterOperationBuilders[filterKey];
      const operationData = activeFilters[filterKey];
      const operation = operationBuilder(operationData);
      return operation;
    });
    const filterJobs = compose(...filterOperations);
    return filterJobs(jobs);
  },
);

export default {
  postedFilter: getPostedFilter,
  locationFilter: getLocationFilter,
  isLoading: getIsLoading,
  filteredJobs: getFilteredJobs,
  selectedJobs: getSelectedJobs,
  selectedJobIds: getSelectedJobIds,
  selectedJobIdsArray: getSelectedJobIdsArray,
};
