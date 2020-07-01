import React from 'react';
import './AudioCallStartScreen.scss';
import london from '../../../../assets/img/england_PNG72.png';
import { AudioCallStatisticToDay } from '../AudioCallStatisticToDay/AudioCallStatisticToDay';

export const AudioCallStartScreen = function ({
  startGameHandler,
  visibleStatistic,
  visibleStatisticGame,
  audioCallDayStat,
}) {
  return (
    <div className="audio-call-start-screen">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M38.1,-49.9C47.3,-37.7,51.2,-23.7,53.8,-9.4C56.4,4.8,57.6,19.4,52.6,32.6C47.6,45.8,36.4,57.6,21.1,67.1C5.8,76.6,-13.7,83.9,-28.9,78.7C-44.1,73.5,-55,55.8,-62.2,38.3C-69.3,20.9,-72.7,3.7,-68.4,-10.6C-64.2,-24.9,-52.2,-36.4,-39.5,-48.1C-26.8,-59.7,-13.4,-71.4,0.5,-72C14.5,-72.6,28.9,-62.2,38.1,-49.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <h1 className="audio-call-start-screen__title">АУДИОВЫЗОВ</h1>
      <p className="audio-call-start-screen__description">
        Выберите правильный перевод слова после того, как оно произнесено
      </p>
      <p className="audio-call-start-screen__description">
        Чтобы начать нажмите СТАРТ
      </p>
      <div>
        <button
          className="btn audio-call-start-screen__button audio-call-start-screen__button_start"
          onClick={startGameHandler}
        >
          Старт
        </button>
        <button
          className="btn audio-call-start-screen__button audio-call-start-screen__button_settings"
          onClick={visibleStatistic}
        >
          Статистика
        </button>
      </div>
      <img
        className="audio-call-start-screen__footer_image"
        src={london}
        alt="london"
      />
      <AudioCallStatisticToDay
        visibleStatisticGame={visibleStatisticGame}
        visibleStatistic={visibleStatistic}
        audioCallDayStat={audioCallDayStat}
      />
    </div>
  );
};
