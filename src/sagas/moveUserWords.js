import {
  updateUserWord,
  getAggregateUserWordById,
} from '../utilities/network/wordsAPI';
import { initDictionarySaga } from './initDictionarySaga';
import { select } from 'redux-saga/effects';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';

export function* moveWordsWorker(action) {
  const { wordId, difficulty } = action.payload;
  const { token, id: userId } = yield select(currentUserSelector);

  const {
    userWord: { optional },
  } = yield getAggregateUserWordById({
    userId,
    token,
    wordId,
  });

  const data = {
    difficulty,
    optional,
  };

  yield updateUserWord({ userId, token, wordId, data });

  yield initDictionarySaga();
}
