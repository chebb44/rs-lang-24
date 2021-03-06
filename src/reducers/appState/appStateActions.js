export const SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE';
export const actionSetAlertMessage = (text) => ({
  type: SET_ALERT_MESSAGE,
  payload: text,
});

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const actionToggleSideBar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const SET_STATISTIC_MODAL = 'SET_STATISTIC_MODAL';
export const actionSetIsStatisticModalShown = (text) => ({
  type: SET_STATISTIC_MODAL,
  payload: text,
});

export const SET_MAX_CARDS_MODAL = 'SET_MAX_CARDS_MODAL';
export const actionSetIsMaxCardsModalShown = (text) => ({
  type: SET_MAX_CARDS_MODAL,
  payload: text,
});

export const SET_SETTINGS_MODAL = 'SET_SETTINGS_MODAL';
export const actionSettingsModal = (settings) => ({
  type: SET_SETTINGS_MODAL,
  payload: settings,
});

export const SET_INIT_DONE = 'SET_INIT_DONE';
export const actionSetInitDone = (data) => ({
  type: SET_INIT_DONE,
  payload: data,
});
