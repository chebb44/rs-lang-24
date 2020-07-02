import React from 'react';

export const SavannaStatistic = ({ answerNumber, questionNumber }) => {
  return (
    <div className="Statistic-page">
      <div className="table">
        вы ответили на : {answerNumber} из {questionNumber} вопросов
      </div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => {
          document.location.href = '/app';
        }}
      >
        ОТЛИЧНО!
      </button>
    </div>
  );
};
