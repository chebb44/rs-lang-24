import React from 'react';
import './Score.scss';

export const Score = ({ score }) => {
  return <span className="sprint-score">{`Счет: ${score} очков`}</span>;
};
