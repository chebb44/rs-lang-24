import React from 'react';
import './AudioCallEnterBtn.scss';
import { ArrowRightSvg } from './assets/ArrowRightSvg';

export const AudioCallEnterBtn = ({ func, enterBtnClass }) => {
  const handleClick = (event) => {
    return func(event);
  };

  return (
    <button type="button" className={enterBtnClass} onClick={handleClick}>
      <span className="audio-call-enter-btn__text">не знаю</span>
      <span className="audio-call-enter-btn__arrow-right">
        <ArrowRightSvg />
      </span>
    </button>
  );
};
