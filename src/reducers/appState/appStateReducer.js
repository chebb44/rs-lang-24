import {
  SET_ALERT_MESSAGE,
  SET_INIT_DONE,
  TOGGLE_SIDEBAR,
  SET_STATISTIC_MODAL,
  SET_MAX_CARDS_MODAL,
  SET_SETTINGS_MODAL,
} from './appStateActions';
import { defaultAppState } from '../../store/defaultAppSettings';

export const appStateSelector = (state) => state.appState;

export const appState = (state = defaultAppState, action) => {
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
        isStatisticModalShown: action.payload,
      };
    case SET_MAX_CARDS_MODAL:
      return {
        ...state,
        isMaxCardsModalShown: action.payload,
      };
    case SET_SETTINGS_MODAL:
      return {
        ...state,
        visibleSettingsModal: action.payload,
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
