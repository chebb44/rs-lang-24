import React from 'react';
import './AudioCallQuestionTitle.scss';

export const AudioCallQuestionTitle = ({
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
