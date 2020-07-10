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
import { LoginIntroInfo } from '../../components/LoginIntroInfo/LoginIntroInfo';
import { PromoPageView } from '../../components/PromoPageView/PromoPageView';
import './LoginPage.scss';
import { LogoView } from '../../components/LogoView/LogoView';
import london from './../../assets/img/england_PNG723.png';
import { ArrowIcon } from '../../components/SvgImages/SvgImages';
import 'animate.css';

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
    <div className="login-page">
      <Alert message={alertMessage} />
      <div className="container login-screen">
        <div className="login-page__wrapper">
          <div className="animate__animated animate__bounce animate__slow animate__delay-3s arrow-icon__wrapper animate__infinite">
            <div
              className="login-page__arrow-icon"
              onClick={() => window.scrollBy(0, window.innerHeight)}
            >
              <ArrowIcon />
            </div>
          </div>
          <div className="login-page__logo">
            <LogoView />
          </div>
          <LoginIntroInfo />
          <LoginForm onSignUp={signUpHandler} onSignIn={signInHandler} />
          <img className={'london-image'} src={london} alt="london" />
        </div>
      </div>
      <PromoPageView />
    </div>
  );
};
