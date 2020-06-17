import React from 'react';

export const CheckWordButton = ({ onCheckButtonClick }) => {
  return (
    <button
      type="button"
      className="btn ml-2"
      onClick={() => onCheckButtonClick()}
    >
      Check
    </button>
  );
};
