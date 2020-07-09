import React, { useState } from 'react';
import './EnglishPuzzleQuestionContainer.scss';
import { EnglishPuzzleHelpBtnsContainer } from '../EnglishPuzzleHelpBtnsContainer/EnglishPuzzleHelpBtnsContainer';

export const EnglishPuzzleQuestionContainer = ({
  word,
  playWordSoundValue,
  setPlayWordSoundValue,
  showTranslateWordValue,
  setShowTranslateWordValue,
  showFirstLetterValue,
  setShowFirstLetterValue,
}) => {
  const { wordTranslate } = word;
  const [classWordTranslate, setClassWordTranslate] = useState(
    'englishPuzzle-question-container__word-translation',
  );

  return (
    <div className="englishPuzzle-question-container">
      <span className={classWordTranslate}>{wordTranslate}</span>
      <EnglishPuzzleHelpBtnsContainer
        gameWord={word}
        setClassWordTranslate={setClassWordTranslate}
        playWordSoundValue={playWordSoundValue}
        setPlayWordSoundValue={setPlayWordSoundValue}
        showTranslateWordValue={showTranslateWordValue}
        setShowTranslateWordValue={setShowTranslateWordValue}
        showFirstLetterValue={showFirstLetterValue}
        setShowFirstLetterValue={setShowFirstLetterValue}
      />
    </div>
  );
};
