import React from 'react';
import './ShowAnswerButton.scss';

export const ShowAnswerButton = ({ onShowAnswerButtonClick }) => {
  return (
    <button
      type="button"
      className="btn ml-2 mb-2 button_show-answer"
      onClick={() => onShowAnswerButtonClick()}
    >
      Показать ответ
    </button>
  );
};
