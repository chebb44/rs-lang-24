import React from 'react';
import './QuizQuestionTitle.scss';

export const QuizQuestionTitle = ({
  word,
  wordTranslate,
  questionTitleClass,
}) => {
  return (
    <div className={questionTitleClass} id="questionWord" title={wordTranslate}>
      {word}
    </div>
  );
};
