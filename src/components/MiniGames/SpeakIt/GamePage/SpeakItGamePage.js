import React from 'react';
import './SpeakItGamePage.scss';
import blank from './../../../../assets/img/blank.jpg';

export const SpeakItGameScreen = function () {
  return (
    <div className="speak-it__game-screen">
      <div className="header">
      </div>
      <div className="game-score">
      </div>
      <div className="central-screen">
        <div className="central-screen__image">
          <img src={blank} alt="img"/>
        </div>
        <div className="translation__block">
          <i className="material-icons md-36 icon__mic">mic</i>
          <div className="central-screen__translation">
            Перевод тут
          </div>
        </div>
      </div>
      <div className="cards">

      </div>
      <div className="buttons">
        <button className="btn btn_speak-it btn_small button__reset active">
          Сброс
        </button>
        <button className="btn btn_speak-it btn_wide button__speak-please">
          SPEAK IT
        </button>
        <button className="btn btn_speak-it btn_small button__result">
          Результаты
        </button>
      </div>
    </div>
  );
};
