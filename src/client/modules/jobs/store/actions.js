import { createAction } from 'redux-actions';
import { createAsyncAction } from 'client/lib/redux-helpers';

const normalizeJobs = data => data.reduce((results, job) => ({
  ...results,
  [job._id]: job,
}), {});

export default {
  addCvLibraryJobs: createAsyncAction('ADD_CVLIBRARY_JOBS', undefined, ({ message }) => ({ message })),
  addJobsToWordpress: createAsyncAction('ADD_JOBS_TO_WORDPRESS', normalizeJobs),
  dismissJobs: createAsyncAction('DISMISS_JOBS'),
  getJobs: createAsyncAction('GET_JOBS', normalizeJobs),
  setLocationFilter: createAction('SET_LOCATION_FILTER'),
  toggleIsPostedFilter: createAction('TOGGLE_IS_POSTED_FILTER'), // TODO Name this isPosed
  toggleJob: createAction('TOGGLE_JOB'),
};

