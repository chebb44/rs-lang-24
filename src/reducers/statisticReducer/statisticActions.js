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
