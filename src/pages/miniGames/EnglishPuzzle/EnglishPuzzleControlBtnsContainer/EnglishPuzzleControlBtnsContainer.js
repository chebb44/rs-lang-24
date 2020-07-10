import React from 'react';
import musicSvg from './assets/music.svg';
import photoSvg from './assets/photo.svg';
import translateSvg from './assets/translate.svg';
import volumeSvg from './assets/volume-1.svg';
import { EnglishPuzzleControlBtnItem } from '../EnglishPuzzleControlBtnItem/EnglishPuzzleControlBtnItem';
import './EnglishPuzzleControlBtnsContainer.scss';

export const EnglishPuzzleControlBtnsContainer = ({
  gameWord,
  setInputValue,
  setClassWordTranslate,
  playWordSoundValue,
  setPlayWordSoundValue,
  showTranslateWordValue,
  setShowTranslateWordValue,
  showFirstLetterValue,
  setShowFirstLetterValue,
}) => {
  const { word } = gameWord;

  const showTranslateWord = () => {
    setClassWordTranslate(
      'english-puzzle-question-container__word-translation english-puzzle-question-container__word-translation_visible',
    );
    setShowTranslateWordValue(!showTranslateWordValue);
  };

  const showFirstLetter = () => {
    setInputValue(word[0]);
    setShowFirstLetterValue(!showFirstLetterValue);
  };

  const btnControlList = [
    {
      title: 'Автовоспроизведение',
      icon: musicSvg,
      func: showTranslateWord,
      disabled: playWordSoundValue,
    },

    {
      title: 'Перевод',
      icon: translateSvg,
      func: showTranslateWord,
      disabled: showTranslateWordValue,
    },
    {
      title: 'Произношение',
      icon: volumeSvg,
      func: showFirstLetter,
      disabled: showFirstLetterValue,
    },
    {
      title: 'Фоновый рисунок',
      icon: photoSvg,
      func: showFirstLetter,
      disabled: showFirstLetterValue,
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
