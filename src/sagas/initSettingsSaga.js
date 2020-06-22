import { getUserSettings } from '../utilities/network/settingsAPI';
import { call, put, select } from 'redux-saga/effects';
import { actionSetLearnSetting } from '../reducers/learnSettings/learnSettingsActions';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';

export function* initSettingsSaga() {
  const { token, id: userId } = yield select(currentUserSelector);
  const settings = yield call(getUserSettings, { token, userId }); //get settings from API
  if (settings) {
    const { wordsPerDay, optional } = settings;
    const learnSettings = {
      wordsPerDay,
      learnCardSettings: JSON.parse(optional.learnCardSettings),
    };
    yield put(actionSetLearnSetting(learnSettings));
  }
  //  else {
  //   yield call(sendSettingsToBackendWorker); //send defaultSettings
  // }
}
