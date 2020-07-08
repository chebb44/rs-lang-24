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
import {
  SET_LEARNED_WORDS,
  SET_CARDS_AMOUNT,
  SET_CORRECT_ANSWERS_PERCENT,
  SET_NEW_WORDS_AMOUNT,
  SET_LONGEST_CORRECT_ANSWER_SERIES,
} from './../reducers/statisticReducer/statisticActions';
import {
  INIT_APP,
  MARK_WORD,
  INIT_CARD_SET,
  MOVE_WORD,
} from './actionsForSaga';
import { initAppWorker } from '../sagas/initAppSaga';
import {
  SET_WORDS_PER_DAY,
  SET_AUTO_AUDIO,
  SET_AUTO_TRANSLATE,
  SET_MEANING_WORD,
  SET_EXAMPLE_WORD,
  SET_TRANSCRIPTION_WORD,
  SET_IMAGE,
  SET_CARDS_PER_DAY,
  SET_SHOW_ANSWER_BTN,
  SET_DELETE_BTN,
  SET_SHOW_MARK_DIFFICULTY_BTNS,
  UPDATE_LAST_CORRECT_WORD_INDEX,
  ADD_ANSWER_ACCURACY,
  CLEAR_ANSWER_ACCURACY,
  UPDATE_LAST_FINISHED_LEARNING_DATE,
} from '../reducers/learnSettings/learnSettingsActions';
import { markWordsWorker } from '../sagas/markUserWords';
import { initWordsForLearnWorker } from '../sagas/initWordsForLearnSaga';
import {
  UPDATE_PREV_PAGE_GROUP_WORD_NUMBER,
  SET_LEARN_MODE,
} from './../reducers/learnSettings/learnSettingsActions';
import { moveWordsWorker } from '../sagas/moveUserWords';
import {
  SPEAK_IT_SEND_GAME_RESULT,
  SPRINT_SEND_GAME_RESULT,
  AUDIO_CALL_SEND_GAME_RESULT,
  SAVANNA_GET_GAME_RESULT,
} from './../reducers/miniGamesStats/miniGamesStatsActions';
import {
  AUDIO_CALL_SAVE_GAME_LEVEL,
  AUDIO_CALL_SAVE_GAME_ROUND,
} from '../reducers/miniGamesDifficulty/miniGamesDifficultyActions';
import { resetLearningProperties } from '../sagas/resetLearningProperties';
const actionsForSenSettingsToBackendWorker = [
  SET_LEARN_MODE,
  SET_WORDS_PER_DAY,
  UPDATE_PREV_PAGE_GROUP_WORD_NUMBER,
  SET_AUTO_AUDIO,
  SET_AUTO_TRANSLATE,
  SET_MEANING_WORD,
  SET_EXAMPLE_WORD,
  SET_TRANSCRIPTION_WORD,
  SET_IMAGE,
  SET_CARDS_PER_DAY,
  SET_SHOW_ANSWER_BTN,
  SET_DELETE_BTN,
  SET_SHOW_MARK_DIFFICULTY_BTNS,
  UPDATE_LAST_CORRECT_WORD_INDEX,
  ADD_ANSWER_ACCURACY,
  CLEAR_ANSWER_ACCURACY,
  UPDATE_LAST_FINISHED_LEARNING_DATE,
  AUDIO_CALL_SAVE_GAME_LEVEL,
  AUDIO_CALL_SAVE_GAME_ROUND,
];

const actionsForSendStatisticToBackend = [
  SPRINT_SEND_GAME_RESULT,
  SPEAK_IT_SEND_GAME_RESULT,
  SET_LEARNED_WORDS,
  SET_CARDS_AMOUNT,
  SET_CORRECT_ANSWERS_PERCENT,
  SET_NEW_WORDS_AMOUNT,
  SET_LONGEST_CORRECT_ANSWER_SERIES,
  SPRINT_SEND_GAME_RESULT,
  AUDIO_CALL_SEND_GAME_RESULT,
  SAVANNA_GET_GAME_RESULT,
];

const actionsForResetLearnProperties = [
  SET_LEARN_MODE,
  SET_WORDS_PER_DAY,
  SET_CARDS_PER_DAY,

];
const actionsForInitWordsForLearn = [	
  INIT_CARD_SET,	
  UPDATE_PREV_PAGE_GROUP_WORD_NUMBER,	
  SET_WORDS_PER_DAY,	
  SET_CARDS_PER_DAY,	
  SET_LEARN_MODE,	
];
export function* sagaWatcher() {
  yield takeLatest(SIGN_UP_USER, signUpWorker);
  yield takeLatest(SIGN_IN_USER, signInWorker);
  yield takeEvery(LOG_OUT_USER, logOutWorker);

  yield takeLatest(INIT_APP, initAppWorker);

   yield takeLatest(
    actionsForInitWordsForLearn,
    INIT_CARD_SET,
    initWordsForLearnWorker
  );

  yield takeLatest(
    actionsForSenSettingsToBackendWorker,
    sendSettingsToBackendWorker,
  );

  yield takeLatest(
    actionsForSendStatisticToBackend,
    sendStatisticToBackendWorker,
  );

  yield takeLatest(actionsForResetLearnProperties, resetLearningProperties);

  yield takeEvery(MARK_WORD, markWordsWorker);
  yield takeEvery(MOVE_WORD, moveWordsWorker);
}
