import { createAsyncSaga } from 'client/lib/redux-helpers';

import request from 'client/lib/request';
import actions from './actions';

const loadConfig = createAsyncSaga(actions.loadConfig, request, '/api/config/search');

export default [
  loadConfig,
];
