import { initSettingsSaga } from './initSettingsSaga';
import { initStatisticSaga } from './initStatisticSaga';
import { put } from 'redux-saga/effects';
import { actionSetInitDone } from '../reducers/appState/appStateActions';
import { initDictionarySaga } from './initDictionarySaga';
import { actionInitCardSet } from '../store/actionsForSaga';

export function* initAppWorker() {
  yield initSettingsSaga();
  yield initStatisticSaga();
  yield put(actionInitCardSet());
  yield initDictionarySaga();
  yield put(actionSetInitDone(true));
}
