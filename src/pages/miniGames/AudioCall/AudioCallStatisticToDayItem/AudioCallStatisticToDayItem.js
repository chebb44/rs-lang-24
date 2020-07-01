import React from 'react';
import './AudioCallStatisticToDayItem.scss';
export const AudioCallStatisticToDayItem = ({ dayStat: { date, data } }) => {
  const bestResult = Math.max(...data);
  const amountAttempts = data.length;
  const title = `Результаты: ${data.join(', ')}`;
  return (
    <div className="audio-call-statistic-to-day__item" title={title}>
      {`${new Date(
        +date,
      ).toLocaleDateString()} вы играли ${amountAttempts} раз(а)! Лучший результат: ${bestResult} очков!`}
    </div>
  );
};
