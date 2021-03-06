import {
  SET_LEARNED_WORDS,
  SET_CARDS_AMOUNT,
  SET_CORRECT_ANSWERS_PERCENT,
  SET_NEW_WORDS_AMOUNT,
  SET_LONGEST_CORRECT_ANSWER_SERIES,
  SET_ALL_LEARN_STATISTIC,
  UPDATE_LEARNED_WORDS,
  RESET_ALL_LEARN_STATISTIC,
} from './statisticActions';
import { getDateStringByDate } from '../../utilities/getDateStringByDate';

const defaultSettings = {
  shortStatistic: {
    cardsAmount: 0,
    correctAnswersPercent: 0,
    newWordsAmount: 0,
    longestCorrectAnswersSeries: 0,
  },
  learnedWords: {},
};

export const statisticStateSelector = (state) => state.statisticState;

export const statisticState = (state = defaultSettings, action) => {
  switch (action.type) {
    case RESET_ALL_LEARN_STATISTIC:
      return defaultSettings;
    case SET_LEARNED_WORDS:
      return {
        ...state,
        wordsPerDay: action.payload,
      };
    case SET_ALL_LEARN_STATISTIC:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CARDS_AMOUNT:
      return {
        ...state,
        shortStatistic: {
          ...state.shortStatistic,
          cardsAmount: action.payload,
        },
      };
    case SET_CORRECT_ANSWERS_PERCENT:
      return {
        ...state,
        shortStatistic: {
          ...state.shortStatistic,
          correctAnswersPercent: action.payload,
        },
      };
    case SET_NEW_WORDS_AMOUNT:
      return {
        ...state,
        shortStatistic: {
          ...state.shortStatistic,
          newWordsAmount: action.payload,
        },
      };
    case SET_LONGEST_CORRECT_ANSWER_SERIES:
      return {
        ...state,
        shortStatistic: {
          ...state.shortStatistic,
          longestCorrectAnswersSeries: action.payload,
        },
      };
    case UPDATE_LEARNED_WORDS:
      const wordDate = getDateStringByDate(new Date());
      return {
        ...state,
        learnedWords: {
          ...state.learnedWords,
          [wordDate]: action.payload,
        },
      };
    default:
      return state;
  }
};
