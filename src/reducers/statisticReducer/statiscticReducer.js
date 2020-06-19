import { SET_LEARNED_WORDS, SET_ALL_STATISTIC } from './statisticActions';

const defaultSettings = {
  learnedWords: 0,
  optional: {
    test: 'xxx',
    test2: 'yyy',
  },
};

export const statisticStateSelector = (state) => state.settingsState;

export const statisticState = (state = defaultSettings, action) => {
  switch (action.type) {
    case SET_LEARNED_WORDS:
      return {
        ...state,
        wordsPerDay: action.payload,
      };
    case SET_ALL_STATISTIC:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
