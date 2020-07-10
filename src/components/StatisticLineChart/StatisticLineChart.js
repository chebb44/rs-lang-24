import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';
import { statisticStateSelector } from '../../reducers/statisticReducer/statiscticReducer';
import { groupChartData } from '../../utilities/StatisticLineChart/groupChartData';
import { groupChartDataForTooltip } from '../../utilities/StatisticLineChart/groupChartDataForTooltip';
import { months } from './constants';
import { checkIsObjectEmpty } from '../../utilities/checkIsObjectEmpty';
import './StatisticLineChart.scss';

export const StatisticLineChart = () => {
  const { learnedWords } = useSelector(statisticStateSelector);
  const canvasRef = useRef(null);
  const isLearnedWordsEmpty = checkIsObjectEmpty(learnedWords);

  useEffect(() => {
    if (!isLearnedWordsEmpty) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const chartData = groupChartData(learnedWords);
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
                const labelData = groupChartDataForTooltip(learnedWords);
                const label = labelData[tooltipItem.index];
                return label;
              },
            },
          },
        },
      });
    }
  });

  if (isLearnedWordsEmpty) return null;
  return (
    <div className="canvas-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
