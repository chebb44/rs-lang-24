import { store } from '../store/store';
import { call } from 'redux-saga/effects';
import { putUserSettings } from '../utilities/network/settingsAPI';

export function* sendSettingsToBackendWorker() {
  const state = store.getState();
  const settings = state.settingsState;
  delete settings.id;
  const { id: userId, token } = state.currentUser;
  yield call(putUserSettings, { userId, token, data: settings });
}