import { createAction } from 'redux-actions';
import { createAsyncAction } from 'client/shared/store/utils';

export default {
  toggleJob: createAction('TOGGLE_JOB', payload => [payload]),
  getJobs: createAsyncAction('GET_JOBS'),
};
