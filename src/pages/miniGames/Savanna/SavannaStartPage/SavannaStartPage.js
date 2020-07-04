import React from 'react';
import london from '../../../../assets/img/england_PNG723.png';
import { Figure } from '../SavannaAssets/svg/figure';
import './SavannaStartPage.scss';

export const SavannaStart = ({ setSavannaPage, setDifficulty }) => {
  const openPlayGround = () => {
    setSavannaPage('playPage');
    setDifficulty(
      parseInt(document.getElementById('formControlRange').value) + 2,
    );
  };
  return (
    <div className="start-page">
      <Figure />
      <div className="play-page__flipping-container">
        <h1 className="color-rslang">Savanna</h1>
        <p className="color-rslang">
          приготовьтесь выбирать перевод слова из нескольких вариантов на время
        </p>
        <form>
          <button
            type="submit"
            className="btn btn-lg btn-rslang"
            onClick={openPlayGround}
          >
            СТАРТ
          </button>
          <label className="color-rslang" htmlFor="formControlRange">
            <input
              min="0"
              max="4"
              step="1"
              type="range"
              className="form-control-range"
              id="formControlRange"
            />
            Сложность
          </label>
        </form>
      </div>
      <img className="footer_image" src={london} alt="london" />
    </div>
  );
};
