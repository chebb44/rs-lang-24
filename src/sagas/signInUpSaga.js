import { put, call } from 'redux-saga/effects';

import { createUser, loginUser } from './../utilities/network/userAPI';
import {
  actionSetTokenAndId,
  actionSetUserLoginData,
} from '../reducers/currentUser/currentUserActions';
import { actionSetAlertMessage } from '../reducers/appState/appStateActions';
import { TOKEN, USER_ID } from './constants';
import { showPopUpNotification } from './../utilities/notification';
import { routes } from './../App/constants/routes';

export function* signUpWorker(action) {
  const userRegResponse = yield call(createUser, action.payload);
  if (userRegResponse.success) {
    yield put(
      actionSetAlertMessage(
        'Регистрация прошла успешно, пожалуйста, войдите в систему.',
      ),
    );
    yield delay(3000);
    yield put(actionSetAlertMessage(''));
  } else {
    yield showPopUpNotification('Пожалуйста, проверьте логин и пароль.');
  }
}

export function* signInWorker(action) {
  const userSignInResponse = yield call(loginUser, action.payload);
  if (userSignInResponse.success) {
    const { token, userId } = userSignInResponse.payload;
    yield localStorage.setItem(TOKEN, token);
    yield localStorage.setItem(USER_ID, userId);

    yield put(actionSetTokenAndId({ token, id: userId }));

    const { email, password } = action.payload;
    yield put(actionSetUserLoginData({ email, password }));
    yield action.history.push(routes.mainApp); /// redirecting to main page
  } else {
    yield showPopUpNotification('Пожалуйста, проверьте логин и пароль.');
  }
}

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, timeout);
  });
}
