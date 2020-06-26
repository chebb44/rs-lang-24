import React from 'react';
import './GameWord.scss';
export const GameWord = ({ card }) => {
  return (
    <div className="sprint-word">
      <h4>{card.word}</h4>
      <h4>
        <i>{card.wordTranslate}</i>
      </h4>
    </div>
  );
};
