import React from 'react';
import './QuizQuestionWordOrStar.scss';
import { QuizStarSvg } from './assets/QuizStarSvg';

export const QuizQuestionWordOrStar = ({ word }) => {
  const stars = word.split('').map((el, index) => {
    return (el = <QuizStarSvg key={index} />);
  });

  return (
    <div className="quiz-question-word">
      {stars.map((el, index) => {
        return (
          <p className="quiz-question_star__item" key={index}>
            {el}
          </p>
        );
      })}
    </div>
  );
};
