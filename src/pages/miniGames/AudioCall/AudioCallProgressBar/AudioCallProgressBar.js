import React from 'react';
import './AudioCallProgressBar.scss';

export const AudioCallProgressBar = ({ current, all }) => {
  const percent = Math.round((current / all) * 100);
  return (
    <div className="audio-call-progress">
      <div
        className="audio-call-progress__indicator"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};
