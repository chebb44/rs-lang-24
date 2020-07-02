import { put } from 'redux-saga/effects';
import {
  actionUpdateEnteredWord,
  actionUpdateSubmissionFlag,
  actionUpdateWordCorrectFlag,
  actionUpdateCheckDisplaying,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
  actionUpdateAnswerShownFlag,
  actionUpdateCurrentCardIndex,
} from '../reducers/learnCard/learnCardActions';
import {
  actionUpdateLastCorrectWordIndex,
  actionClearAnswerAccuracy,
} from '../reducers/learnSettings/learnSettingsActions';
import { actionClearLearnedWordsStatistic } from '../reducers/statisticReducer/statisticActions';
import { getDateStringByDate } from '../utilities/getDateStringByDate';

export function* setDefaultLearningProperties() {
  // set default card properties
  yield put(actionUpdateAnswerShownFlag(false));
  yield put(actionUpdateEnteredWord(''));
  yield put(actionUpdateSubmissionFlag(false));
  yield put(actionUpdateWordCorrectFlag(false));
  yield put(actionUpdateCheckDisplaying(false));
  yield put(actionUpdateAudiosToPlay([]));
  yield put(actionUpdateCurrentAudio(null));

  // set default cards set properties
  yield put(actionUpdateCurrentCardIndex(0));
  yield put(actionUpdateLastCorrectWordIndex(-1));
  yield put(actionClearAnswerAccuracy([]));

  // clear card set's statistic
  const currentDate = getDateStringByDate(new Date());
  yield put(actionClearLearnedWordsStatistic(currentDate));
}
