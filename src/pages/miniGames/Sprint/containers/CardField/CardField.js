import React, { useCallback, useState } from 'react';
import './CardField.scss';
import { Series } from '../../components/Series/Series';
import { GameWord } from '../../components/GameWord/GameWord';
import { Status } from '../../components/Status/Status';
import { GameButtons } from '../../components/GameButtons/GameButtons';
import { GameNotification } from '../../components/GameNotification/GameNotification';
import { SPRINT_SHOW_RESULT_DELAY } from '../../constants';

export const CardField = ({ cards, score, setScore }) => {
  console.log(cards);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [series, setSeries] = useState(0);
  const [notificationText, setNotificationText] = useState('notification');
  const showNext = useCallback(
    ({ success }) => {
      if (success) {
        const bonus = Math.min(10 * Math.pow(2, series), 80);
        console.log(bonus);
        setNotificationText(`+${bonus} баллов!`);
        setScore(score + bonus);
      } else {
        setNotificationText(`Ответ неверный!`);
      }
      setTimeout(() => {
        setNotificationText('');
        setCurrentNumber(currentNumber + 1);
      }, SPRINT_SHOW_RESULT_DELAY);
    },
    [currentNumber, score, series, setScore],
  );
  const buttonsHandler = useCallback(
    (value) => () => {
      console.log(cards[currentNumber]);
      if (value === cards[currentNumber].correct) {
        console.log('yes');
        setSeries(series + 1);
        showNext({ success: true });
      } else {
        console.log('no');
        setSeries(0);
        showNext({ success: false });
      }
    },
    [cards, currentNumber, series, showNext],
  );
  return (
    <div>
      <GameNotification text={notificationText} />
      <Series number={series} />
      <GameWord card={cards[currentNumber]} />
      <Status />
      <GameButtons clickHandler={buttonsHandler} />
    </div>
  );
};
