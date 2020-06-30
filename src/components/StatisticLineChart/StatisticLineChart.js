import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';
import { statisticStateSelector } from '../../reducers/statisticReducer/statiscticReducer';
import { groupChartData } from '../../utilities/StatisticLineChart/groupChartData';
import { groupChartDataForTooltip } from '../../utilities/StatisticLineChart/groupChartDataForTooltip';
import { months } from './constants';
import './StatisticLineChart.scss';

export const StatisticLineChart = () => {
  const { learnedWordsForStatistic } = useSelector(statisticStateSelector);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const chartData = groupChartData(learnedWordsForStatistic);
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{ label: 'Изученные слова', data: chartData }],
        labels: months,
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            title: function () {
              return 'Изученные слова';
            },
            label: function (tooltipItem) {
              const labelData = groupChartDataForTooltip(
                learnedWordsForStatistic,
              );
              const label = labelData[tooltipItem.index];
              console.log(tooltipItem);
              return label;
            },
          },
        },
      },
    });
  });

  if (!learnedWordsForStatistic) return null;
  return (
    <div className="canvas-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
