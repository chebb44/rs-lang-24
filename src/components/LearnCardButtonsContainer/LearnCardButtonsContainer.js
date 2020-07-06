import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UniversalButton } from '../UniversalButton/UniversalButton';
import { actionMarkWord } from '../../store/actionsForSaga';
import {
  HARD_WORD,
  GOOD_WORD,
  EASY_WORD,
  DELETED_WORD,
  LEARNED_WORD,
} from '../../sagas/constants';
import {
  actionUpdateWordCorrectFlag,
  actionUpdateAnswerShownFlag,
  actionUpdateTranslationShownFlag,
} from '../../reducers/learnCard/learnCardActions';
import { actionAddAnswerAccuracy } from '../../reducers/learnSettings/learnSettingsActions';
import { buttonParams } from './constants';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import { actionAddRepeatingWord } from '../../reducers/learnCards/learnCardsActions';
import { learnSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { submitWordFunction } from '../../utilities/learnCard/submitWordFunction';
import { learnCardsSelector } from '../../reducers/learnCards/learnCardsReducer';
import { changeWordCard } from '../../utilities/LearningContainer/changeWordCard';
import './LearnCardButtonsContainer.scss';

export const LearnCardButtonsContainer = () => {
  const learnCards = useSelector(learnCardsSelector);
  const { enteredWord, currentLearnCardIndex, isWordCorrect } = useSelector(
    learnCardParametersSelector,
  );
  const { wordsPerDay, learnCardSettings } = useSelector(learnSettingsSelector);
  const learnCard = learnCards[currentLearnCardIndex];
  const dispatch = useDispatch();

  const handleCheckButtonClick = () => {
    submitWordFunction(enteredWord, learnCard, learnCardSettings);
  };

  const handleNextCard = () => {
    changeWordCard(
      'next',
      isWordCorrect,
      currentLearnCardIndex,
      wordsPerDay,
      learnCardSettings.cardsPerDay,
      learnCardSettings.lastCorrectWordIndex,
      learnCards.length,
      learnCardSettings.answersAccuracy,
    );
  };

  const handleShowAnswerButtonClick = () => {
    dispatch(actionUpdateAnswerShownFlag(true));
    dispatch(actionUpdateTranslationShownFlag(true));
    dispatch(actionUpdateWordCorrectFlag(true));
    dispatch(
      actionMarkWord({ wordId: learnCard._id, difficulty: LEARNED_WORD }),
    );
    dispatch(actionAddAnswerAccuracy(true));
  };

  const handleDeleteButtonClick = () => {
    dispatch(
      actionMarkWord({ wordId: learnCard._id, difficulty: DELETED_WORD }),
    );
  };

  const handleMarkAsHardButtonClick = () => {
    dispatch(actionMarkWord({ wordId: learnCard._id, difficulty: HARD_WORD }));
    handleNextCard();
  };

  const handleMarkAsGoodButtonClick = () => {
    dispatch(actionMarkWord({ wordId: learnCard._id, difficulty: GOOD_WORD }));
    handleNextCard();
  };

  const handleMarkAsEasyButtonClick = () => {
    dispatch(actionMarkWord({ wordId: learnCard._id, difficulty: EASY_WORD }));
    handleNextCard();
  };

  const handleLearnAgainButtonClick = () => {
    dispatch(actionAddRepeatingWord(currentLearnCardIndex));
    handleNextCard();
  };

  return (
    <div className="learn-card-buttons">
      <div className="learn-card-buttons__action-buttons">
        <UniversalButton
          onClickHandler={handleCheckButtonClick}
          buttonText={buttonParams.check.text}
          extraClasses={buttonParams.check.classes}
        />
        {learnCardSettings.isShowAnswerBtnOn && (
          <UniversalButton
            onClickHandler={handleShowAnswerButtonClick}
            buttonText={buttonParams.showAnswer.text}
            extraClasses={buttonParams.showAnswer.classes}
          />
        )}
        {learnCardSettings.isDeleteBtnOn && (
          <UniversalButton
            onClickHandler={handleDeleteButtonClick}
            buttonText={buttonParams.delete.text}
            extraClasses={buttonParams.delete.classes}
          />
        )}
      </div>
      {learnCardSettings.isMarkDifficultyBtnsOn && isWordCorrect && (
        <div className="learn-card-buttons__mark-buttons">
          <UniversalButton
            onClickHandler={handleMarkAsHardButtonClick}
            buttonText={buttonParams.markAsHard.text}
            extraClasses={buttonParams.markAsHard.classes}
          />
          <UniversalButton
            onClickHandler={handleMarkAsGoodButtonClick}
            buttonText={buttonParams.markAsGood.text}
            extraClasses={buttonParams.markAsGood.classes}
          />
          <UniversalButton
            onClickHandler={handleMarkAsEasyButtonClick}
            buttonText={buttonParams.markAsEasy.text}
            extraClasses={buttonParams.markAsEasy.classes}
          />
          <UniversalButton
            onClickHandler={handleLearnAgainButtonClick}
            buttonText={buttonParams.learnAgain.text}
            extraClasses={buttonParams.learnAgain.classes}
          />
        </div>
      )}
    </div>
  );
};
