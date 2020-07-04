import { SET_LEARN_CARDS, ADD_LEARN_CARDS } from './learnCardsActions';
import { ADD_REPEATING_WORD } from './learnCardsActions';
import { getRandomInteger } from '../../utilities/getRandomInteger';

const defaultData = {
  cards: [],
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
    case ADD_REPEATING_WORD:
      const wordIndex = action.payload;
      const currentCard = state.cards[wordIndex];
      const randomIndex = getRandomInteger(wordIndex, state.cards.length);
      return {
        ...state,
        cards: [
          ...state.cards.slice(0, randomIndex),
          currentCard,
          ...state.cards.slice(randomIndex),
        ],
      };
    default:
      return state;
  }
};
