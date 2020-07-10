import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { learnCardsSelector } from '../../reducers/learnCards/learnCardsReducer';
import { LearnCardButtonsContainer } from '../../components/LearnCardButtonsContainer/LearnCardButtonsContainer';
import {
  learnCardSettingsSelector,
  learnSettingsSelector,
} from '../../reducers/learnSettings/learnSettingsReducer';
import { actionUpdateCurrentCardIndex } from '../../reducers/learnCard/learnCardActions';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrow } from '../../components/LearnCardArrow/LearnCardArrow';
import './LearningContainer.scss';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import { ProgressBar } from './../../components/ProgressBar/ProgressBar';
import ControlButtons from '../../pages/ControlButtons/ControlButtons';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { changeWordCard } from '../../utilities/LearningContainer/changeWordCard';

export const LearningContainer = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const { wordsPerDay } = useSelector(learnSettingsSelector);
  const { isWordCorrect, currentLearnCardIndex } = useSelector(
    learnCardParametersSelector,
  );
  const { isStatisticModalShown, isMaxCardsModalShown } = useSelector(
    appStateSelector,
  );
  const learnCard = learnCards[currentLearnCardIndex];
  const flippingCardDirections = {
    next: 'next',
    previous: 'previous',
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (learnCardSettings.lastCorrectWordIndex > -1) {
      dispatch(
        actionUpdateCurrentCardIndex(
          learnCardSettings.lastCorrectWordIndex + 1,
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleArrowClick = (direction) => {
    changeWordCard(
      direction,
      isWordCorrect,
      currentLearnCardIndex,
      wordsPerDay,
      learnCardSettings.cardsPerDay,
      learnCardSettings.lastCorrectWordIndex,
      learnCards.length,
      learnCardSettings.answersAccuracy,
    );
  };

  if (isStatisticModalShown || isMaxCardsModalShown || !learnCard) return null;
  return (
    <div className="learning-container">
      <ControlButtons />
      <ProgressBar current={currentLearnCardIndex} all={learnCards.length} />
      <div className="learning-container__flipping-container">
        <LearnCardArrow
          direction={flippingCardDirections.previous}
          onArrowClick={handleArrowClick}
          currentCardIndex={currentLearnCardIndex}
        />
        <LearnCard
          learnCard={learnCard}
          learnCardSettings={learnCardSettings}
        />
        <LearnCardArrow
          direction={flippingCardDirections.next}
          onArrowClick={handleArrowClick}
          currentCardIndex={currentLearnCardIndex}
          isWordCorrect={isWordCorrect}
          lastCorrectWordIndex={learnCardSettings.lastCorrectWordIndex}
        />
      </div>
      <LearnCardButtonsContainer />
    </div>
  );
};
