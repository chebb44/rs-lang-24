import React from 'react';
import './SprintStatisticItem.scss';
export const SprintStatisticItem = ({ dayStat: { date, data } }) => {
  const bestResult = Math.max(...data);
  const amountAttempts = data.length;
  const title = `Результаты: ${data.join(', ')}`;
  return (
    <div className="sprint-day-stat" title={title}>
      {`${date} вы играли ${amountAttempts} раз(а)! Лучший результат: ${bestResult} очков!`}
    </div>
  );
};
