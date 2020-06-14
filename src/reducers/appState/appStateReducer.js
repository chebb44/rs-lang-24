import { SET_ALERT_MESSAGE } from './appStateActions';
const defaultState = {
  alertMessage: '',
};

export const appStateSelector = (state) => state.appState;

export const appState = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.payload,
      };
    default:
      return state;
  }
};
