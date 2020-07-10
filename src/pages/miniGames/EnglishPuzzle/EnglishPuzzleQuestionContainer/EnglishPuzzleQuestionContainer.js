import React, { useState } from 'react';
import './EnglishPuzzleQuestionContainer.scss';
import { EnglishPuzzleControlBtnsContainer } from '../EnglishPuzzleControlBtnsContainer/EnglishPuzzleControlBtnsContainer';
import { EnglishPuzzleAudioPlayBtn } from '../EnglishPuzzleAudioPlayBtn/EnglishPuzzleAudioPlayBtn';

export const EnglishPuzzleQuestionContainer = ({
  word,
  autoPlayWordSound,
  setAutoPlayWordSound,
  showTranslateWord,
  setShowTranslateWord,
  playWordSound,
  setPlayWordSound,
  showBackground,
  setShowBackground,
}) => {
  const { textMeaningTranslate } = word;

  return (
    <div className="english-puzzle-question-container">
      <EnglishPuzzleControlBtnsContainer
        autoPlayWordSound={autoPlayWordSound}
        setAutoPlayWordSound={setAutoPlayWordSound}
        showTranslateWord={showTranslateWord}
        setShowTranslateWord={setShowTranslateWord}
        playWordSound={playWordSound}
        setPlayWordSound={setPlayWordSound}
        showBackground={showBackground}
        setShowBackground={setShowBackground}
      />
      <EnglishPuzzleAudioPlayBtn gameWord={word} disabled={playWordSound} />
      {showTranslateWord ? (
        <p className="english-puzzle-question-container__word-translation english-puzzle-question-container__word-translation_visible">
          {textMeaningTranslate}
        </p>
      ) : (
        <p className="english-puzzle-question-container__word-translation">
          {textMeaningTranslate}
        </p>
      )}
    </div>
  );
};
