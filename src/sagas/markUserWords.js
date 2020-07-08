import {
  createUserWord,
  updateUserWord,
  getAggregateUserWordById,
} from './../utilities/network/wordsAPI';
import { WORD_EXIST } from './../utilities/network/networkConstants';
import { initDictionarySaga } from './initDictionarySaga';
import { select } from 'redux-saga/effects';
import { currentUserSelector } from './../reducers/currentUser/currentUserReducer';
import { getDateStringByDate } from '../utilities/getDateStringByDate';

export function* markWordsWorker(action) {
  const { wordId, difficulty } = action.payload;
  const { token, id: userId } = yield select(currentUserSelector);

  const data = {
    difficulty,
    optional: {
      sumOfRepeats: 1,
      lastRepeatDate: getDateStringByDate(new Date()),
    },
  };
  const createStatus = yield createUserWord({
    userId,
    token,
    wordId,
    data,
  });
  if (createStatus === WORD_EXIST) {
    const {
      userWord: { optional },
    } = yield getAggregateUserWordById({
      userId,
      token,
      wordId,
    });
    const todayDate = getDateStringByDate(new Date());
    let data;
    if (todayDate === optional.lastRepeatDate) {
      data = {
        difficulty,
        optional: {
          sumOfRepeats: optional.sumOfRepeats,
          lastRepeatDate: optional.lastRepeatDate,
        },
      };
    } else {
      data = {
        difficulty,
        optional: {
          sumOfRepeats: optional.sumOfRepeats + 1,
          lastRepeatDate: getDateStringByDate(new Date()),
        },
      };
    }
    yield updateUserWord({ userId, token, wordId, data });
    console.log('word mark updated');
  } else {
    console.log('word mark create successfully');
  }
  yield initDictionarySaga();
}
