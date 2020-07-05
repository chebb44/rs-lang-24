import React from 'react';
import './QuizQuestionContainer.scss';
import { QuizQuestionImg } from '../QuizQuestionImg/QuizQuestionImg';
import { QuizQuestionTitle } from '../QuizQuestionTitle/QuizQuestionTitle';

export const QuizQuestionContainer = ({ wordsForGame, questionTitleClass }) => {
  const { image, textMeaning, wordTranslate } = wordsForGame;
  return (
    <div className="quiz-question-container">
      <QuizQuestionImg image={image} />
      <QuizQuestionTitle
        word={textMeaning}
        wordTranslate={wordTranslate}
        questionTitleClass={questionTitleClass}
      />
    </div>
  );
};
