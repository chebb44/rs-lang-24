import React from 'react';
import { useSelector } from 'react-redux';
import { statisticStateSelector } from '../../reducers/statisticReducer/statiscticReducer';
import { StatisticPageView } from '../../components/StatisticPageView/StatisticPageView';

// import { dictionaryIcon } from './assets/dictionaryIcon';
import { headIcon } from './assets/headIcon';
import { learnIcon } from './assets/learnIcon';
// import { listenIcon } from './assets/listenIcon';
import { speackIcon } from './assets/speackIcon';
import { writeIcon } from './assets/writeIcon';

export const StatisticPage = () => {
  const statistic = useSelector(statisticStateSelector);

  const statisticItemList = [
    {
      text: 'Карточек завершено:',
      value: statistic.endCards,
      icon: learnIcon,
    },
    {
      text: 'Новых слов:',
      value: statistic.correctAnswer,
      icon: writeIcon,
    },
    {
      text: 'Правильные ответы:',
      value: statistic.newWords,
      icon: speackIcon,
    },
    {
      text: 'Самая длинная серия ответов:',
      value: statistic.longestSeriesCorrectAnswer,
      icon: headIcon,
    },
  ];

  return <StatisticPageView statisticItemList={statisticItemList} />;
};
