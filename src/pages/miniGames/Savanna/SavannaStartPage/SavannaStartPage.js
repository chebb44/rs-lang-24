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
    <div className="Savanna_start-page">
      <Figure />
      <div className="Savanna_play-page__flipping-container">
        <h1 className="Savanna_color-rslang">Savanna</h1>
        <p className="Savanna_color-rslang">
          приготовьтесь выбирать перевод слова из нескольких вариантов на время
        </p>
        <form>
          <button
            type="submit"
            className="btn btn-lg Savanna_btn-rslang"
            onClick={openPlayGround}
          >
            СТАРТ
          </button>
          <label className="Savanna_color-rslang" htmlFor="formControlRange">
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
      <img className="Savanna_footer_image" src={london} alt="london" />
    </div>
  );
};
