import React, { useCallback, useState, useEffect } from 'react';
import './CardField.scss';
import { Series } from '../../components/Series/Series';
import { GameWord } from '../../components/GameWord/GameWord';
import { GameButtons } from '../../components/GameButtons/GameButtons';
import { GameNotification } from '../../components/GameNotification/GameNotification';
import { SPRINT_SHOW_RESULT_DELAY } from '../../constants';
import { useDispatch } from 'react-redux';
import { actionMarkWord } from '../../../../../store/actionsForSaga';
import { NEXT_TRAIN_WORD } from './../../../../../sagas/constants';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const CardField = ({
  cards,
  score,
  setScore,
  redirectToStartScreen,
  endGameHandler,
}) => {
  const [buttonEnable, setButtonEnable] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [series, setSeries] = useState(0);
  const [notificationText, setNotificationText] = useState('');
  const dispatch = useDispatch();
  const showNext = useCallback(
    ({ success }) => {
      if (success) {
        const bonus = Math.min(10 * Math.pow(2, series), 80);
        setNotificationText(`+${bonus} баллов!`);
        setScore(score + bonus);
      } else {
        dispatch(
          actionMarkWord({
            wordId: cards[currentNumber]._id,
            difficulty: NEXT_TRAIN_WORD,
          }),
        );
        setNotificationText(`Ответ неверный!`);
      }
      const timeoutId = setTimeout(() => {
        setNotificationText('');
        setCurrentNumber(currentNumber + 1);
        setButtonEnable(true);
      }, SPRINT_SHOW_RESULT_DELAY);
      setTimeoutId(timeoutId);
    },
    [currentNumber, score, series, setScore, dispatch, cards],
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
      endGameHandler();
    }
    if (cards.length < 5) {
      redirectToStartScreen();
    }
  }, [currentNumber, cards, redirectToStartScreen, endGameHandler]);
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={'sprint-fade'}
      timeout={400}
    >
      <div className="sprint-cards-field">
        <GameNotification text={notificationText} />
        <Series number={series} />
        <TransitionGroup className="words-animation-container">
          <CSSTransition
            key={currentNumber}
            appear={true}
            timeout={400}
            classNames="word"
          >
            <GameWord card={cards[currentNumber]} />
          </CSSTransition>
        </TransitionGroup>
        <GameButtons clickHandler={buttonsHandler} />
      </div>
    </CSSTransition>
  );
};
