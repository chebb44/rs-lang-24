import React from 'react';
import musicSvg from './assets/music.svg';
import textSvg from './assets/text.svg';
import translateSvg from './assets/translate.svg';
import { EnglishPuzzleHelpBtnItem } from '../EnglishPuzzleHelpBtnItem/EnglishPuzzleHelpBtnItem';
import './EnglishPuzzleHelpBtnsContainer.scss';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

export const EnglishPuzzleHelpBtnsContainer = ({
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
  const { word, audio } = gameWord;

  const playWordSound = () => {
    const audioPlay = new Audio();
    audioPlay.src = `${FILES_URL}${audio}`;
    audioPlay.play();
    setPlayWordSoundValue(!playWordSoundValue);
  };

  const showTranslateWord = () => {
    setClassWordTranslate(
      'englishPuzzle-question-container__word-translation englishPuzzle-question-container__word-translation_visible',
    );
    setShowTranslateWordValue(!showTranslateWordValue);
  };

  const showFirstLetter = () => {
    setInputValue(word[0]);
    setShowFirstLetterValue(!showFirstLetterValue);
  };

  const btnHelpList = [
    {
      title: 'Воспроизвести слово',
      icon: musicSvg,
      func: playWordSound,
      disabled: playWordSoundValue,
    },

    {
      title: 'Показать перевод слова',
      icon: translateSvg,
      func: showTranslateWord,
      disabled: showTranslateWordValue,
    },
    {
      title: 'Показать первую букву',
      icon: textSvg,
      func: showFirstLetter,
      disabled: showFirstLetterValue,
    },
  ];

  return (
    <div className="englishPuzzle-help-btns-container">
      {btnHelpList.map((item, index) => {
        return <EnglishPuzzleHelpBtnItem data={item} key={index} />;
      })}
    </div>
  );
};
