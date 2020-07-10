import React, { useState } from 'react';
import './EnglishPuzzleQuestionContainer.scss';
import { EnglishPuzzleControlBtnsContainer } from '../EnglishPuzzleControlBtnsContainer/EnglishPuzzleControlBtnsContainer';
import { EnglishPuzzleAudioPlayBtn } from '../EnglishPuzzleAudioPlayBtn/EnglishPuzzleAudioPlayBtn';

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
    'english-puzzle-question-container__word-translation',
  );

  return (
    <div className="english-puzzle-question-container">
      <EnglishPuzzleControlBtnsContainer
        gameWord={word}
        setClassWordTranslate={setClassWordTranslate}
        playWordSoundValue={playWordSoundValue}
        setPlayWordSoundValue={setPlayWordSoundValue}
        showTranslateWordValue={showTranslateWordValue}
        setShowTranslateWordValue={setShowTranslateWordValue}
        showFirstLetterValue={showFirstLetterValue}
        setShowFirstLetterValue={setShowFirstLetterValue}
      />
      <EnglishPuzzleAudioPlayBtn gameWord={word} />
      {/*  */}
      <p className={classWordTranslate}>{wordTranslate}</p>
    </div>
  );
};
