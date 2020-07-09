import React from 'react';
import musicSvg from './assets/music.svg';
import textSvg from './assets/text.svg';
import translateSvg from './assets/translate.svg';
import { QuizHelpBtnItem } from '../QuizHelpBtnItem/QuizHelpBtnItem';
import './QuizHelpBtnsContainer.scss';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

export const QuizHelpBtnsContainer = ({
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
      'quiz-question-container__word-translation quiz-question-container__word-translation_visible',
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
    <div className="quiz-help-btns-container">
      {btnHelpList.map((item, index) => {
        return <QuizHelpBtnItem data={item} key={index} />;
      })}
    </div>
  );
};
