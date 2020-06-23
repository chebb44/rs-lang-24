import React from 'react';
import { useDispatch } from 'react-redux';
import { LearnCardButton } from '../LearnCardButton/LearnCardButton';
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
        <LearnCardButton
          text={buttonParams.check.text}
          onButtonClick={handleCheckButtonClick}
          type={buttonParams.check.type}
        />
        <LearnCardButton
          text={buttonParams.showAnswer.text}
          onButtonClick={handleShowAnswerButtonClick}
          type={buttonParams.showAnswer.type}
        />
        <LearnCardButton
          text={buttonParams.delete.text}
          onButtonClick={handleDeleteButtonClick}
          type={buttonParams.delete.type}
        />
      </div>
      {isWordCorrect && (
        <div>
          <LearnCardButton
            text={buttonParams.markAsHard.text}
            onButtonClick={handleMarkAsHardButtonClick}
            type={buttonParams.markAsHard.type}
          />
          <LearnCardButton
            text={buttonParams.markAsGood.text}
            onButtonClick={handleMarkAsGoodButtonClick}
            type={buttonParams.markAsGood.type}
          />
          <LearnCardButton
            text={buttonParams.markAsEasy.text}
            onButtonClick={handleMarkAsEasyButtonClick}
            type={buttonParams.markAsEasy.type}
          />
          <LearnCardButton
            text={buttonParams.learnAgain.text}
            onButtonClick={handleLearnAgainButtonClick}
            type={buttonParams.learnAgain.type}
          />
        </div>
      )}
    </div>
  );
};
