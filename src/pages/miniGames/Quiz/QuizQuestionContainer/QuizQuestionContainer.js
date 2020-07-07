import React from 'react';
import './QuizQuestionContainer.scss';
import { QuizQuestionImg } from '../QuizQuestionImg/QuizQuestionImg';
import { QuizQuestionTitle } from '../QuizQuestionTitle/QuizQuestionTitle';
import { QuizHelpBtnsContainer } from '../QuizHelpBtnsContainer/QuizHelpBtnsContainer';

export const QuizQuestionContainer = ({
  word,
  setInputValue,
  getTrueAnswer,
}) => {
  const { image, textMeaning } = word;
  return (
    <div className="quiz-question-container">
      <QuizQuestionImg image={image} />
      <QuizHelpBtnsContainer word={word} />
      <QuizQuestionTitle
        textMeaning={textMeaning}
        setInputValue={setInputValue}
        getTrueAnswer={getTrueAnswer}
      />
    </div>
  );
};
