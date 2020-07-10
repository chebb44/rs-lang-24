import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from './../../../../App/constants/routes';
import { ResultBlock } from './SavannaResultBlock';
import './SavannaStatisticPage.scss';
export const SavannaStatistic = ({
  answerNumber,
  questionNumber,
  gameStat,
  sendDataToStatistic,
  isSended,
  setIsSended,
}) => {
  useEffect(() => {
    if (isSended === false) {
      setIsSended(true);
    } else if (isSended === true) {
      sendDataToStatistic({
        answerNumber: answerNumber,
        questionNumber: questionNumber,
      });
    }
  });
  return (
    <div className="Statistic-page">
      <h2 className="table">
        вы ответили на {`${parseInt((answerNumber / questionNumber) * 100)}% `}
        вопросов
      </h2>
      <Link to={routes.mainApp}>
        <button type="button" className="btn btn-warning">
          ОТЛИЧНО!
        </button>
      </Link>
      <h3>таблица результатов</h3>
      <ResultBlock gameStat={gameStat} />
    </div>
  );
};
