import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  SIGN_UP_USER,
  SIGN_IN_USER,
  LOG_OUT_USER,
} from './../reducers/currentUser/currentUserActions';
import { signUpWorker, signInWorker } from '../sagas/signInUpSaga';
import { logOutWorker } from '../sagas/logoutSaga';
import { sendSettingsToBackendWorker } from '../sagas/sendSettingsToBackend';
import { sendStatisticToBackendWorker } from '../sagas/sendStatisticToBackend';
import { SET_LEARNED_WORDS } from './../reducers/statisticReducer/statisticActions';
import { INIT_APP, MARK_WORD, INIT_CARD_SET } from './actionsForSaga';
import { initAppWorker } from '../sagas/initAppSaga';
import {
  SET_WORDS_PER_DAY,
  SET_LEARN_MODE,
} from '../reducers/learnSettings/learnSettingsActions';
import { markWordsWorker } from '../sagas/markUserWords';
import { initWordsForLearnWorker } from '../sagas/initWordsForLearnSaga';
import { UPDATE_PREV_PAGE_GROUP_WORD_NUMBER } from './../reducers/learnSettings/learnSettingsActions';
export function* sagaWatcher() {
  yield takeLatest(SIGN_UP_USER, signUpWorker);
  yield takeLatest(SIGN_IN_USER, signInWorker);
  yield takeEvery(LOG_OUT_USER, logOutWorker);

  yield takeLatest(INIT_APP, initAppWorker);
  yield takeLatest(INIT_CARD_SET, initWordsForLearnWorker);

  yield takeLatest(SET_WORDS_PER_DAY, sendSettingsToBackendWorker);
  yield takeLatest(
    UPDATE_PREV_PAGE_GROUP_WORD_NUMBER,
    sendSettingsToBackendWorker,
  );
  yield takeLatest(SET_LEARN_MODE, sendSettingsToBackendWorker);

  yield takeLatest(SET_LEARNED_WORDS, sendStatisticToBackendWorker);

  yield takeEvery(MARK_WORD, markWordsWorker);
}
