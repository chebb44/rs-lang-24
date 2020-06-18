import { store } from '../store/store';
import {
  createUserWord,
  updateUserWord,
} from './../utilities/network/wordsAPI';
import { WORD_EXIST } from './../utilities/network/networkConstants';

export function* markWordsWorker(action) {
  const { wordId, wordType } = action.payload;
  const { token, id: userId } = store.getState().currentUser;
  const data = {
    difficulty: 'XXX',
    optional: { wordType },
  };
  const createStatus = yield createUserWord({
    userId,
    token,
    wordId,
    data,
  });
  if (createStatus === WORD_EXIST) {
    yield updateUserWord({ userId, token, wordId, data });
  }
}