import React from 'react';
import './AudioCallAnswerBtn.scss';
import { AudioCallSuccessSvg } from './assets/AudioCallSuccessSvg';

export const AudioCallAnswerBtn = ({ item }) => {
  const { word, position, checkFunc } = item;

  const handleClick = (event) => {
    return checkFunc(event);
  };

  return (
    <button
      value={word}
      type="button"
      className="audio-call-answer-btn btn "
      onClick={handleClick}
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
