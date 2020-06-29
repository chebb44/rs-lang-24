import React from 'react';

export const SavannaStatistic = () => {
  return (
    <div class="Statistic-page">
      <div className="table">
        вs ответили на :{' '}
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
