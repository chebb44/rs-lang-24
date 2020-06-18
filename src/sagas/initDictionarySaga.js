import { getAllUserWords } from '../utilities/network/wordsAPI';
import { store } from '../store/store';
import { LEARNED_WORD, HARD_WORD, DELETED_WORD } from './constants';
import { convertWordIdToData } from '../utilities/network/convertWordIdToData';
import { setDictionaryData } from '../reducers/dictionaryReducer/dictionaryAction';
import { put } from 'redux-saga/effects';

export function* initDictionarySaga() {
  console.log('init dict!');
  const { token, id: userId } = store.getState().currentUser;
  const dictionaryData = yield getAllUserWords({ token, userId });
  if (dictionaryData) {
    const words = {
      learnedWords: [],
      hardWords: [],
      deletedWords: [],
    };
    dictionaryData.forEach((word) => {
      if (word.optional.wordType === LEARNED_WORD)
        words.learnedWords.push(word.wordId);
      if (word.optional.wordType === HARD_WORD)
        words.hardWords.push(word.wordId);
      if (word.optional.wordType === DELETED_WORD)
        words.deletedWords.push(word.wordId);
    });
    for (const key in words) {
      if (words.hasOwnProperty(key)) {
        words[key] = yield convertWordIdToData(words[key]);
      }
    }
    yield put(setDictionaryData(words));
  }
}
