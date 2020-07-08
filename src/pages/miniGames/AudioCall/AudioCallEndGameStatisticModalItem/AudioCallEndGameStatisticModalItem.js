import React from 'react';
import './AudioCallEndGameStatisticModalItem.scss';
import { FILES_URL } from '../../../../utilities/network/networkConstants';
import { AudioStatisticItemSvg } from './assets/AudioStatisticItemSvg';

export const AudioCallEndGameStatisticModalItem = ({ item }) => {
  const { word, audio, wordTranslate } = item;

  const playAudioClickHandler = () => {
    const audioWord = new Audio();
    audioWord.src = `${FILES_URL}${audio}`;
    audioWord.play();
  };

  return (
    <div className="audio-call-end-game-statistic-modal-item">
      <button
        className="audio-call-end-game-statistic-modal-item__audio"
        onClick={playAudioClickHandler}
        id="audioIcon"
      >
        <AudioStatisticItemSvg />
      </button>
      <span className="audio-call-end-game-statistic-modal-item__word">
        {word}
      </span>
      &nbsp;{'—'}&nbsp;
      <span className="audio-call-end-game-statistic-modal-item__translate">
        {wordTranslate}
      </span>
    </div>
  );
};
