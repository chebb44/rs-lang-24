import React from 'react';
import { WordContainer } from '../SavannaWordContainer/wordContainer';
export const SavannaAnswers = ({
  currentCards,
  blockSize,
  answerIndex,
  blockIndex,
  setCurrentAnswer,
}) => {
  let wordArray = [];
  for (let i = 0; i < blockSize; i++) {
    if (Math.random() > 1 / 2) {
      wordArray.unshift(
        <WordContainer
          key={Math.random()}
          currentCards={currentCards}
          blockSize={blockSize}
          blockIndex={blockIndex}
          cardIndex={i}
          answerIndex={answerIndex}
          setCurrentAnswer={setCurrentAnswer}
        />,
      );
    } else {
      wordArray.push(
        <WordContainer
          key={Math.random()}
          currentCards={currentCards}
          blockSize={blockSize}
          blockIndex={blockIndex}
          cardIndex={i}
          answerIndex={answerIndex}
          setCurrentAnswer={setCurrentAnswer}
        />,
      );
    }
  }
  return wordArray;
};
