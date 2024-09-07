import { all, fork } from 'redux-saga/effects';
import authSaga from './auth.saga';
import callSaga from './callSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(callSaga)]);
}
