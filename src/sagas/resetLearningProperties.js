import { put } from 'redux-saga/effects';
import { actionResetLearnSet } from '../reducers/learnSettings/learnSettingsActions';
import { actionResetLearnCard } from '../reducers/learnCard/learnCardActions';

export function* resetLearningProperties() {
  yield put(actionResetLearnCard());
  yield put(actionResetLearnSet());
}
