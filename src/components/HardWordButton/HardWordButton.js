import React from 'react';
import './HardWordButton.scss';

export const HardWordButton = ({ onHardButtonClick }) => {
  return (
    <button
      type="button"
      className="btn ml-2 button_hard"
      onClick={() => onHardButtonClick()}
    >
      Добавить в сложные
    </button>
  );
};
