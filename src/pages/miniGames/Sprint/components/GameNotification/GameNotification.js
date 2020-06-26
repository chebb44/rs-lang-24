import React from 'react';
import './GameNotification.scss';
export const GameNotification = ({ text }) => {
  return (
    <div className="sprint-notification">
      <h5>{text}</h5>
    </div>
  );
};
