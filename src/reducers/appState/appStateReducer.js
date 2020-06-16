import {
  SET_ALERT_MESSAGE,
  TOGGLE_SIDEBAR,
  SHOW_MODAL,
  HIDE_MODAL,
} from './appStateActions';

const defaultState = {
  alertMessage: '',
  isSideBarShow: true,
  visibleModal: false,
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
    case SHOW_MODAL:
      return {
        ...state,
        visibleModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        visibleModal: false,
      };
    default:
      return state;
  }
};
