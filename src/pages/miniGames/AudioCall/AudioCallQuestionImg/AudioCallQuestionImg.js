import React from 'react';
import './AudioCallQuestionImg.scss';

export const AudioCallQuestionImg = ({ image }) => {
  return (
    <div className="audio-call-question-image">
      <img
        src={`https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${image}`}
        alt="question"
        width="100%"
        height="100%"
      />
    </div>
  );
};
