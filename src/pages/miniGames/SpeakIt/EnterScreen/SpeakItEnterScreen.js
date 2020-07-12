import React from 'react';
import './SpeakItEnterScreen.scss';
import london from '../../../../assets/img/england_PNG723.png';

export const SpeakItEnterScreen = function ({ setSpeakItScreen }) {
  return (
    <div className="enter-screen">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M38.1,-49.9C47.3,-37.7,51.2,-23.7,53.8,-9.4C56.4,4.8,57.6,19.4,52.6,32.6C47.6,45.8,36.4,57.6,21.1,67.1C5.8,76.6,-13.7,83.9,-28.9,78.7C-44.1,73.5,-55,55.8,-62.2,38.3C-69.3,20.9,-72.7,3.7,-68.4,-10.6C-64.2,-24.9,-52.2,-36.4,-39.5,-48.1C-26.8,-59.7,-13.4,-71.4,0.5,-72C14.5,-72.6,28.9,-62.2,38.1,-49.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <h1 className="enter-screen__title">SPEAKIT</h1>
      <li>
        <ul>
          <p className="enter-screen__description">
            Мини-игра для тренировки правильного произношения английских слов
          </p>
        </ul>
        <ul>
          <p className="enter-screen__description">
            В режиме тренировки нажмите на слово, будет показан перевод
          </p>
        </ul>
        <ul>
          <p className="enter-screen__description">
            Для перехода в режим игры нажмите кнопку SPEAKIT и говорите в
            микрофон
          </p>
        </ul>
        <ul>
          <p className="enter-screen__description">
            Для начала миниигры нажмите СТАРТ
          </p>
        </ul>
      </li>
      <button
        className="btn enter-screen__button"
        onClick={() => setSpeakItScreen('gamePage')}
      >
        Старт
      </button>
      <img className="footer_image" src={london} alt="london" />
    </div>
  );
};
