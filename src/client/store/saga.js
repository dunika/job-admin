import { takeEvery } from 'redux-saga/effects';
import { sagas as indeedSagas } from 'client/modules/indeed';
import { sagas as jobSagas } from 'client/modules/jobs';

function handleErrors({ payload }) {
  alert(payload);
  console.log(payload);
}

export default function* rootSaga() {
  yield [
    takeEvery(({ type }) => /@ASYNC_FAILURE/i.test(type), handleErrors),
    jobSagas.map(saga => saga()),
    indeedSagas.map(saga => saga()),
  ];
}

