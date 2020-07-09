import React from 'react';
import './EnglishPuzzleExitBtn.scss';

export const EnglishPuzzleExitBtn = ({ func }) => {
  return (
    <button
      type="button"
      className="close englishPuzzle-exit-btn"
      aria-label="Close"
      onClick={func}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
};
