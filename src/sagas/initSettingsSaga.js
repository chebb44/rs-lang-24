import { getUserSettings } from '../utilities/network/settingsAPI';
import { call, put, select } from 'redux-saga/effects';
import { actionSetLearnSetting } from '../reducers/learnSettings/learnSettingsActions';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';
import { TOKEN_OUTDATED } from './constants';
import { actionLogOutUser } from '../reducers/currentUser/currentUserActions';
import { actionSetAllMiniGamesDifficulty } from '../reducers/miniGamesDifficulty/miniGamesDifficultyActions';

export function* initSettingsSaga() {
  const { token, id: userId } = yield select(currentUserSelector);
  const settings = yield call(getUserSettings, { token, userId }); //get settings from API
  if (settings === TOKEN_OUTDATED) {
    yield put(actionLogOutUser());
  } else {
    if (settings) {
      const {
        wordsPerDay,
        optional: { learnCardSettings, miniGamesDifficulty },
      } = settings;
      const learnSettings = {
        wordsPerDay,
        learnCardSettings,
      };
      yield put(actionSetLearnSetting(learnSettings));
      yield put(actionSetAllMiniGamesDifficulty({ miniGamesDifficulty }));
    }
  }
}
