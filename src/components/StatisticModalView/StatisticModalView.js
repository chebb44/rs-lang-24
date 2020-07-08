import React from 'react';
import { SuccessSvg } from './assets/success.js';
import './StatisticModalView.scss';

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
          <p className="border-bottom d-flex justify-content-between mb-3">
            Новые слова&nbsp;<span>{newWordsAmount}</span>
          </p>
          <p className="border-bottom d-flex justify-content-between mb-3">
            Завершенный карточки&nbsp;<span>{cardsAmount}</span>
          </p>
          <p className="border-bottom d-flex justify-content-between mb-3">
            Правильные ответы по новым словам&nbsp;
            <span>{correctAnswersPercent}%</span>
          </p>
          <p className="border-bottom d-flex justify-content-between mb-3">
            Самая длинная серия ответов&nbsp;
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
