import React from 'react';
import './CheckWordButton.scss';

export const CheckWordButton = ({ onCheckButtonClick }) => {
  return (
    <button
      type="button"
      className="btn ml-2 button_check"
      onClick={() => onCheckButtonClick()}
    >
      Проверить
    </button>
  );
};
