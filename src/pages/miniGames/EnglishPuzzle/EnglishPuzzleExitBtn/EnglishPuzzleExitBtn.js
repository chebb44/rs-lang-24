import React from 'react';
import './EnglishPuzzleExitBtn.scss';

export const EnglishPuzzleExitBtn = ({ func }) => {
  return (
    <button
      type="button"
      className="close english-puzzle-exit-btn"
      aria-label="Close"
      onClick={func}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
};
