import { initSettingsSaga } from './initSettingsSaga';
import { initStatisticSaga } from './initStatisticSaga';
import { put } from 'redux-saga/effects';
import { actionSetInitDone } from '../reducers/appState/appStateActions';
import { initDictionarySaga } from './initDictionarySaga';

export function* initAppWorker() {
  yield initSettingsSaga();
  yield initStatisticSaga();
  yield initDictionarySaga();
  yield put(actionSetInitDone(true));
}
