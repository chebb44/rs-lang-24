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
  const { shortStatistic } = useSelector(statisticStateSelector);

  const statisticItemList = [
    {
      text: 'Новые слова:',
      value: shortStatistic.newWordsAmount,
      icon: writeIcon,
    },
    {
      text: 'Завершенный карточки:',
      value: shortStatistic.cardsAmount,
      icon: learnIcon,
    },
    {
      text: 'Правильные ответы:',
      value: `${shortStatistic.correctAnswersPercent}%`,
      icon: speackIcon,
    },
    {
      text: 'Самая длинная серия ответов:',
      value: shortStatistic.longestCorrectAnswersSeries,
      icon: headIcon,
    },
  ];

  return <StatisticPageView statisticItemList={statisticItemList} />;
};
