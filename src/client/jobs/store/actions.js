import { createAction } from 'redux-actions';
import { createAsyncAction } from 'client/shared/utils';

const normalizeJobs = data => data.reduce((results, job) => ({
  ...results,
  [job._id]: job,
}), {});

export default {
  addJobsToWordpress: createAsyncAction('ADD_JOBS_TO_WORDPRESS', normalizeJobs),
  addCvLibraryJobs: createAsyncAction('ADD_CVLIBRARY_JOB', normalizeJobs),
  dismissJobs: createAsyncAction('DISMISS_JOBS'),
  getJobs: createAsyncAction('GET_JOBS', normalizeJobs),
  toggleJob: createAction('TOGGLE_JOB', payload => [payload]),
};

