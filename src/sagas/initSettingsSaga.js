import { getUserSettings } from '../utilities/network/settingsAPI';
import { call, put } from 'redux-saga/effects';
import { store } from '../store/store';
import { sendSettingsToBackendWorker } from './sendSettingsToBackend';
import { actionSetLearnSetting } from '../reducers/learnSettings/learnSettingsActions';

export function* initSettingsSaga() {
  const { token, id: userId } = store.getState().currentUser;
  const settings = yield call(getUserSettings, { token, userId }); //get settings from API
  if (settings) {
    const { wordsPerDay, optional } = settings;
    const learnSettings = {
      wordsPerDay,
      learnCardSettings: JSON.parse(optional.learnCardSettings),
    };
    yield put(actionSetLearnSetting(learnSettings));
  } else {
    yield call(sendSettingsToBackendWorker); //send defaultSettings
  }
}
