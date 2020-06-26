// 2 state
// - i don`t know -- 'audio-call-enter-btn' --
// - --> -- 'audio-call-enter-btn_next' --
import React from 'react';
import './AudioCallEnterBtn.scss';
import { ArrowRightSvg } from './assets/ArrowRightSvg';

export const AudioCallEnterBtn = ({ func }) => {
  return (
    <button
      type="button"
      className="audio-call-enter-btn audio-call-enter-btn_next"
      onClick={func}
    >
      <span className="audio-call-enter-btn__text">не знаю</span>
      <span className="audio-call-enter-btn__arrow-right">
        <ArrowRightSvg />
      </span>
    </button>
  );
};
