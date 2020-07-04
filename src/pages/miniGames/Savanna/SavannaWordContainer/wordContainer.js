import React from 'react';
export const WordContainer = ({
  currentCards,
  blockSize,
  blockIndex,
  cardIndex,
  answerIndex,
  setCurrentAnswer,
}) => {
  const isAnswer =
    blockIndex * blockSize + answerIndex === blockSize * blockIndex + cardIndex;
  if (isAnswer) {
    return (
      <button
        key={currentCards[blockSize * blockIndex + cardIndex].word}
        type="button"
        className="btn btn-outline-light answer"
        onClick={(event) => {
          let lastAswer = document.getElementById('active');
          if (lastAswer) {
            lastAswer.className = 'btn btn-outline-light answer';
          }
          setCurrentAnswer(true);
          event.target.id = 'active';
          event.target.className = 'btn btn-warning answer';
        }}
      >
        {currentCards[blockSize * blockIndex + cardIndex].word}
      </button>
    );
  } else {
    return (
      <button
        key={currentCards[blockSize * blockIndex + cardIndex].word}
        type="button"
        className="btn btn-outline-light answer"
        onClick={(event) => {
          let lastAswer = document.getElementById('active');
          if (lastAswer) {
            lastAswer.className = 'btn btn-outline-light answer';
          }
          setCurrentAnswer(false);
          event.target.id = 'active';
          event.target.className = 'btn btn-warning answer';
        }}
      >
        {currentCards[blockSize * blockIndex + cardIndex].word}
      </button>
    );
  }
};
