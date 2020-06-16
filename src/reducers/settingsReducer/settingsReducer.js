import { SET_ALL_SETTINGS, SET_WORDS_PER_DAY } from './settingsActions';

const defaultSettings = {
  wordsPerDay: 200,
};

export const settingsStateSelector = (state) => state.settingsState;

export const settingsState = (state = defaultSettings, action) => {
  switch (action.type) {
    case SET_WORDS_PER_DAY:
      return {
        ...state,
        wordsPerDay: action.payload,
      };
    case SET_ALL_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
