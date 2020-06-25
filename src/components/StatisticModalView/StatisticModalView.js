import React from 'react';
import { SuccessSvg } from './assets/success.js';
import './StatisticModal.scss';

export const StatisticModalView = ({ statistic, hideStatisticModal }) => {
  const {
    cardsAmount,
    correctAnswersPercent,
    newWordsAmount,
    longestCorrectAnswersSeries,
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
            Карточек завершено:&nbsp;<span>{cardsAmount}</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Правильные ответы:&nbsp;<span>{correctAnswersPercent}%</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Новые слова:&nbsp;<span>{newWordsAmount}</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Самая длинная серия ответов:&nbsp;
            <span>{longestCorrectAnswersSeries}</span>
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
