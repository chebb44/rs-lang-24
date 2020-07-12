import { call, select } from 'redux-saga/effects';
import { putUserSettings } from '../utilities/network/settingsAPI';
import { learnSettingsSelector } from './../reducers/learnSettings/learnSettingsReducer';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';
import { miniGamesDifficultySelector } from '../reducers/miniGamesDifficulty/miniGamesDifficultyReducer';

export function* sendSettingsToBackendWorker() {
  const { wordsPerDay, learnCardSettings } = yield select(
    learnSettingsSelector,
  );
  const miniGamesDifficulty = yield select(miniGamesDifficultySelector);
  const optional = {
    miniGamesDifficulty,
    learnCardSettings,
  };
  const complexSettings = {
    wordsPerDay,
    optional,
  };
  const { id: userId, token } = yield select(currentUserSelector);
  yield call(putUserSettings, { userId, token, data: complexSettings });
}
