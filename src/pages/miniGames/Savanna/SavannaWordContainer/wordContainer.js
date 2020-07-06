import React from 'react';
export const WordContainer = ({
  currentCards,
  blockSize,
  blockIndex,
  cardIndex,
  answerIndex,
  setCurrentAnswer,
  isTarget,
  setTargetWord,
}) => {
  const isAnswer =
    blockIndex * blockSize + answerIndex === blockSize * blockIndex + cardIndex;
  var className = "";
  if (isTarget) {
    className = "btn btn-warning answer";
  } else {
    className = "btn btn-outline-light answer";
  }
  if (isAnswer) {
    return (
      <button
        key={currentCards[blockSize * blockIndex + cardIndex].word}
        type="button"
        className={className}
        onClick={() => {
          setCurrentAnswer(true);
          setTargetWord(cardIndex);
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
        className={className}
        onClick={() => {
          setCurrentAnswer(false);
          setTargetWord(cardIndex);
        }}
      >
        {currentCards[blockSize * blockIndex + cardIndex].word}
      </button>
    );
  }
};
