import React from 'react';
import { useDispatch } from 'react-redux';
import { LearnCardButton } from '../LearnCardButton/LearnCardButton';
import { actionMarkWord } from '../../store/actionsForSaga';
import { HARD_WORD, DELETED_WORD } from '../../sagas/constants';
import {
  actionUpdateSubmissionFlag,
  actionUpdateWordCorrectFlag,
  actionUpdateAnswerShownFlag,
} from '../../reducers/learnCard/learnCardActions';

export const LearnCardButtonsContainer = ({ learnCard }) => {
  const dispatch = useDispatch();
  const buttonText = {
    check: 'Проверить',
    showAnswer: 'Показать ответ',
    delete: 'Удалить',
    addToHard: 'Добавить в сложные',
  };

  const handleCheckButtonClick = () => {
    dispatch(actionUpdateSubmissionFlag(true));
  };

  const handleShowAnswerButtonClick = () => {
    dispatch(actionUpdateAnswerShownFlag(true));
    dispatch(actionUpdateWordCorrectFlag(true));
  };

  const handleDeleteButtonClick = () => {
    dispatch(actionMarkWord(learnCard.id, DELETED_WORD));
  };

  /* const handleAddToHardButtonClick = () => {
    dispatch(actionMarkWord(learnCard.id, HARD_WORD));
  }; */

  return (
    <div className="learn-card-buttons">
      <div>
        <LearnCardButton
          text={buttonText.check}
          onButtonClick={handleCheckButtonClick}
        />
        <LearnCardButton
          text={buttonText.showAnswer}
          onButtonClick={handleShowAnswerButtonClick}
        />
        <LearnCardButton
          text={buttonText.delete}
          onButtonClick={handleDeleteButtonClick}
        />
      </div>
      <div></div>
    </div>
  );
};
