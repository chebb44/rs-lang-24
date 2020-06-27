import React, { useEffect, useState, useCallback } from 'react';
import { Timer } from '../../components/Timer/Timer';
import { Score } from '../../components/Score/Score';
import './SprintMain.scss';
import { CardField } from '../CardField/CardField';
import { learnCardsSelector } from '../../../../../reducers/learnCards/learnCardsReducer';
import { useSelector, useDispatch } from 'react-redux';
import { shuffleCards } from '../../../../../utilities/sprint/shuffleCards';
import { StartScreen } from '../../components/StartScreen/StartScreen';
import { EndGame } from './../../components/EndGame/EndGame';
import { actionSprintSendGameResult } from '../../../../../reducers/miniGamesStats/miniGamesStatsActions';

export const SprintMain = () => {
  const cards = useSelector(learnCardsSelector);
  const [isStartScreen, setIsStartScreen] = useState(true);
  const [isStillTime, setIsStillTime] = useState(true);
  const [score, setScore] = useState(0);
  const [gameCards, setGameCards] = useState(cards);
  const dispatch = useDispatch();
  useEffect(() => {
    const { shuffledCards } = shuffleCards({ cards });
    setGameCards(shuffledCards);
  }, [cards]);
  const startGameHandler = useCallback(() => {
    setIsStartScreen(false);
  }, []);
  const redirectToStartScreen = useCallback(() => {
    dispatch(
      actionSprintSendGameResult({
        date: new Date().toLocaleDateString(),
        result: score,
      }),
    );
    setIsStartScreen(true);
    setIsStillTime(true);
    setScore(0);
  }, [dispatch, score]);
  const timeoutHandler = useCallback((val) => {
    setIsStillTime(val);
  }, []);
  return (
    <div className="sprint-main-wrapper">
      {!isStartScreen ? (
        isStillTime ? (
          <div className="sprint-content-wrapper">
            <Score score={score} />
            <Timer
              timeoutHandler={timeoutHandler}
              redirectToStartScreen={redirectToStartScreen}
            />
            <CardField
              score={score}
              setScore={setScore}
              cards={gameCards}
              redirectToStartScreen={redirectToStartScreen}
            />
          </div>
        ) : (
          <EndGame score={score} />
        )
      ) : (
        <StartScreen startClickHandler={startGameHandler} />
      )}
    </div>
  );
};