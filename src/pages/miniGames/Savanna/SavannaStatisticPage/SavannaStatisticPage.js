import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './../../../../App/constants/routes';

export const SavannaStatistic = () => {
  return (
    <div className="Statistic-page">
      <div className="table">
        вы ответили на :{' '}
        {localStorage.getItem('SavannaStatisticCorrectAnswers')} из{' '}
        {localStorage.getItem('SavannaStatisticAnswers')} вопросов
      </div>
      <Link to={routes.mainApp}>
        <button type="button" className="btn btn-warning">
          ОТЛИЧНО!
        </button>
      </Link>
    </div>
  );
};
