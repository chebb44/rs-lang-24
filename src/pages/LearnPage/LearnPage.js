import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { learnCardsSelector } from '../../reducers/learnCards/learnCardsReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrowNext } from '../../components/LearnCardArrows/LearnCardArrowNext';
import { LearnCardArrowPrevious } from '../../components/LearnCardArrows/LearnCardArrowPrevious';
import { CheckWordButton } from '../../components/CheckWordButton/CheckWordButton';
import './LearnPage.scss';

export const LearnPage = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const learnCard = learnCards[currentCardIndex];
  const cardsSetLength = learnCards.length;

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
