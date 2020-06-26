import React, { useState, useEffect } from 'react';
import './Timer.scss';
import { useInterval } from '../../../../../utilities/sprint/useInterval';

export const Timer = ({ timeoutHandler, redirectToStartScreen }) => {
  const ROUND_TIME = 60;
  const END_GAME_DELAY = 3000;
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  useEffect(() => {
    setStartTime(Date.parse(new Date()));
  }, []);
  useInterval(() => {
    setTimeLeft(ROUND_TIME - (Date.parse(new Date()) - startTime) / 1000);
  }, 1000);
  useEffect(() => {
    if (timeLeft < 1) {
      timeoutHandler(false);
      setTimeout(() => {
        redirectToStartScreen();
      }, END_GAME_DELAY);
    }
  }, [redirectToStartScreen, timeLeft, timeoutHandler]);
  return <div className="timer">{timeLeft}</div>;
};
