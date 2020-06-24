export const SET_LEARNED_WORDS = 'SET_LEARNED_WORDS';
export const actionSetWordsPerDay = (wordsNumber) => ({
  type: SET_LEARNED_WORDS,
  payload: wordsNumber,
});

export const SET_ALL_STATISTIC = 'SET_ALL_STATISTIC';
export const actionSetAllStatistic = (data) => ({
  type: SET_ALL_STATISTIC,
  payload: data,
});

export const SET_CARDS_AMOUNT = 'SET_CARDS_AMOUNT';
export const actionSetCardsAmount = (amount) => ({
  type: SET_CARDS_AMOUNT,
  payload: amount,
});

export const SET_CORRECT_ANSWERS_PERCENT = 'SET_CORRECT_ANSWERS_PERCENT';
export const actionSetCorrectAnswersPercent = (percent) => ({
  type: SET_CORRECT_ANSWERS_PERCENT,
  payload: percent,
});

export const SET_NEW_WORDS_AMOUNT = 'SET_NEW_WORDS_AMOUNT';
export const actionSetNewWordsAmount = (amount) => ({
  type: SET_NEW_WORDS_AMOUNT,
  payload: amount,
});

export const SET_LONGEST_CORRECT_ANSWER_SERIES =
  'SET_LONGEST_CORRECT_ANSWER_SERIES';
export const actionSetLongestCorrect_Answer_Series = (series) => ({
  type: SET_LONGEST_CORRECT_ANSWER_SERIES,
  payload: series,
});
