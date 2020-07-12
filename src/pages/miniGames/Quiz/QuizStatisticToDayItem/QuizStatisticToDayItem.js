import React from 'react';
import './QuizStatisticToDayItem.scss';
import { MAX_WORDS_FOR_GAME } from '../constants';
import { getDateByString } from '../utilities';

export const QuizStatisticToDayItem = ({ dayStat: { date, data } }) => {
  const bestResult = Math.max(...data);
  const amountAttempts = data.length;
  const title = `Результаты: ${data.join(', ')}`;
  return (
    <div className="quiz-statistic-to-day__item" title={title}>
      {`${getDateByString(
        date,
      ).toLocaleDateString()} вы играли ${amountAttempts} раз(а)! Максимум ответов: ${bestResult}/${MAX_WORDS_FOR_GAME}`}
    </div>
  );
};
