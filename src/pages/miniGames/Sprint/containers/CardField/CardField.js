import React, { useCallback, useState, useEffect } from 'react';
import './CardField.scss';
import { Series } from '../../components/Series/Series';
import { GameWord } from '../../components/GameWord/GameWord';
import { GameButtons } from '../../components/GameButtons/GameButtons';
import { GameNotification } from '../../components/GameNotification/GameNotification';
import { SPRINT_SHOW_RESULT_DELAY } from '../../constants';

export const CardField = ({ cards, score, setScore, timeoutHandler }) => {
  const [buttonEnable, setButtonEnable] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [series, setSeries] = useState(0);
  const [notificationText, setNotificationText] = useState('');
  const showNext = useCallback(
    ({ success }) => {
      if (success) {
        const bonus = Math.min(10 * Math.pow(2, series), 80);
        setNotificationText(`+${bonus} баллов!`);
        setScore(score + bonus);
      } else {
        setNotificationText(`Ответ неверный!`);
      }
      const timeoutId = setTimeout(() => {
        setNotificationText('');
        setCurrentNumber(currentNumber + 1);
        setButtonEnable(true);
      }, SPRINT_SHOW_RESULT_DELAY);
      setTimeoutId(timeoutId);
    },
    [currentNumber, score, series, setScore],
  );
  const buttonsHandler = useCallback(
    (value) => () => {
      if (buttonEnable) {
        setButtonEnable(false);
        if (value === cards[currentNumber].correct) {
          setSeries(series + 1);
          showNext({ success: true });
        } else {
          setSeries(0);
          showNext({ success: false });
        }
      }
    },
    [cards, currentNumber, series, showNext, buttonEnable],
  );
  useEffect(() => {
    if (currentNumber >= cards.length - 1) {
      timeoutHandler();
    }
  }, [currentNumber, cards, timeoutHandler]);
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);
  return (
    <div className="sprint-cards-field">
      <GameNotification text={notificationText} />
      <Series number={series} />
      <GameWord card={cards[currentNumber]} />
      <GameButtons clickHandler={buttonsHandler} />
    </div>
  );
};
