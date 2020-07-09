import React from 'react';
import './QuizProgressBar.scss';

export const QuizProgressBar = ({ current, all }) => {
  const percent = Math.round((current / all) * 100);
  return (
    <div className="quiz-progress">
      <div
        className="quiz-progress__indicator"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};
