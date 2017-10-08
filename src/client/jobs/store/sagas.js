import { call, put, takeLatest } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';

import { request } from 'isomorphic';
import actions from './actions';

const jobSchema = new schema.Entity('jobs', {}, { idAttribute: '_id' });
const jobsSchema = [jobSchema];

function* getJobs(action) {
  try {
    const data = yield call(request, '/api/job');
    yield put(actions.getJobs.success(normalize(data, jobsSchema)));
  } catch (error) {
    yield put(actions.getJobs.failure(error));
  }
}

export default [
  takeLatest(actions.getJobs.request, getJobs),
];
