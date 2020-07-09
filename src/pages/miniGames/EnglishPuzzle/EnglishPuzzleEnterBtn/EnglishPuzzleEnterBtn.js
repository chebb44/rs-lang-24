import React from 'react';
import './EnglishPuzzleEnterBtn.scss';
import { ArrowRightSvg } from './assets/ArrowRightSvg';

export const EnglishPuzzleEnterBtn = ({ func, enterBtnClass }) => {
  const handleClick = (event) => {
    return func(event);
  };

  return (
    <button type="button" className={enterBtnClass} onClick={handleClick}>
      <span className="englishPuzzle-enter-btn__text">не знаю</span>
      <span className="englishPuzzle-enter-btn__arrow-right">
        <ArrowRightSvg />
      </span>
    </button>
  );
};
