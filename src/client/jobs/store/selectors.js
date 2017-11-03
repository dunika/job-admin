import { createSelector } from 'reselect';
import moment from 'moment';
import { compose, lowerCase } from 'lodash/fp';
import { createKeyedSelector } from 'client/shared/utils';

const getJobsState = ({ jobs }) => jobs;

const getIsLoading = createKeyedSelector('isLoading', getJobsState);

const getActiveFilters = createKeyedSelector('activeFilters', getJobsState);

const getSelectedJobIds = createKeyedSelector('selected', getJobsState);

const getData = createKeyedSelector('data', getJobsState);

const getPostedFilter = createKeyedSelector('posted', getActiveFilters);

const getLocationFilter = createKeyedSelector('location', getActiveFilters);

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
    return moment.utc(b.date).diff(moment.utc(a.date));
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
