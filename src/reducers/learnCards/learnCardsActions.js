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

export const ADD_REPEATING_WORD = 'ADD_REPEATING_WORD';
export const actionAddRepeatingWord = (index) => ({
  type: ADD_REPEATING_WORD,
  payload: index,
});
