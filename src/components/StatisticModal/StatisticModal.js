import React from 'react';

export const StatisticModal = ({ statistic }) => {
  const {
    endCards,
    correctAnswer,
    newWords,
    longestSeriesCorrectAnswer,
  } = statistic;

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Серия завершена</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
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
      </div>
    </div>
  );
};
