import React from 'react';
import './EnglishPuzzleEndGameStatisticModalItem.scss';
import { FILES_URL } from '../../../../utilities/network/networkConstants';
import { AudioStatisticItemSvg } from './assets/AudioStatisticItemSvg';

export const EnglishPuzzleEndGameStatisticModalItem = ({ item }) => {
  const { audioMeaning, textMeaning, textMeaningTranslate } = item;

  const playAudioClickHandler = () => {
    const audioWord = new Audio();
    audioWord.src = `${FILES_URL}${audioMeaning}`;
    audioWord.play();
  };

  const regexpTags = new RegExp(`<i>|<\\/i>`, 'g');
  let textWithoutTags = textMeaning.replace(regexpTags, '');

  return (
    <div className="english-puzzle-end-game-statistic-modal-item">
      <button
        className="english-puzzle-end-game-statistic-modal-item__audio"
        onClick={playAudioClickHandler}
        id="audioIcon"
      >
        <AudioStatisticItemSvg />
      </button>
      <span className="english-puzzle-end-game-statistic-modal-item__word">
        {textWithoutTags}
      </span>
      &nbsp;{'—'}&nbsp;
      <span className="english-puzzle-end-game-statistic-modal-item__translate">
        {textMeaningTranslate}
      </span>
    </div>
  );
};
