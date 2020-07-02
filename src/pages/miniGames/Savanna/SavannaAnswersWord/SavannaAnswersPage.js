import React, { useEffect } from 'react';
import { WordContainer } from '../SavannaWordContainer/wordContainer';
export const SavannaAnswers = ({
  currentCards,
  blockSize,
  answerIndex,
  blockIndex,
  trueOrFalse,
  setTrueOrFalse,
}) => {
  let wordArray = [];
  for (let i = 0; i < blockSize; i++) {
    if (Math.random() > 1 / 2) {
      wordArray.unshift(
        <WordContainer
          currentCards={currentCards}
          blockSize={blockSize}
          blockIndex={blockIndex}
          cardIndex={i}
          answerIndex={answerIndex}
          trueOrFalse={trueOrFalse}
          setTrueOrFalse={setTrueOrFalse}
        />,
      );
    } else {
      wordArray.push(
        <WordContainer
          currentCards={currentCards}
          blockSize={blockSize}
          blockIndex={blockIndex}
          cardIndex={i}
          answerIndex={answerIndex}
          trueOrFalse={trueOrFalse}
          setTrueOrFalse={setTrueOrFalse}
        />,
      );
    }
  }
  return wordArray;
};
