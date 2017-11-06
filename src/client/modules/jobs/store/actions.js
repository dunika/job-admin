import { createAction } from 'redux-actions';
import { createAsyncAction } from 'client/lib/redux-helpers';

const normalizeJobs = data => data.reduce((results, job) => ({
  ...results,
  [job._id]: job,
}), {});

export default {
  addJobsToWordpress: createAsyncAction('ADD_JOBS_TO_WORDPRESS', normalizeJobs),
  addCvLibraryJobs: createAsyncAction('ADD_CVLIBRARY_JOB', normalizeJobs),
  dismissJobs: createAsyncAction('DISMISS_JOBS'),
  getJobs: createAsyncAction('GET_JOBS', normalizeJobs),
  toggleJob: createAction('TOGGLE_JOB'),
  togglePostedFilter: createAction('TOGGLE_POSTED_FILTER'), // TODO Name this isPosed
  setLocationFilter: createAction('SET_LOCATION_FILTER'),
};
