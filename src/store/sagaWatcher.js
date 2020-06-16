import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  SIGN_UP_USER,
  SIGN_IN_USER,
  LOG_OUT_USER,
} from './../reducers/currentUser/currentUserActions';
import { signUpWorker, signInWorker } from '../sagas/signInUpSaga';
import { logOutWorker } from '../sagas/logoutSaga';
import { SET_WORDS_PER_DAY } from './../reducers/settingsReducer/settingsActions';
import { sendSettingsToBackendWorker } from '../sagas/sendSettingsToBackend';
import { sendStatisticToBackendWorker } from '../sagas/sendStatisticToBackend';
import { SET_LEARNED_WORDS } from './../reducers/statisticReducer/statisticActions';
import { INIT_APP } from './actionsForSaga';
import { initAppWorker } from '../sagas/initAppSaga';

export function* sagaWatcher() {
  yield takeLatest(SIGN_UP_USER, signUpWorker);
  yield takeLatest(SIGN_IN_USER, signInWorker);
  yield takeEvery(LOG_OUT_USER, logOutWorker);

  yield takeLatest(INIT_APP, initAppWorker);

  yield takeLatest(SET_WORDS_PER_DAY, sendSettingsToBackendWorker);

  yield takeLatest(SET_LEARNED_WORDS, sendStatisticToBackendWorker);
}
