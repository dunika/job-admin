import { all } from 'redux-saga/effects';
import { sagas as jobSagas } from 'client/jobs';

export default function* rootSaga() {
  yield all([
    ...jobSagas,
  ]);
}
