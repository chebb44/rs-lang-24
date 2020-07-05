import React from 'react';
import './QuizQuestionImg.scss';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

export const QuizQuestionImg = ({ image }) => {
  return (
    <div className="quiz-question-image">
      <img
        src={`${FILES_URL}${image}`}
        alt="question"
        width="100%"
        height="100%"
      />
    </div>
  );
};
