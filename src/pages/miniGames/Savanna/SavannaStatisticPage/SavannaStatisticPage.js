import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from './../../../../App/constants/routes';
export const SavannaStatistic = ({ answerNumber, questionNumber, gameStat, sendDataToStatistic, isSended, setIsSended }) => {
  useEffect(()=>{
    if(isSended == false){
      setIsSended(true);
    } else if (isSended==true) {
      sendDataToStatistic({answerNumber: answerNumber, questionNumber: questionNumber });
    }
  })
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
