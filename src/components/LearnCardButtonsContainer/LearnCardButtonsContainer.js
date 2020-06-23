import React from 'react';
import { useDispatch } from 'react-redux';
import { UniversalButton } from '../UniversalButton/UniversalButton';
import { actionMarkWord } from '../../store/actionsForSaga';
import {
  HARD_WORD,
  GOOD_WORD,
  EASY_WORD,
  DELETED_WORD,
} from '../../sagas/constants';
import {
  actionUpdateSubmissionFlag,
  actionUpdateWordCorrectFlag,
  actionUpdateAnswerShownFlag,
} from '../../reducers/learnCard/learnCardActions';
import { buttonParams } from './constants';

export const LearnCardButtonsContainer = ({ learnCard, isWordCorrect }) => {
  const dispatch = useDispatch();

  const handleCheckButtonClick = () => {
    dispatch(actionUpdateSubmissionFlag(true));
  };
  const handleShowAnswerButtonClick = () => {
    dispatch(actionUpdateAnswerShownFlag(true));
    dispatch(actionUpdateWordCorrectFlag(true));
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
    //dispatch(actionMarkWord());
  };

  return (
    <div className="learn-card-buttons">
      <div>
        <UniversalButton
          onClickHandler={handleCheckButtonClick}
          buttonText={buttonParams.check.text}
          extraClasses={buttonParams.check.classes}
        />
        <UniversalButton
          onClickHandler={handleShowAnswerButtonClick}
          buttonText={buttonParams.showAnswer.text}
          extraClasses={buttonParams.showAnswer.classes}
        />
        <UniversalButton
          onClickHandler={handleDeleteButtonClick}
          buttonText={buttonParams.delete.text}
          extraClasses={buttonParams.delete.classes}
        />
      </div>
      {isWordCorrect && (
        <div>
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