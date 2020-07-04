import React from 'react';
import './SpeakItStatistic.scss';
import SpeakItStatisticDayCard from '../SpeakItStatisticDayCard/SpeakItStatisticDayCard';

const SpeakItStatistic = ({ gameStat, onCloseStatistic }) => {
  return (
    <div className="speak-it-statistic__wrapper">
      <div className="speak-it-statistic__window">
        <p className="speak-it-statistic_title">Статистика в игре Speak It</p>
        <div className="speak-it-statistic_cards">
          {gameStat.map((dayStatistic, idx) => (
            <SpeakItStatisticDayCard dayStatistic={dayStatistic} key={idx} />
          ))}
        </div>
        <button
          className="btn btn_speak-it-statistic"
          onClick={onCloseStatistic}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default SpeakItStatistic;
