import React from 'react';
import musicSvg from './assets/music.svg';
import photoSvg from './assets/photo.svg';
import translateSvg from './assets/translate.svg';
import volumeSvg from './assets/volume-1.svg';
import { EnglishPuzzleControlBtnItem } from '../EnglishPuzzleControlBtnItem/EnglishPuzzleControlBtnItem';
import './EnglishPuzzleControlBtnsContainer.scss';

export const EnglishPuzzleControlBtnsContainer = ({
  autoPlayWordSound,
  setAutoPlayWordSound,
  showTranslateWord,
  setShowTranslateWord,
  playWordSound,
  setPlayWordSound,
  showBackground,
  setShowBackground,
}) => {
  const autoPlay = () => {
    setAutoPlayWordSound(!autoPlayWordSound);
  };
  const translateWord = () => {
    setShowTranslateWord(!showTranslateWord);
  };
  const showIconPlayAudio = () => {
    setPlayWordSound(!playWordSound);
  };
  const showBg = () => {
    setShowBackground(!showBackground);
  };

  const btnControlList = [
    {
      title: 'Автовоспроизведение',
      icon: musicSvg,
      func: autoPlay,
      disabled: autoPlayWordSound,
    },

    {
      title: 'Перевод',
      icon: translateSvg,
      func: translateWord,
      disabled: showTranslateWord,
    },
    {
      title: 'Произношение',
      icon: volumeSvg,
      func: showIconPlayAudio,
      disabled: playWordSound,
    },
    {
      title: 'Фоновый рисунок',
      icon: photoSvg,
      func: showBg,
      disabled: showBackground,
    },
  ];

  return (
    <div className="english-puzzle-control-btns-container">
      {btnControlList.map((item, index) => {
        return <EnglishPuzzleControlBtnItem data={item} key={index} />;
      })}
    </div>
  );
};
