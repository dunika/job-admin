import { createAsyncAction } from 'client/lib/redux-helpers';

export default {
  loadSettings: createAsyncAction('LOAD_SETTINGS'),
};
