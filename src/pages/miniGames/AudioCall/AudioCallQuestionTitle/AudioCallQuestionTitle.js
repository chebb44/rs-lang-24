import React from 'react';
import './AudioCallQuestionTitle.scss';

export const AudioCallQuestionTitle = ({ word }) => {
  return (
    <div
      className="audio-call-question-title audio-call-question-title_visible"
      value={word}
    >
      {word}
    </div>
  );
};
