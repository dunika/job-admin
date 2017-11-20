import { createAsyncSaga } from 'client/lib/redux-helpers';

import request from 'client/lib/request';
import actions from './actions';

const loadSettings = createAsyncSaga(actions.loadSettings, request, '/api/settings');

export default [
  loadSettings,
];
