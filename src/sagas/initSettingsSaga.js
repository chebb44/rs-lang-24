import { getUserSettings } from '../utilities/network/settingsAPI';
import { call, put } from 'redux-saga/effects';
import { store } from '../store/store';
import { actionSetAllSettings } from '../reducers/settingsReducer/settingsActions';
import { sendSettingsToBackendWorker } from './sendSettingsToBackend';

export function* initSettingsSaga() {
  const { token, id: userId } = store.getState().currentUser;
  const settings = yield call(getUserSettings, { token, userId }); //get settings from API
  if (settings) {
    yield put(actionSetAllSettings(settings)); // set settings to store if they are
  } else {
    yield call(sendSettingsToBackendWorker); //send defaultSettings
  }
}
