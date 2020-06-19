import { store } from '../store/store';
import { call } from 'redux-saga/effects';
import { putUserSettings } from '../utilities/network/settingsAPI';

export function* sendSettingsToBackendWorker() {
  const state = store.getState();
  const { wordsPerDay, learnCardSettings } = state.learnSettings;
  const optional = {
    learnCardSettings: JSON.stringify(learnCardSettings),
  };
  const complexSettings = {
    wordsPerDay,
    optional,
  };
  const { id: userId, token } = state.currentUser;
  yield call(putUserSettings, { userId, token, data: complexSettings });
}
