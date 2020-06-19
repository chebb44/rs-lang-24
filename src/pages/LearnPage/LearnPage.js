import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  learnCardsSelector,
  learnedWordsAmountSelector,
} from '../../reducers/learnCards/learnCardsReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionUpdateLearnedWordsAmount } from '../../reducers/learnCards/learnCardsActions';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrowNext } from '../../components/LearnCardArrows/LearnCardArrowNext';
import { LearnCardArrowPrevious } from '../../components/LearnCardArrows/LearnCardArrowPrevious';
import { CheckWordButton } from '../../components/CheckWordButton/CheckWordButton';
import './LearnPage.scss';

export const LearnPage = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const learnedWordsAmount = useSelector(learnedWordsAmountSelector);
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const learnCard = learnCards[currentCardIndex];
  const cardsSetLength = learnCards.length;
  const dispatch = useDispatch();

  const handleCheckButtonClick = () => {
    setIsCheckButtonClicked(!isCheckButtonClicked);
  };

  const handleWordCheck = (bool) => {
    if (bool === true)
      dispatch(actionUpdateLearnedWordsAmount(learnedWordsAmount + 1));
  };

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      if (
        currentCardIndex === cardsSetLength - 1 ||
        learnedWordsAmount <= currentCardIndex
      )
        return;
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
          handleWordCheck={handleWordCheck}
        />
        <LearnCardArrowNext
          onNextArrowClick={handleArrowClick}
          currentCardIndex={currentCardIndex}
          cardsSetLength={cardsSetLength}
          learnedWordsAmount={learnedWordsAmount}
        />
      </div>
      <CheckWordButton onCheckButtonClick={handleCheckButtonClick} />
    </div>
  );
};
