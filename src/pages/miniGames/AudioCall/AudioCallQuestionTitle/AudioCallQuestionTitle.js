import React from 'react';
import './AudioCallQuestionTitle.scss';

export const AudioCallQuestionTitle = ({ word, questionTitleClass }) => {
  return (
    <div className={questionTitleClass} id="questionWord">
      {word}
    </div>
  );
};
