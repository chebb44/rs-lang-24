import React from 'react';
import StatisticTextItem from '../StatisticTextItem/StatisticTextItem';
import './StatisticPageView.scss';
// import { dictionaryIcon } from './assets/dictionaryIcon';
import { headIcon } from './assets/headIcon';
import { learnIcon } from './assets/learnIcon';
// import { listenIcon } from './assets/listenIcon';
import { speackIcon } from './assets/speackIcon';
import { writeIcon } from './assets/writeIcon';

export const StatisticPageView = ({ statistic }) => {
  const {
    endCards,
    correctAnswer,
    newWords,
    longestSeriesCorrectAnswer,
  } = statistic;

  return (
    <div className="statistic-wrapper">
      <div>
        <div className="statistic-today">
          <h5 className="statistic-today__title">Сегодня</h5>
          <StatisticTextItem
            text="Карточек завершено:"
            value={endCards}
            icon={learnIcon}
          />
          <StatisticTextItem
            text="Новых слов:"
            value={correctAnswer}
            icon={writeIcon}
          />
          <StatisticTextItem
            text="Правильные ответы:"
            value={newWords}
            icon={speackIcon}
          />
          <StatisticTextItem
            text="Самая длинная серия ответов:"
            value={longestSeriesCorrectAnswer}
            icon={headIcon}
          />
        </div>
      </div>
      <div className="statistic-full">
        <h5 className="statistic-today__title">За всё время</h5>
      </div>
    </div>
  );
};
