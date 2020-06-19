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
import { ShowAnswerButton } from '../../components/ShowAnswerButton/ShowAnswerButton';
import { DeleteWordButton } from '../../components/DeleteWordButton/DeleteWordButton';
import { HardWordButton } from '../../components/HardWordButton/HardWordButton';
import './LearnPage.scss';

export const LearnPage = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const learnedWordsAmount = useSelector(learnedWordsAmountSelector);
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const [isShowAnswerButtonClicked, setIsShowAnswerButtonClicked] = useState(
    false,
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const learnCard = learnCards[currentCardIndex];
  const cardsSetLength = learnCards.length;
  const dispatch = useDispatch();

  const handleCheckButtonClick = () => {
    setIsCheckButtonClicked(!isCheckButtonClicked);
  };

  const handleShowAnswerButtonClick = () => {
    setIsShowAnswerButtonClicked(!isShowAnswerButtonClicked);
    /* dispatch(actionUpdateDictionaryLearnedWords(learnCard)); */
    dispatch(actionUpdateLearnedWordsAmount(learnedWordsAmount + 1));
  };

  const handleDeleteButtonClick = () => {
    /* dispatch(actionUpdateDictionaryDeletedWords(learnCard)); */
  };

  const handleHardButtonClick = () => {
    /* dispatch(actionUpdateDictionaryHardWords(learnCard)); */
  };

  const handleWordCheck = (isWordCorrect) => {
    if (isWordCorrect === true)
      /* dispatch(actionUpdateDictionaryLearnedWords(learnCard)); */
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
      setIsShowAnswerButtonClicked(false);
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
          isShowAnswerButtonClicked={isShowAnswerButtonClicked}
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
      <div>
        <CheckWordButton onCheckButtonClick={handleCheckButtonClick} />
        <ShowAnswerButton
          onShowAnswerButtonClick={handleShowAnswerButtonClick}
        />
      </div>
      <div>
        <DeleteWordButton onDeleteButtonClick={handleDeleteButtonClick} />
        <HardWordButton onHardButtonClick={handleHardButtonClick} />
      </div>
    </div>
  );
};
