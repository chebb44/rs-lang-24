import React, { useCallback, useState, useEffect } from 'react';
import './CardField.scss';
import { Series } from '../../components/Series/Series';
import { GameWord } from '../../components/GameWord/GameWord';
import { Status } from '../../components/Status/Status';
import { GameButtons } from '../../components/GameButtons/GameButtons';
import { GameNotification } from './../../components/GameNotification/GameNotification';
import { SPRINT_SHOW_RESULT_DELAY } from './../../constants';

export const CardField = ({ cards }) => {
  console.log('CardField -> cards', cards);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [series, setSeries] = useState(0);

  const showNext = useCallback(() => {
    setTimeout(
      () => setCurrentNumber(currentNumber + 1),
      SPRINT_SHOW_RESULT_DELAY,
    );
  }, [currentNumber]);

  const buttonsHandler = useCallback(
    (value) => () => {
      console.log(cards[currentNumber]);
      if (value === cards[currentNumber].correct) {
        console.log('yes');
        setSeries(series + 1);
        showNext();
      } else {
        console.log('no');
        setSeries(0);
        showNext();
      }
    },
    [currentNumber, cards, series, showNext],
  );

  return (
    <div>
      <GameNotification text="notification text" />
      <Series number={series} />
      <GameWord card={cards[currentNumber]} />
      <Status />
      <GameButtons clickHandler={buttonsHandler} />
    </div>
  );
};
