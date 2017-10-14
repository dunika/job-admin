import { takeEvery } from 'redux-saga/effects';
import { sagas as jobSagas } from 'client/jobs';

function handleErrors({ payload }) {
  console.log(payload);
}

export default function* rootSaga() {
  yield [
    takeEvery(({ type }) => /@ASYNC_FAILURE/i.test(type), handleErrors),
    jobSagas.map(saga => saga()),
  ];
}

