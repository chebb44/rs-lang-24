import {
  actionSetLearnCards,
  actionAddLearnCards,
} from '../reducers/learnCards/learnCardsActions';
import { put } from 'redux-saga/effects';
import { store } from '../store/store';

import { getNumbersOfNewCards } from './../utilities/network/getNumbersOfNewCards';
import { actionSetPageGroupWordNumber } from '../reducers/learnSettings/learnSettingsActions';
import { NUMBER_OF_REPEAT_WORDS } from '../store/defaultAppSettings';
import { NUMBER_OF_NEW_WORDS } from './../store/defaultAppSettings';

export function* getNewWordsForLearn() {
  yield console.log('getting new words from api');
  const state = store.getState();
  let {
    currentWordsGroup,
    currentWordsPage,
    currentWordOnPage,
  } = state.learnSettings.learnCardSettings;
  const numberOfNeed = NUMBER_OF_NEW_WORDS;
  const { cardsForLearn, page, group, wordInPage } = yield getNumbersOfNewCards(
    {
      currentWordsGroup,
      currentWordsPage,
      currentWordOnPage,
      numberOfNeed,
    },
  );

  yield put(actionSetLearnCards(cardsForLearn));
  yield put(actionSetPageGroupWordNumber({ page, group, wordInPage }));

  const { learnedWords } = state.dictionaryState;
  console.log('function*getNewWordsForLearn -> learnedWords', learnedWords);
  let deltaNumberCards = NUMBER_OF_REPEAT_WORDS - learnedWords.length;
  console.log(
    'function*getNewWordsForLearn -> deltaNumberCards',
    deltaNumberCards,
  );

  if (deltaNumberCards > 0) {
    const {
      cardsForLearn: newCardsForLearn,
      page: newPage,
      group: newGroupe,
      wordInPage: newWordInPage,
    } = yield getNumbersOfNewCards({
      currentWordsGroup: group,
      currentWordsPage: page,
      currentWordOnPage: wordInPage,
      numberOfNeed: deltaNumberCards,
    });
    yield put(
      actionSetPageGroupWordNumber({
        page: newPage,
        group: newGroupe,
        wordInPage: newWordInPage,
      }),
    );
    yield put(actionAddLearnCards(newCardsForLearn));
  }

  if (learnedWords.length > 0) {
    let repeatWords = learnedWords
      .sort(() => Math.random() - 0.5)
      .slice(0, NUMBER_OF_REPEAT_WORDS);
    yield put(actionAddLearnCards(repeatWords));
  }
}
