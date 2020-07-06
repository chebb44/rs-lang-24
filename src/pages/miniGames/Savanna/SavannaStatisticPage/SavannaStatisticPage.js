import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './../../../../App/constants/routes';
export const SavannaStatistic = ({ answerNumber, questionNumber }) => {
  return (
    <div className="Statistic-page">
      <div className="table">
        вы ответили на : {answerNumber} из {questionNumber} вопросов
      </div>
      <Link to={routes.mainApp}>
        <button type="button" className="btn btn-warning">
          ОТЛИЧНО!
        </button>
      </Link>
    </div>
  );
};
