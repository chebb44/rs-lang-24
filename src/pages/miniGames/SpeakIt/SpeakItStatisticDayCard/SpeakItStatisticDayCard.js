import React from 'react';
import './SpeakItStatisticDayCard.scss';

const SpeakItStatisticDayCard = ({ dayStatistic }) => {
  return (
    <div className="speak-it-statistic__day-card">
      <div className="speak-it-statistic-card__title">
        <div className="speak-it-statistic__date">
          {new Date(dayStatistic.date).toLocaleDateString()}
        </div>
        <div className="speak-it-statistic__game-played">
          Всего игр: {dayStatistic.data.length}
        </div>
      </div>
      <div className="speak-it-statistic__results">
        {dayStatistic.data.map((result, idx) => (
          <StatisticsResult result={result} key={idx}/>
        ))}
      </div>
    </div>
  );
};

const StatisticsResult = ({ result }) => {
  return (
    <div className="statistic__result">
      Угадано:
      <div className="speak-it-stat_right-word">{result.right}</div>
      Нераспознанно:
      <div className="speak-it-stat_wrong-word">{result.wrong}</div>
    </div>
  );
};

export default SpeakItStatisticDayCard;
