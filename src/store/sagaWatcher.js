import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  SIGN_UP_USER,
  SIGN_IN_USER,
  LOG_OUT_USER,
} from './../reducers/currentUser/currentUserActions';
import { signUpWorker, signInWorker } from '../sagas/signInUpSaga';
import { logOutWorker } from '../sagas/logoutSaga';

export function* sagaWatcher() {
  yield takeLatest(SIGN_UP_USER, signUpWorker);
  yield takeLatest(SIGN_IN_USER, signInWorker);
  yield takeEvery(LOG_OUT_USER, logOutWorker);
}
