import {
  SET_ALERT_MESSAGE,
  TOGGLE_SIDEBAR,
  SET_INIT_DONE,
} from './appStateActions';
const defaultState = {
  alertMessage: '',
  isSideBarShow: true,
  initDone: false,
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
    case SET_INIT_DONE:
      return {
        ...state,
        initDone: true,
      };
    default:
      return state;
  }
};
