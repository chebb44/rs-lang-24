import { put, call } from 'redux-saga/effects';

import { createUser, loginUser } from './../utilities/network/userSignInUp';
import {
  actionSetTokenAndId,
  actionSetUserLoginData,
} from '../reducers/currentUser/currentUserActions';
import { actionSetAlertMessage } from '../reducers/appState/appStateActions';

export function* signUpWorker(action) {
  const userRegResponse = yield call(() => createUser(action.payload));
  if (userRegResponse.success) {
    yield put(actionSetAlertMessage('Registration successful, please SignIn'));
    yield delay(3000);
    yield put(actionSetAlertMessage(''));
  } else {
    console.log(
      'function*signUpWorker -> userRegResponse.payload',
      userRegResponse.payload,
    );
    yield put(actionSetAlertMessage(userRegResponse.payload));
    yield delay(3000);
    yield put(actionSetAlertMessage(''));
  }
}

export function* signInWorker(action) {
  const userSignInResponse = yield call(() => loginUser(action.payload));
  if (userSignInResponse.success) {
    console.log(
      'function*signInWorker ->  userSignInResponse.payload',
      userSignInResponse.payload,
    );
    const { token, userId } = userSignInResponse.payload;

    yield put(actionSetTokenAndId({ token, id: userId }));

    const { email, password } = action.payload;
    yield put(actionSetUserLoginData({ email, password }));

    yield action.history.push('/app'); /// redirecting!!!!
  } else {
    console.log(
      'function*signInWorker -> userSignInResponse',
      userSignInResponse,
    );
    yield put(actionSetAlertMessage(userSignInResponse.payload));
    yield delay(3000);
    yield put(actionSetAlertMessage(''));
  }
}

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, timeout);
  });
}