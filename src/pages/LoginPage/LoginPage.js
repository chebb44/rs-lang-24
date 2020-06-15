import React, { useCallback } from 'react';
import {
  actionSignUpUser,
  actionSignInUser,
} from '../../reducers/currentUser/currentUserActions';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from './../../components/Alert/Alert';
import { LoginForm } from './../../components/LoginForm/LoginForm';
import { appStateSelector } from './../../reducers/appState/appStateReducer';
import { useHistory } from 'react-router-dom';

export const LoginPage = function () {
  const { alertMessage } = useSelector(appStateSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const signUpHandler = useCallback(
    (data) => {
      dispatch(actionSignUpUser(data));
    },
    [dispatch],
  );

  const signInHandler = useCallback(
    (data) => {
      dispatch(actionSignInUser({ data, history }));
    },
    [dispatch, history],
  );

  return (
    <>
      <Alert message={alertMessage} />
      <div className="login-screen d-flex justify-content-center align-items-center flex-grow-1">
        <LoginForm onSignUp={signUpHandler} onSignIn={signInHandler} />
      </div>
    </>
  );
};
