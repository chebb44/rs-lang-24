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
} from '../../reducers/learnCard/learnCardActions';
import { actionAddAnswerAccuracy } from '../../reducers/learnSettings/learnSettingsActions';
import { buttonParams } from './constants';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import { actionAddRepeatingWord } from '../../reducers/learnCards/learnCardsActions';
import { submitWordFunction } from '../../utilities/learnCard/submitWordFunction';
import './LearnCardButtonsContainer.scss';

export const LearnCardButtonsContainer = ({
  learnCard,
  learnCardSettings,
  isWordCorrect,
}) => {
  const { enteredWord, currentLearnCardIndex } = useSelector(
    learnCardParametersSelector,
  );
  const dispatch = useDispatch();

  const handleCheckButtonClick = () => {
    submitWordFunction(enteredWord, learnCard, learnCardSettings);
  };

  const handleShowAnswerButtonClick = () => {
    dispatch(actionUpdateAnswerShownFlag(true));
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
  };

  const handleMarkAsGoodButtonClick = () => {
    dispatch(actionMarkWord({ wordId: learnCard._id, difficulty: GOOD_WORD }));
  };

  const handleMarkAsEasyButtonClick = () => {
    dispatch(actionMarkWord({ wordId: learnCard._id, difficulty: EASY_WORD }));
  };

  const handleLearnAgainButtonClick = () => {
    dispatch(actionAddRepeatingWord(currentLearnCardIndex));
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
