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
  actionUpdateAnswerShownFlag,
} from '../../reducers/learnCard/learnCardActions';
import { actionUpdateLastCorrectWordIndex } from '../../reducers/learnSettings/learnSettingsActions';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrow } from '../../components/LearnCardArrow/LearnCardArrow';
import './LearningContainer.scss';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import { ProgressBar } from './../../components/ProgressBar/ProgressBar';
import SettingsModal from '../../pages/SettingsModal/SettingsModal';
import ControlButtons from '../../pages/ControlButtons/ControlButtons';
import { appStateSelector } from '../../reducers/appState/appStateReducer';

export const LearningContainer = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const { isWordCorrect, currentLearnCardIndex } = useSelector(
    learnCardParametersSelector,
  );
  const { visibleStatisticModal } = useSelector(appStateSelector);
  const learnCard = learnCards[currentLearnCardIndex];
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

  if (visibleStatisticModal) return null;
  return (
    <div className="learning-container">
      <SettingsModal />
      <ControlButtons />
      <div className="learning-container__flipping-container">
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
