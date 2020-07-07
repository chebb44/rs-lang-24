import React from 'react';
import musicSvg from './assets/music.svg';
import textSvg from './assets/text.svg';
import translateSvg from './assets/translate.svg';
import { QuizHelpBtnItem } from '../QuizHelpBtnItem/QuizHelpBtnItem';
import './QuizHelpBtnsContainer.scss';

export const QuizHelpBtnsContainer = ({ word }) => {
  const playWordSound = () => {};
  const showTranslateWord = () => {};
  const showFirstLetter = () => {};

  const btnHelpList = [
    {
      title: 'Воспроизвести слово',
      icon: musicSvg,
      func: playWordSound,
    },

    {
      title: 'Показать перевод слова',
      icon: translateSvg,
      func: showTranslateWord,
    },
    {
      title: 'Показать первую букву',
      icon: textSvg,
      func: showFirstLetter,
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
