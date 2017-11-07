import { takeEvery } from 'redux-saga/effects';
import { sagas as indeedSagas } from 'client/modules/indeed';
import { sagas as jobSagas } from 'client/modules/jobs';
import { isServer } from 'isomorphic/utils';

function handleErrors({ payload }) {
  if (!isServer) {
    alert(payload);
    console.log(payload);
  }
}

function handleNotifications({ meta }) {
  if (!isServer && meta && meta.message) {
    alert(meta.message);
  }
}

export default function* rootSaga() {
  yield [
    takeEvery('*', handleNotifications),
    takeEvery(({ type }) => /@ASYNC_FAILURE/i.test(type), handleErrors),
    jobSagas.map(saga => saga()),
    indeedSagas.map(saga => saga()),
  ];
}

