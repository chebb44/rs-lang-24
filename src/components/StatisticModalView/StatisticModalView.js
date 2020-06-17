import React from 'react';
import { SuccessSvg } from './assets/success.js';
import './StatisticModal.scss';

const StatisticModal = ({ statistic, hideStatisticModal }) => {
  const {
    endCards,
    correctAnswer,
    newWords,
    longestSeriesCorrectAnswer,
  } = statistic;

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content modal_color">
        <div className="modal-header modal-header__statistic d-block">
          <div>
            <SuccessSvg />
          </div>
          <h5 className="modal-title text-center">Серия завершена</h5>
        </div>
        <div className="modal-body text-left">
          <p className="border-bottom d-flex justify-content-between">
            Карточек завершено:&nbsp;<span>{endCards}</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Правильные ответы:&nbsp;<span>{correctAnswer}%</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Новые слова:&nbsp;<span>{newWords}</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Самая длинная серия ответов:&nbsp;
            <span>{longestSeriesCorrectAnswer}</span>
          </p>
        </div>
        <button
          type="button"
          className="btn button_continue"
          onClick={hideStatisticModal}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default StatisticModal;
