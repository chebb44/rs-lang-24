import React from 'react';
import './LearnCardButton.scss';

export const LearnCardButton = ({ text, onButtonClick }) => {
  return (
    <button
      type="button"
      className="btn ml-2 mb-2 learn-card-buttons__button"
      onClick={() => onButtonClick()}
    >
      {text}
    </button>
  );
};
