export const SET_WORDS_PER_DAY = 'SET_WORDS_PER_DAY';
export const actionSetWordsPerDay = (wordsNumber) => ({
  type: SET_WORDS_PER_DAY,
  payload: wordsNumber,
});

export const SET_ALL_SETTINGS = 'SET_ALL_SETTINGS';
export const actionSetAllSettings = (data) => ({
  type: SET_ALL_SETTINGS,
  payload: data,
});
