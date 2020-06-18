import React from 'react';
import { useSelector } from 'react-redux';
import { statisticStateSelector } from '../../reducers/statisticReducer/statiscticReducer';
import { StatisticPageView } from '../../components/StatisticPageView/StatisticPageView';

export const StatisticPage = () => {
  const statistic = useSelector(statisticStateSelector);

  return <StatisticPageView statistic={statistic} />;
};
