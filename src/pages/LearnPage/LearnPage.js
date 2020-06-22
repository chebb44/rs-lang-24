import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  learnCardsSelector,
  learnedWordsAmountSelector,
} from '../../reducers/learnCards/learnCardsReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionUpdateLearnedWordsAmount } from '../../reducers/learnCards/learnCardsActions';
import { actionMarkWord } from '../../store/actionsForSaga';
import { LEARNED_WORD, HARD_WORD, DELETED_WORD } from '../../sagas/constants';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrowNext } from '../../components/LearnCardArrows/LearnCardArrowNext';
import { LearnCardArrowPrevious } from '../../components/LearnCardArrows/LearnCardArrowPrevious';
import { CheckWordButton } from '../../components/CheckWordButton/CheckWordButton';
import { ShowAnswerButton } from '../../components/ShowAnswerButton/ShowAnswerButton';
import { DeleteWordButton } from '../../components/DeleteWordButton/DeleteWordButton';
import { HardWordButton } from '../../components/HardWordButton/HardWordButton';
import './LearnPage.scss';
import LearnCardButtonsBlock from '../../components/LearnCardButtonsBlock/LearnCardButtonsBlock';
import {
  actionSetAutoAudio,
  actionSetAutoTranslate,
} from '../../reducers/learnSettings/learnSettingsActions';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { actionSettingsModal } from '../../reducers/appState/appStateActions';

export const LearnPage = () => {
  const learnCards = useSelector(learnCardsSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const learnedWordsAmount = useSelector(learnedWordsAmountSelector);
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const [isShowAnswerButtonClicked, setIsShowAnswerButtonClicked] = useState(
    false,
  );
  const [isNextArrowClicked, setIsNextArrowClicked] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const learnCard = learnCards[currentCardIndex];
  const cardsSetLength = learnCards.length;
  const appState = useSelector(appStateSelector);
  const dispatch = useDispatch();

  const handleCheckButtonClick = () => {
    setIsCheckButtonClicked(!isCheckButtonClicked);
  };

  const handleShowAnswerButtonClick = () => {
    setIsShowAnswerButtonClicked(!isShowAnswerButtonClicked);
    dispatch(actionUpdateLearnedWordsAmount(learnedWordsAmount + 1));
  };

  const handleDeleteButtonClick = () => {
    dispatch(actionMarkWord(learnCard.id, DELETED_WORD));
  };

  const handleHardButtonClick = () => {
    dispatch(actionMarkWord(learnCard.id, HARD_WORD));
  };

  const handleNextArrowClick = () => {
    setIsNextArrowClicked(!isNextArrowClicked);
    dispatch(actionMarkWord(learnCard.id, LEARNED_WORD));
    if (isCheckButtonClicked) {
      handleCheckButtonClick();
    }
  };

  const updateLearnedWordsAmount = (isWordCorrect) => {
    if (isWordCorrect === true)
      dispatch(actionUpdateLearnedWordsAmount(learnedWordsAmount + 1));
  };

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      setIsNextArrowClicked(!isNextArrowClicked);
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
        <LearnCardArrowPrevious
          onPreviousArrowClick={handleArrowClick}
          currentCardIndex={currentCardIndex}
        />
        <LearnCard
          learnCard={learnCard}
          learnCardSettingsData={learnCardSettings}
          isCheckButtonClicked={isCheckButtonClicked}
          isShowAnswerButtonClicked={isShowAnswerButtonClicked}
          isNextArrowClicked={isNextArrowClicked}
          handleCheckButtonClick={handleCheckButtonClick}
          updateLearnedWordsAmount={updateLearnedWordsAmount}
          handleNextArrowClick={handleNextArrowClick}
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
