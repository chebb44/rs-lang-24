import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';
import { statisticStateSelector } from '../../reducers/statisticReducer/statiscticReducer';
//import { drawGraph } from '../../utilities/StatisticLineChart/drawGraph';
import { groupChartData } from '../../utilities/StatisticLineChart/groupChartData';
import { months } from './constants';
import './StatisticLineChart.scss';

export const StatisticLineChart = () => {
  const { learnedWordsForStatistic } = useSelector(statisticStateSelector);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    //drawGraph(canvas, ctx, learnedWordsForStatistic);
    const chartData = groupChartData(learnedWordsForStatistic);
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{ label: 'Изученных слов', data: chartData }],
        labels: months,
      },
      options: {
        maintainAspectRatio: false,
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
