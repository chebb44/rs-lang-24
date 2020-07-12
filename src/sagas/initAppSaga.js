import { initSettingsSaga } from './initSettingsSaga';
import { initStatisticSaga } from './initStatisticSaga';
import { put } from 'redux-saga/effects';
import { actionSetInitDone } from '../reducers/appState/appStateActions';
import { initDictionarySaga } from './initDictionarySaga';
import { initWordsForLearnWorker } from './initWordsForLearnSaga';

export function* initAppWorker() {
  yield initSettingsSaga();
  yield initStatisticSaga();
  yield initDictionarySaga();
  yield initWordsForLearnWorker();
  yield put(actionSetInitDone(true));
}
