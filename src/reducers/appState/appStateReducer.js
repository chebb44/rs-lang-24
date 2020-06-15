import { SET_ALERT_MESSAGE, TOGGLE_SIDEBAR } from './appStateActions';
const defaultState = {
  alertMessage: '',
  isSideBarShow: true,
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
    default:
      return state;
  }
};
