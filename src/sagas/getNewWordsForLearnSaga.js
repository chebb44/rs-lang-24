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
  ONLY_HARD_WORDS_MODE,
} from '../store/defaultAppSettings';
import {
  learnCardSettingsSelector,
  learnSettingsSelector,
} from './../reducers/learnSettings/learnSettingsReducer';
import { dictionaryStateStateSelector } from './../reducers/dictionaryReducer/dictionaryReducer';
import {
  NUMBER_OF_NEW_WORDS,
  STANDARD_MODE,
} from './../store/defaultAppSettings';

export function* getNewWordsForLearn() {
  const outputWords = [];
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

  switch (learnMode) {
    case STANDARD_MODE:
      const needRepeatWords = cardsPerDay - wordsPerDay;
      const { learnedWords, hardWords, nextTrainWords } = yield select(
        dictionaryStateStateSelector,
      );

      break;
    case NEW_WORDS_MODE:
      break;
    case REPEAT_MODE:
      break;
    case ONLY_HARD_WORDS_MODE:
      break;

    default:
      break;
  }
}
