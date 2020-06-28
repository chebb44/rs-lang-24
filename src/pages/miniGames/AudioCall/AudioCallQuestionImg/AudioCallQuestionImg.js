import React from 'react';
import './AudioCallQuestionImg.scss';
import london from '../../../../assets/img/blank.jpg';

export const AudioCallQuestionImg = () => {
  return (
    <div className="audio-call-question-image">
      <img src={london} alt="question" width="100%" height="100%" />
    </div>
  );
};
