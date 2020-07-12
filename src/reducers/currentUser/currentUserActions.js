export const SIGN_UP_USER = 'SIGN_UP_USER';
export const actionSignUpUser = (data) => ({
  type: SIGN_UP_USER,
  payload: data,
});

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const actionSignInUser = ({ data, history }) => ({
  type: SIGN_IN_USER,
  payload: data,
  history,
});

export const SET_USER_TOKEN_AND_ID = 'SET_USER_TOKEN_AND_ID';
export const actionSetTokenAndId = ({ token, id }) => ({
  type: SET_USER_TOKEN_AND_ID,
  payload: { token, id },
});

export const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA';
export const actionSetUserLoginData = ({ email, password }) => ({
  type: SET_USER_LOGIN_DATA,
  payload: { email, password },
});

export const LOG_OUT_USER = 'LOG_OUT_USER';
export const actionLogOutUser = () => ({
  type: LOG_OUT_USER,
});
