import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  learnCardsSelector,
  learnedWordsAmountSelector,
} from '../../reducers/learnCards/learnCardsReducer';
import { LearnCardButtonsContainer } from '../../components/LearnCardButtonsContainer/LearnCardButtonsContainer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionUpdateLearnedWordsAmount } from '../../reducers/learnCards/learnCardsActions';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrow } from '../../components/LearnCardArrow/LearnCardArrow';
import './LearnPage.scss';
import LearnCardButtonsBlock from '../../components/LearnCardButtonsBlock/LearnCardButtonsBlock';
import {
  actionSetAutoAudio,
  actionSetAutoTranslate,
} from '../../reducers/learnSettings/learnSettingsActions';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { actionSettingsModal } from '../../reducers/appState/appStateActions';
import { actionMarkWord } from '../../store/actionsForSaga';
import { LEARNED_WORD } from '../../sagas/constants';
import {
  actionSetCheckButtonFlag,
  actionSetShowAnswerButtonFlag,
} from '../../reducers/learnCardButtons/learnCardButtonsActions';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';

export const LearnPage = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const learnedWordsAmount = useSelector(learnedWordsAmountSelector);
  const isWordSubmitted = useSelector(learnCardParametersSelector)
    .isWordSubmitted;
  const [isNextArrowClicked, setIsNextArrowClicked] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const learnCard = learnCards[currentCardIndex];
  const cardsSetLength = learnCards.length;
  const appState = useSelector(appStateSelector);
  const dispatch = useDispatch();
  const flippingCardDirections = {
    next: 'next',
    previous: 'previous',
  };

  const updateLearnedWordsAmount = (isWordCorrect) => {
    if (isWordCorrect === true)
      dispatch(actionUpdateLearnedWordsAmount(learnedWordsAmount + 1));
  };

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      dispatch(actionMarkWord(learnCard.id, LEARNED_WORD));
      setIsNextArrowClicked(!isNextArrowClicked);
      if (isWordSubmitted) {
        dispatch(actionSetCheckButtonFlag(false));
      }
      if (
        currentCardIndex === cardsSetLength - 1 ||
        learnedWordsAmount <= currentCardIndex
      )
        return;
      setCurrentCardIndex(currentCardIndex + 1);
      dispatch(actionSetShowAnswerButtonFlag(false));
    } else {
      if (currentCardIndex === 0) return;
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const changeAutoAudioPlay = useCallback(() => {
    dispatch(actionSetAutoAudio(!learnCardSettings.isAudioOn));
  }, [dispatch, learnCardSettings.isAudioOn]);

  const changeAutoTranslate = useCallback(() => {
    dispatch(actionSetAutoTranslate(!learnCardSettings.isTranslationOn));
  }, [dispatch, learnCardSettings.isTranslationOn]);

  const changeVisibleSettingsModal = useCallback(() => {
    dispatch(actionSettingsModal(!appState.visibleSettingsModal));
  }, [dispatch, appState.visibleSettingsModal]);

  return (
    <div className="learn-page">
      <LearnCardButtonsBlock
        learnCardSettingsData={learnCardSettings}
        appState={appState}
        changeAutoAudioPlay={changeAutoAudioPlay}
        changeAutoTranslate={changeAutoTranslate}
        changeVisibleSettingsModal={changeVisibleSettingsModal}
      />
      <div className="learn-page__flipping-container">
        <LearnCardArrow
          direction={flippingCardDirections.previous}
          onArrowClick={handleArrowClick}
          currentCardIndex={currentCardIndex}
        />
        <LearnCard
          learnCard={learnCard}
          learnCardSettings={learnCardSettings}
          isNextArrowClicked={isNextArrowClicked}
          updateLearnedWordsAmount={updateLearnedWordsAmount}
          //handleNextArrowClick={handleNextArrowClick}
        />
        <LearnCardArrow
          direction={flippingCardDirections.next}
          onArrowClick={handleArrowClick}
          currentCardIndex={currentCardIndex}
          cardsSetLength={cardsSetLength}
          learnedWordsAmount={learnedWordsAmount}
        />
      </div>
      <LearnCardButtonsContainer learnCard={learnCard} />
    </div>
  );
};
