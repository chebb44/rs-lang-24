import React from 'react';
import './QuizEnterBtn.scss';
import { ArrowRightSvg } from './assets/ArrowRightSvg';

export const QuizEnterBtn = ({ func, enterBtnClass }) => {
  const handleClick = (event) => {
    return func(event);
  };

  return (
    <button type="button" className={enterBtnClass} onClick={handleClick}>
      <span className="quiz-enter-btn__text">не знаю</span>
      <span className="quiz-enter-btn__arrow-right">
        <ArrowRightSvg />
      </span>
    </button>
  );
};
