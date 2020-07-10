import React from 'react';
import { WordContainer } from '../SavannaWordContainer/wordContainer';
export const SavannaAnswers = ({
  currentCards,
  blockSize,
  answerIndex,
  blockIndex,
  setCurrentAnswer,
  targetWord,
  setTargetWord,
}) => {
  let wordArray = [];
  for (let i = 0; i < blockSize; i++) {
    wordArray.push(
      <WordContainer
        key={Math.random()}
        currentCards={currentCards}
        blockSize={blockSize}
        blockIndex={blockIndex}
        cardIndex={i}
        answerIndex={answerIndex}
        setCurrentAnswer={setCurrentAnswer}
        isTarget={targetWord === i}
        setTargetWord={setTargetWord}
      />,
    );
  }
  return wordArray;
};
