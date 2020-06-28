// 5 state :
// - default -- 'audio-call-answer-btn' --
// - disabled (visible number) -- 'audio-call-answer-btn_disabled' --
// - false --'audio-call-answer-btn_false' --
// - true -- 'audio-call-answer-btn_true' -- , -- 'audio-call-answer-btn_true-after-false' -- it also default
import React from 'react';
import './AudioCallAnswerBtn.scss';
import { AudioCallSuccessSvg } from './assets/AudioCallSuccessSvg';

export const AudioCallAnswerBtn = ({ item }) => {
  const { word, position } = item;

  // const handleClick = (event) => {
  //   if (event.target.classList.contains('btn') && answer === question) {
  //     return event.target.classList.add('btn_true');
  //   }
  //   if (event.target.classList.contains('btn') && answer !== question) {
  //     return event.target.classList.add('btn_false(disabled)');
  //   }
  // };

  return (
    <button
      type="button"
      className="audio-call-answer-btn "
      //onClick={handleClick}
    >
      <span className="audio-call-answer-btn__position">
        {position}
        <span className="audio-call-answer-btn__position_success">
          <AudioCallSuccessSvg />
        </span>
      </span>{' '}
      <span className="audio-call-answer-btn__text">{word}</span>
    </button>
  );
};
