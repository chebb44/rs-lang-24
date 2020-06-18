import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  currentLearnCardSelector,
  cardsSetLengthSelector,
} from '../../reducers/learnCards/learnCardsReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionUpdateLearnCard } from '../../reducers/learnCards/learnCardsActions';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrowNext } from '../../components/LearnCardArrows/LearnCardArrowNext';
import { LearnCardArrowPrevious } from '../../components/LearnCardArrows/LearnCardArrowPrevious';
import { CheckWordButton } from '../../components/CheckWordButton/CheckWordButton';
import './LearnPage.scss';

export const LearnPage = () => {
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const learnCard = useSelector(currentLearnCardSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const cardsSetLength = useSelector(cardsSetLengthSelector);
  const dispatch = useDispatch();

  const handleCheckButtonClick = () => {
    setIsCheckButtonClicked(!isCheckButtonClicked);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      if (currentCardIndex === cardsSetLength - 1) return;
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      if (currentCardIndex === 0) return;
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  useEffect(() => {
    dispatch(actionUpdateLearnCard(currentCardIndex));
  }, [dispatch, currentCardIndex]);

  return (
    <div className="learn-page">
      <div className="learn-page__flipping-container">
        <LearnCardArrowPrevious
          onPreviousArrowClick={handleArrowClick}
          currentCardIndex={currentCardIndex}
        />
        <LearnCard
          learnCard={learnCard}
          learnCardSettingsData={learnCardSettings}
          isCheckButtonClicked={isCheckButtonClicked}
          handleCheckButtonClick={handleCheckButtonClick}
        />
        <LearnCardArrowNext
          onNextArrowClick={handleArrowClick}
          currentCardIndex={currentCardIndex}
          cardsSetLength={cardsSetLength}
        />
      </div>
      <CheckWordButton onCheckButtonClick={handleCheckButtonClick} />
    </div>
  );
};
