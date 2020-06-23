import { getAllUserWords } from '../utilities/network/wordsAPI';
import {
  HARD_WORD,
  DELETED_WORD,
  NEXT_TRAIN_WORD,
  GOOD_WORD,
  EASY_WORD,
  LEARNED_WORD,
} from './constants';
import { convertWordIdToData } from '../utilities/network/convertWordIdToData';
import { setDictionaryData } from '../reducers/dictionaryReducer/dictionaryAction';
import { put, select } from 'redux-saga/effects';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';

export function* initDictionarySaga() {
  console.log('init dict');
  const { token, id: userId } = yield select(currentUserSelector);
  const dictionaryData = yield getAllUserWords({ token, userId });
  if (dictionaryData) {
    const words = {
      learnedWords: [],
      hardWords: [],
      deletedWords: [],
      nextTrainWords: [],
    };
    dictionaryData.forEach((word) => {
      if (
        word.difficulty === GOOD_WORD ||
        word.difficulty === EASY_WORD ||
        word.difficulty === LEARNED_WORD
      )
        words.learnedWords.push(word.wordId);
      if (word.difficulty === HARD_WORD) words.hardWords.push(word.wordId);
      if (word.difficulty === DELETED_WORD)
        words.deletedWords.push(word.wordId);
      if (word.difficulty === NEXT_TRAIN_WORD)
        words.nextTrainWords.push(word.wordId);
    });
    console.log('function*initDictionarySaga -> words', words);
    for (const key in words) {
      if (words.hasOwnProperty(key)) {
        words[key] = yield convertWordIdToData({
          words: words[key],
          token,
          userId,
        });
      }
    }
    yield put(setDictionaryData(words));
  }
}
// export function* initDictionarySaga() {
//   console.log('init dict');
//   const { token, id: userId } = yield select(currentUserSelector);
//   const dictionaryData = yield getAllUserWords({ token, userId });
//   if (dictionaryData) {
//     const words = {
//       learnedWords: [],
//       hardWords: [],
//       deletedWords: [],
//     };
//     dictionaryData.forEach((word) => {
//       if (word.optional.wordType === LEARNED_WORD)
//         words.learnedWords.push(word.wordId);
//       if (word.optional.wordType === HARD_WORD)
//         words.hardWords.push(word.wordId);
//       if (word.optional.wordType === DELETED_WORD)
//         words.deletedWords.push(word.wordId);
//     });
//     for (const key in words) {
//       if (words.hasOwnProperty(key)) {
//         words[key] = yield convertWordIdToData(words[key]);
//       }
//     }
//     yield put(setDictionaryData(words));
//   }
// }
