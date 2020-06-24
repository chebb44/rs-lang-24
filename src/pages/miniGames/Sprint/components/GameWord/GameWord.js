import React from 'react';
import './GameWord.scss';
export const GameWord = ({ card }) => {
  return (
    <div>
      <p>{card.word}</p>
      <p>{card.wordTranslate}</p>
    </div>
  );
};
