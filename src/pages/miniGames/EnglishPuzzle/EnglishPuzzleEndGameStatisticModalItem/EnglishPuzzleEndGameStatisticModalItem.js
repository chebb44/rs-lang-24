import React from 'react';
import './EnglishPuzzleEndGameStatisticModalItem.scss';
import { FILES_URL } from '../../../../utilities/network/networkConstants';
import { AudioStatisticItemSvg } from './assets/AudioStatisticItemSvg';

export const EnglishPuzzleEndGameStatisticModalItem = ({ item }) => {
  const { word, audio, wordTranslate } = item;

  const playAudioClickHandler = () => {
    const audioWord = new Audio();
    audioWord.src = `${FILES_URL}${audio}`;
    audioWord.play();
  };

  return (
    <div className="englishPuzzle-end-game-statistic-modal-item">
      <button
        className="englishPuzzle-end-game-statistic-modal-item__audio"
        onClick={playAudioClickHandler}
        id="audioIcon"
      >
        <AudioStatisticItemSvg />
      </button>
      <span className="englishPuzzle-end-game-statistic-modal-item__word">{word}</span>
      &nbsp;{'—'}&nbsp;
      <span className="englishPuzzle-end-game-statistic-modal-item__translate">
        {wordTranslate}
      </span>
    </div>
  );
};
