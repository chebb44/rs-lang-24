import React from 'react';
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
  actionUpdateLastCorrectWordIndex,
  actionUpdateAnswerShownFlag,
} from '../../reducers/learnCard/learnCardActions';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrow } from '../../components/LearnCardArrow/LearnCardArrow';
import './LearnPage.scss';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import { ProgressBar } from './../../components/ProgressBar/ProgressBar';
import SettingsModal from '../SettingsModal/SettingsModal';
import ControlButtons from '../ControlButtons/ControlButtons';

export const LearnPage = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const {
    isWordCorrect,
    currentLearnCardIndex,
    lastCorrectWordIndex,
  } = useSelector(learnCardParametersSelector);
  const learnCard = learnCards[currentLearnCardIndex];
  const dispatch = useDispatch();
  const flippingCardDirections = {
    next: 'next',
    previous: 'previous',
  };

  const handleArrowClick = (direction) => {
    if (
      direction === 'next' &&
      (isWordCorrect || currentLearnCardIndex <= lastCorrectWordIndex) &&
      currentLearnCardIndex < learnCards.length - 1
    ) {
      dispatch(actionUpdateCurrentCardIndex(currentLearnCardIndex + 1));
      if (isWordCorrect)
        dispatch(actionUpdateLastCorrectWordIndex(lastCorrectWordIndex + 1));
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
  return (
    <div className="learn-page">
      <SettingsModal />
      <ControlButtons />
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
