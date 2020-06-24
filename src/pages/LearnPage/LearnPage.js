import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { learnCardsSelector } from '../../reducers/learnCards/learnCardsReducer';
import { LearnCardButtonsContainer } from '../../components/LearnCardButtonsContainer/LearnCardButtonsContainer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import {
  actionUpdateCurrentCardIndex,
  actionUpdateEnteredWord,
  actionUpdateSubmissionFlag,
  actionUpdateWordCorrectFlag,
  actionUpdateCheckDisplaying,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
  actionUpdateAnswerShownFlag,
} from '../../reducers/learnCard/learnCardActions';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrow } from '../../components/LearnCardArrow/LearnCardArrow';
import './LearnPage.scss';
import LearnCardButtonsBlock from '../../components/LearnCardButtonsBlock/LearnCardButtonsBlock';
import {
  actionSetAutoAudio,
  actionSetAutoTranslate,
  actionUpdateLastCorrectWordIndex,
} from '../../reducers/learnSettings/learnSettingsActions';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { actionSettingsModal } from '../../reducers/appState/appStateActions';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import { ProgressBar } from './../../components/ProgressBar/ProgressBar';

export const LearnPage = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const { isWordCorrect, currentLearnCardIndex } = useSelector(
    learnCardParametersSelector,
  );
  const learnCard = learnCards[currentLearnCardIndex];
  const appState = useSelector(appStateSelector);
  const dispatch = useDispatch();
  const flippingCardDirections = {
    next: 'next',
    previous: 'previous',
  };

  const handleArrowClick = (direction) => {
    console.log(learnCardSettings);
    if (
      direction === 'next' &&
      (isWordCorrect ||
        currentLearnCardIndex <= learnCardSettings.lastCorrectWordIndex) &&
      currentLearnCardIndex < learnCards.length - 1
    ) {
      dispatch(actionUpdateCurrentCardIndex(currentLearnCardIndex + 1));
      if (isWordCorrect)
        dispatch(
          actionUpdateLastCorrectWordIndex(
            learnCardSettings.lastCorrectWordIndex + 1,
          ),
        );
    }
    if (direction === 'previous' && currentLearnCardIndex > 0) {
      dispatch(actionUpdateCurrentCardIndex(currentLearnCardIndex - 1));
    }
    dispatch(actionUpdateAnswerShownFlag(false));
    dispatch(actionUpdateEnteredWord(''));
    dispatch(actionUpdateSubmissionFlag(false));
    dispatch(actionUpdateWordCorrectFlag(false));
    dispatch(actionUpdateCheckDisplaying(false));
    dispatch(actionUpdateAudiosToPlay([]));
    dispatch(actionUpdateCurrentAudio(null));
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
          currentCardIndex={currentLearnCardIndex}
        />
        <LearnCard
          learnCard={learnCard}
          learnCardSettings={learnCardSettings}
          learnCardsLength={learnCards.length}
        />
        <LearnCardArrow
          direction={flippingCardDirections.next}
          onArrowClick={handleArrowClick}
          currentCardIndex={currentLearnCardIndex}
          learnCardsLength={learnCards.length}
          isWordCorrect={isWordCorrect}
        />
      </div>
      <LearnCardButtonsContainer
        learnCard={learnCard}
        isWordCorrect={isWordCorrect}
      />
      <ProgressBar current={currentLearnCardIndex} all={learnCards.length} />
    </div>
  );
};
