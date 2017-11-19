import { createAsyncAction } from 'client/lib/redux-helpers';

export default {
  loadConfig: createAsyncAction('LOAD_CONFIG'),
};
