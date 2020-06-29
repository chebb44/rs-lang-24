import React from 'react';

export const SavannaStatistic = () => {
  return (
    <div className="Statistic-page">
      <div className="table">
        вы ответили на :{' '}
        {localStorage.getItem('SavannaStatisticCorrectAnswers')} из{' '}
        {localStorage.getItem('SavannaStatisticAnswers')} вопросов
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
