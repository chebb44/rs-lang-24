import { call, select } from 'redux-saga/effects';
import { putUserSettings } from '../utilities/network/settingsAPI';
import { learnSettingsSelector } from './../reducers/learnSettings/learnSettingsReducer';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';

export function* sendSettingsToBackendWorker() {
  const { wordsPerDay, learnCardSettings } = yield select(
    learnSettingsSelector,
  );
  console.log(
    'function*sendSettingsToBackendWorker -> learnCardSettings',
    learnCardSettings,
  );
  const optional = {
    learnCardSettings: yield JSON.stringify(learnCardSettings),
  };
  const complexSettings = {
    wordsPerDay,
    optional,
  };
  const { id: userId, token } = yield select(currentUserSelector);
  yield call(putUserSettings, { userId, token, data: complexSettings });
}
