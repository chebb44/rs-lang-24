import { SET_DICTIONARY_DATA } from './dictionaryAction';

const defaultData = {
  learnedWords: [],
  hardWords: [],
  deletedWords: [],
};

export const dictionaryStateStateSelector = (state) => state.dictionaryState;

export const dictionaryState = (state = defaultData, action) => {
  switch (action.type) {
    case SET_DICTIONARY_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
