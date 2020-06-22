import {
  actionSetLearnCards,
  actionAddLearnCards,
} from '../reducers/learnCards/learnCardsActions';
import { put, select } from 'redux-saga/effects';

import { getNumbersOfNewCards } from './../utilities/network/getNumbersOfNewCards';
import { actionSetPageGroupWordNumber } from '../reducers/learnSettings/learnSettingsActions';
import {
  NUMBER_OF_REPEAT_WORDS,
  NEW_WORDS_MODE,
  REPEAT_MODE,
} from '../store/defaultAppSettings';
import { learnCardSettingsSelector } from './../reducers/learnSettings/learnSettingsReducer';
import { dictionaryStateStateSelector } from './../reducers/dictionaryReducer/dictionaryReducer';
import {
  NUMBER_OF_NEW_WORDS,
  STANDARD_MODE,
} from './../store/defaultAppSettings';

export function* getNewWordsForLearn() {
  const {
    learnMode,
    prevWordsGroup,
    prevWordsPage,
    prevWordOnPage,
  } = yield select(learnCardSettingsSelector);
  const { learnedWords } = yield select(dictionaryStateStateSelector);
  let needNew, needRepeat;

  if (learnMode === STANDARD_MODE) {
    needNew = NUMBER_OF_NEW_WORDS;
    needRepeat = NUMBER_OF_REPEAT_WORDS - learnedWords.length;
  }
  if (learnMode === NEW_WORDS_MODE) {
    needNew = NUMBER_OF_NEW_WORDS + NUMBER_OF_REPEAT_WORDS;
    needRepeat = 0;
  }
  if (learnMode === REPEAT_MODE) {
    needRepeat = NUMBER_OF_NEW_WORDS + NUMBER_OF_REPEAT_WORDS;
    needNew = 0;
  }

  if (needNew > 0) {
    const {
      cardsForLearn,
      page,
      group,
      wordInPage,
    } = yield getNumbersOfNewCards({
      wordsGroup: prevWordsGroup,
      wordsPage: prevWordsPage,
      wordOnPage: prevWordOnPage,
      numberOfNeed: needNew,
    });
    yield put(actionSetLearnCards(cardsForLearn));
    yield put(actionSetPageGroupWordNumber({ page, group, wordInPage }));
  }

  if (needRepeat > 0) {
    if (learnedWords.length > 0) {
      let repeatWords = learnedWords
        .sort(() => Math.random() - 0.5)
        .slice(0, NUMBER_OF_REPEAT_WORDS);
      if (learnMode === REPEAT_MODE) {
        yield put(actionSetLearnCards(repeatWords));
      } else {
        yield put(actionAddLearnCards(repeatWords));
      }
    }

    const deltaNumberCards = needRepeat - learnedWords.length;

    if (deltaNumberCards > 0) {
      let {
        currentWordsGroup,
        currentWordsPage,
        currentWordOnPage,
      } = yield select(learnCardSettingsSelector);
      const {
        cardsForLearn,
        page,
        group,
        wordInPage,
      } = yield getNumbersOfNewCards({
        wordsGroup: currentWordsGroup,
        wordsPage: currentWordsPage,
        wordOnPage: currentWordOnPage,
        numberOfNeed: deltaNumberCards,
      });
      yield put(
        actionSetPageGroupWordNumber({
          page,
          group,
          wordInPage,
        }),
      );
      if (learnMode === REPEAT_MODE && learnedWords.length === 0) {
        yield put(actionSetLearnCards(cardsForLearn));
      } else {
        yield put(actionAddLearnCards(cardsForLearn));
      }
    }
  }
}
