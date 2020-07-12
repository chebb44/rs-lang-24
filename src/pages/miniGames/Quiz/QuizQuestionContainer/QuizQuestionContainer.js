import React, { useState } from 'react';
import './QuizQuestionContainer.scss';
import { QuizQuestionImg } from '../QuizQuestionImg/QuizQuestionImg';
import { QuizQuestionTitle } from '../QuizQuestionTitle/QuizQuestionTitle';
import { QuizHelpBtnsContainer } from '../QuizHelpBtnsContainer/QuizHelpBtnsContainer';

export const QuizQuestionContainer = ({
  word,
  setInputValue,
  inputValue,
  inputWordClass,
  checkTrueWordClick,
  playWordSoundValue,
  setPlayWordSoundValue,
  showTranslateWordValue,
  setShowTranslateWordValue,
  showFirstLetterValue,
  setShowFirstLetterValue,
}) => {
  const { image, textMeaning, wordTranslate } = word;
  const [classWordTranslate, setClassWordTranslate] = useState(
    'quiz-question-container__word-translation',
  );

  return (
    <div className="quiz-question-container">
      <span className={classWordTranslate}>{wordTranslate}</span>
      <QuizQuestionImg image={image} />
      <QuizHelpBtnsContainer
        gameWord={word}
        setInputValue={setInputValue}
        setClassWordTranslate={setClassWordTranslate}
        playWordSoundValue={playWordSoundValue}
        setPlayWordSoundValue={setPlayWordSoundValue}
        showTranslateWordValue={showTranslateWordValue}
        setShowTranslateWordValue={setShowTranslateWordValue}
        showFirstLetterValue={showFirstLetterValue}
        setShowFirstLetterValue={setShowFirstLetterValue}
      />
      <QuizQuestionTitle
        textMeaning={textMeaning}
        setInputValue={setInputValue}
        inputValue={inputValue}
        inputWordClass={inputWordClass}
        checkTrueWordClick={checkTrueWordClick}
      />
    </div>
  );
};
