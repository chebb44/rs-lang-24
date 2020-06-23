import { actionSetLearnCards } from '../reducers/learnCards/learnCardsActions';
import { put, select } from 'redux-saga/effects';

import { getNumbersOfNewCards } from './../utilities/network/getNumbersOfNewCards';
import { actionSetPageGroupWordNumber } from '../reducers/learnSettings/learnSettingsActions';
import {
  NEW_WORDS_MODE,
  REPEAT_MODE,
  ONLY_HARD_WORDS_MODE,
} from '../store/defaultAppSettings';
import { learnSettingsSelector } from './../reducers/learnSettings/learnSettingsReducer';
import { dictionaryStateStateSelector } from './../reducers/dictionaryReducer/dictionaryReducer';
import { STANDARD_MODE } from './../store/defaultAppSettings';
import { isNeedToRepeat } from './../utilities/repeatLearn/isNeedRepeat';

export function* getNewWordsForLearn() {
  const {
    wordsPerDay,
    learnCardSettings: {
      learnMode,
      prevWordsGroup,
      prevWordsPage,
      prevWordOnPage,
      cardsPerDay,
    },
  } = yield select(learnSettingsSelector);
  let outputWords = [];

  const needRepeatWords = cardsPerDay - wordsPerDay;
  const { learnedWords, hardWords, nextTrainWords } = yield select(
    dictionaryStateStateSelector,
  );

  const wordsForRepeat = yield [...learnedWords, ...hardWords].filter((word) =>
    isNeedToRepeat({ word }),
  );

  switch (learnMode) {
    case STANDARD_MODE:
      {
        outputWords = [
          ...outputWords,
          ...nextTrainWords.slice(0, needRepeatWords),
        ];
        outputWords = [
          ...outputWords,
          ...wordsForRepeat.slice(0, needRepeatWords - outputWords.length),
        ];
        const delta = cardsPerDay - outputWords.length;
        if (delta > 0) {
          const {
            cardsForLearn,
            page,
            group,
            wordInPage,
          } = yield getNumbersOfNewCards({
            wordsGroup: prevWordsGroup,
            wordsPage: prevWordsPage,
            wordOnPage: prevWordOnPage,
            numberOfNeed: delta,
          });
          outputWords = [...outputWords, ...cardsForLearn];
          yield put(actionSetPageGroupWordNumber({ page, group, wordInPage }));
        }
      }
      break;
    case NEW_WORDS_MODE:
      {
        const {
          cardsForLearn,
          page,
          group,
          wordInPage,
        } = yield getNumbersOfNewCards({
          wordsGroup: prevWordsGroup,
          wordsPage: prevWordsPage,
          wordOnPage: prevWordOnPage,
          numberOfNeed: cardsPerDay,
        });
        outputWords = [...cardsForLearn];
        yield put(actionSetPageGroupWordNumber({ page, group, wordInPage }));
      }
      break;
    case REPEAT_MODE:
      outputWords = [...nextTrainWords.slice(0, needRepeatWords)];
      outputWords = [
        ...wordsForRepeat.slice(0, cardsPerDay - outputWords.length),
      ];
      break;
    case ONLY_HARD_WORDS_MODE:
      outputWords = [...hardWords.slice(0, cardsPerDay)];
      break;
    default:
      break;
  }
  yield put(actionSetLearnCards(outputWords));
}
