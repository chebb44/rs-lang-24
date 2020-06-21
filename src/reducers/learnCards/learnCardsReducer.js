import { SET_LEARN_CARDS, ADD_LEARN_CARDS } from './learnCardsActions';
import { UPDATE_LEARNED_WORDS_AMOUNT } from './learnCardsActions';

const defaultData = {
  cards: [],
  learnedWordsAmount: 0,
};

export const learnCardsSelector = (state) => state.learnCards.cards;
export const learnedWordsAmountSelector = (state) =>
  state.learnCards.learnedWordsAmount;

export const learnCards = (state = defaultData, action) => {
  switch (action.type) {
    case SET_LEARN_CARDS:
      return {
        ...state,
        cards: action.cards,
      };
    case ADD_LEARN_CARDS:
      const stateCards = state.cards.slice();
      const newStateCards = [...stateCards, ...action.cards];
      return {
        ...state,
        cards: newStateCards,
      };
    case UPDATE_LEARNED_WORDS_AMOUNT:
      return {
        ...state,
        learnedWordsAmount: action.amount,
      };
    default:
      return state;
  }
};
