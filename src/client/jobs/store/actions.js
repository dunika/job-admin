import { createAction } from 'redux-actions';
import { createAsyncAction } from 'client/shared/utils';

import { normalize, schema } from 'normalizr';

const jobSchema = new schema.Entity('jobs', {}, { idAttribute: '_id' });
const jobsSchema = [jobSchema];

const normalizeJobs = data => normalize(data, jobsSchema);

export default {
  toggleJob: createAction('TOGGLE_JOB', payload => [payload]),
  getJobs: createAsyncAction('GET_JOBS', normalizeJobs),
  addCvLibraryJobs: createAsyncAction('ADD_CVLIBRARY_JOB', normalizeJobs),
};
