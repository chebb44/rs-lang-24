import React, { useState, useEffect } from 'react';
import './Timer.scss';
import { useInterval } from '../../../../../utilities/sprint/useInterval';

export const Timer = () => {
  const ROUND_TIME = 60;
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  useEffect(() => {
    setStartTime(Date.parse(new Date()));
  }, []);
  useInterval(() => {
    setTimeLeft(ROUND_TIME - (Date.parse(new Date()) - startTime) / 1000);
  }, 1000);
  return <div className="timer">{timeLeft}</div>;
};
