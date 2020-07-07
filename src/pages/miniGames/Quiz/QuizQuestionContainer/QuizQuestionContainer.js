import React, { useState } from 'react';
import './QuizQuestionContainer.scss';
import { QuizQuestionImg } from '../QuizQuestionImg/QuizQuestionImg';
import { QuizQuestionTitle } from '../QuizQuestionTitle/QuizQuestionTitle';
import { QuizHelpBtnsContainer } from '../QuizHelpBtnsContainer/QuizHelpBtnsContainer';

export const QuizQuestionContainer = ({
  word,
  setInputValue,
  getTrueAnswer,
  inputValue,
}) => {
  const { image, textMeaning, wordTranslate } = word;
  const [classWordTranslate, setClassWordTranslate] = useState(
    'quiz-question-container__word-translation',
  );
  console.log(word);

  return (
    <div className="quiz-question-container">
      <span className={classWordTranslate}>{wordTranslate}</span>
      <QuizQuestionImg image={image} />
      <QuizHelpBtnsContainer
        gameWord={word}
        setInputValue={setInputValue}
        setClassWordTranslate={setClassWordTranslate}
      />
      <QuizQuestionTitle
        textMeaning={textMeaning}
        setInputValue={setInputValue}
        getTrueAnswer={getTrueAnswer}
        inputValue={inputValue}
      />
    </div>
  );
};
