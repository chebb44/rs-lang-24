import React from 'react';
import './EnglishPuzzleProgressBar.scss';

export const EnglishPuzzleProgressBar = ({ current, all }) => {
  const percent = Math.round((current / all) * 100);
  return (
    <div className="english-puzzle-progress">
      <div
        className="english-puzzle-progress__indicator"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};
