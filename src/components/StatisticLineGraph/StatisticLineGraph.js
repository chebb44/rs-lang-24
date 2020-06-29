import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { statisticStateSelector } from '../../reducers/statisticReducer/statiscticReducer';
import { drawGraph } from '../../utilities/statisticLineGraph/drawGraph';
import './StatisticLineGraph.scss';

export const StatisticLineGraph = () => {
  const { learnedWordsForStatistic } = useSelector(statisticStateSelector);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawGraph(canvas, ctx, learnedWordsForStatistic);
    console.log(learnedWordsForStatistic);
  });

  if (!learnedWordsForStatistic) return null;
  return <canvas ref={canvasRef} width="500px" height="300px"></canvas>;
};
