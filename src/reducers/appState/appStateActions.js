export const SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE';
export const actionSetAlertMessage = (text) => ({
  type: SET_ALERT_MESSAGE,
  payload: text,
});

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const actionToggleSideBar = () => ({
  type: TOGGLE_SIDEBAR,
});
