import {
  SET_ALERT_MESSAGE,
  SET_INIT_DONE,
  TOGGLE_SIDEBAR,
  SET_STATISTIC_MODAL,
  SET_MAX_CARDS_MODAL,
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
    case SET_STATISTIC_MODAL:
      return {
        ...state,
        visibleStatisticModal: action.payload,
      };
    case SET_MAX_CARDS_MODAL:
      return {
        ...state,
        visibleMaxCardsModal: action.payload,
      };
    case SET_INIT_DONE:
      return {
        ...state,
        initDone: action.payload,
      };
    default:
      return state;
  }
};
