import { USER_ID } from './constants';

import { TOKEN } from './constants';
import { actionSetTokenAndId } from '../reducers/currentUser/currentUserActions';
import { put } from 'redux-saga/effects';
import { actionSetInitDone } from '../reducers/appState/appStateActions';

export function* logOutWorker() {
  yield localStorage.removeItem(TOKEN);
  yield localStorage.removeItem(USER_ID);
  yield put(actionSetTokenAndId({ token: '', id: '' }));
  yield put(actionSetInitDone(false));
}
