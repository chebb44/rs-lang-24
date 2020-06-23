import React from 'react';
import { useDispatch } from 'react-redux';
import { LearnCardButton } from '../LearnCardButton/LearnCardButton';
import { actionSetShowAnswerButtonFlag } from '../../reducers/learnCardButtons/learnCardButtonsActions';
import { actionMarkWord } from '../../store/actionsForSaga';
import { HARD_WORD, DELETED_WORD } from '../../sagas/constants';
import { actionUpdateSubmissionFlag } from '../../reducers/learnCard/learnCardActions';

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
    dispatch(actionSetShowAnswerButtonFlag(true));
  };

  const handleDeleteButtonClick = () => {
    dispatch(actionMarkWord(learnCard.id, DELETED_WORD));
  };

  const handleAddToHardButtonClick = () => {
    dispatch(actionMarkWord(learnCard.id, HARD_WORD));
  };

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
      </div>
      <div>
        <LearnCardButton
          text={buttonText.delete}
          onButtonClick={handleDeleteButtonClick}
        />
        <LearnCardButton
          text={buttonText.addToHard}
          onButtonClick={handleAddToHardButtonClick}
        />
      </div>
    </div>
  );
};
