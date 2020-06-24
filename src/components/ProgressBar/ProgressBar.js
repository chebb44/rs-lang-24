import React from 'react';
import './ProgressBar.scss';

export const ProgressBar = ({ current = 38, all = 80 }) => {
  const percent = Math.round((current / all) * 100);
  return (
    <div className="learn-progress">
      <span className="percents">{`Пройдено ${current} из ${all}`}</span>
      <div
        className="learn-progress-indicator"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};
