import { put } from 'redux-saga/effects';
import { resetCardProperties } from '../utilities/LearningContainer/resetCardProperties';
import { resetCardSetProperties } from '../utilities/LearningContainer/resetCardSetProperties';
import { actionClearLearnedWordsStatistic } from '../reducers/statisticReducer/statisticActions';
import { getDateStringByDate } from '../utilities/getDateStringByDate';

export function* resetLearningProperties() {
  // reset card properties
  resetCardProperties();

  // reset card set properties
  resetCardSetProperties();

  // clear card set's statistic
  const currentDate = getDateStringByDate(new Date());
  yield put(actionClearLearnedWordsStatistic(currentDate));
}
