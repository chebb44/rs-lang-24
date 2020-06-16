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
export const actionStatisticModal = (text) => ({
  type: SET_STATISTIC_MODAL,
  payload: text,
});

export const SET_MAX_CARDS_MODAL = 'SET_MAX_CARDS_MODAL';
export const actionMaxCardsModal = (text) => ({
  type: SET_MAX_CARDS_MODAL,
  payload: text,
});

export const SET_INIT_DONE = 'SET_INIT_DONE';
export const actionSetInitDone = () => ({
  type: SET_INIT_DONE,
});
