export const SET_LEARN_CARDS = 'SET_LEARN_CARDS';
export const actionSetLearnCards = (cards) => ({
  type: SET_LEARN_CARDS,
  cards,
});

export const ADD_LEARN_CARDS = 'ADD_LEARN_CARDS';
export const actionAddLearnCards = (cards) => ({
  type: ADD_LEARN_CARDS,
  cards,
});

export const UPDATE_LEARNED_WORDS_AMOUNT = 'UPDATE_LEARNED_WORDS_AMOUNT';
export const actionUpdateLearnedWordsAmount = (amount) => ({
  type: UPDATE_LEARNED_WORDS_AMOUNT,
  amount,
});
