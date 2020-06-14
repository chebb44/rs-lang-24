import { takeEvery } from 'redux-saga/effects';
import {
  SIGN_UP_USER,
  SIGN_IN_USER,
} from './../reducers/currentUser/currentUserActions';
import { signUpWorker, signInWorker } from '../sagas/signInUpSaga';

export function* sagaWatcher() {
  yield takeEvery(SIGN_UP_USER, signUpWorker);
  yield takeEvery(SIGN_IN_USER, signInWorker);
}
