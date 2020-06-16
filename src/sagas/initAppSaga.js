import { initSettingsSaga } from './initSettingsSaga';
import { initStatisticSaga } from './initStatisticSaga';
import { put } from 'redux-saga/effects';
import { actionSetInitDone } from '../reducers/appState/appStateActions';

export function* initAppWorker() {
  yield initSettingsSaga();
  yield initStatisticSaga();
  yield put(actionSetInitDone());
}
