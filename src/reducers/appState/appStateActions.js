export const SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE';
export const actionSetAlertMessage = (text) => ({
  type: SET_ALERT_MESSAGE,
  payload: text,
});

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const actionToggleSideBar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const SHOW_STATISTIC_MODAL = 'SHOW_STATISTIC_MODAL';
export const actionShowStatisticModal = () => ({
  type: SHOW_STATISTIC_MODAL,
});

export const HIDE_STATISTIC_MODAL = 'HIDE_STATISTIC_MODAL';
export const actionHideStatisticModal = () => ({
  type: HIDE_STATISTIC_MODAL,
});

export const SHOW_MAX_CARDS_MODAL = 'SHOW_MAX_CARDS_MODAL';
export const actionShowMaxCardsModal = () => ({
  type: SHOW_MAX_CARDS_MODAL,
});

export const HIDE_MAX_CARDS_MODAL = 'HIDE_MAX_CARDS_MODAL';
export const actionHideMaxCardsModal = () => ({
  type: HIDE_MAX_CARDS_MODAL,
});

export const SET_INIT_DONE = 'SET_INIT_DONE';
export const actionSetInitDone = () => ({
  type: SET_INIT_DONE,
});
