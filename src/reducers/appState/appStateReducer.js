import {
  SET_ALERT_MESSAGE,
  SET_INIT_DONE,
  TOGGLE_SIDEBAR,
  SHOW_STATISTIC_MODAL,
  HIDE_STATISTIC_MODAL,
  SHOW_MAX_CARDS_MODAL,
  HIDE_MAX_CARDS_MODAL,
} from './appStateActions';

const defaultState = {
  alertMessage: '',
  isSideBarShow: true,
  initDone: false,
  visibleStatisticModal: false,
  visibleMaxCardsModal: false,
};

export const appStateSelector = (state) => state.appState;

export const appState = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.payload,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarShow: !state.isSideBarShow,
      };
    case SHOW_STATISTIC_MODAL:
      return {
        ...state,
        visibleStatisticModal: true,
      };
    case HIDE_STATISTIC_MODAL:
      return {
        ...state,
        visibleStatisticModal: false,
      };
    case SHOW_MAX_CARDS_MODAL:
      return {
        ...state,
        visibleMaxCardsModal: true,
      };
    case HIDE_MAX_CARDS_MODAL:
      return {
        ...state,
        visibleMaxCardsModal: false,
      };
    case SET_INIT_DONE:
      return {
        ...state,
        initDone: true,
      };
    default:
      return state;
  }
};
