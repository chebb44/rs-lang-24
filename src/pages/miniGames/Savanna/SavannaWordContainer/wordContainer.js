import React from 'react';
export const WordContainer = ({
  currentCards,
  blockSize,
  blockIndex,
  cardIndex,
  answerIndex,
  trueOrFalse,
  setTrueOrFalse,
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
          let lastAswer = document.getElementsByClassName(
            'btn btn-warning answer',
          )[0];
          if (lastAswer) {
            lastAswer.className = 'btn btn-outline-light answer';
          }
          setTrueOrFalse(true);
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
          let lastAswer = document.getElementsByClassName(
            'btn btn-warning answer',
          )[0];
          if (lastAswer) {
            lastAswer.className = 'btn btn-outline-light answer';
          }
          setTrueOrFalse(false);
          event.target.className = 'btn btn-warning answer';
        }}
      >
        {currentCards[blockSize * blockIndex + cardIndex].word}
      </button>
    );
  }
};
