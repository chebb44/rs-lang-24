import React from 'react';
import './AudioCallQuestionImg.scss';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

export const AudioCallQuestionImg = ({ image }) => {
  return (
    <div className="audio-call-question-image">
      <img
        src={`${FILES_URL}${image}`}
        alt="question"
        width="100%"
        height="100%"
      />
    </div>
  );
};
