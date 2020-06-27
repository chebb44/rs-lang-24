import React, { useEffect, useState, useCallback } from 'react';
import { Timer } from '../../components/Timer/Timer';
import { Score } from '../../components/Score/Score';
import './SprintMain.scss';
import { CardField } from '../CardField/CardField';
import { useSelector, useDispatch } from 'react-redux';
import { shuffleCards } from '../../../../../utilities/sprint/shuffleCards';
import { StartScreen } from '../../components/StartScreen/StartScreen';
import { EndGame } from './../../components/EndGame/EndGame';
import { actionSprintSendGameResult } from '../../../../../reducers/miniGamesStats/miniGamesStatsActions';
import { dictionaryStateStateSelector } from './../../../../../reducers/dictionaryReducer/dictionaryReducer';

export const SprintMain = () => {
  const { learnedWords: cards } = useSelector(dictionaryStateStateSelector);
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
    setIsStartScreen(true);
    setIsStillTime(true);
    setScore(0);
  }, []);
  const timeoutHandler = useCallback(() => {
    dispatch(
      actionSprintSendGameResult({
        date: new Date().toLocaleDateString(),
        result: score,
      }),
    );
    setIsStillTime(false);
  }, [dispatch, score]);
  return (
    <div className="sprint-main-wrapper">
      {!isStartScreen ? (
        isStillTime ? (
          <div className="sprint-content-wrapper">
            <Score score={score} />
            <Timer timeoutHandler={timeoutHandler} />
            <CardField
              score={score}
              setScore={setScore}
              cards={gameCards}
              timeoutHandler={timeoutHandler}
            />
          </div>
        ) : (
          <EndGame
            redirectToStartScreen={redirectToStartScreen}
            score={score}
          />
        )
      ) : (
        <StartScreen startClickHandler={startGameHandler} />
      )}
    </div>
  );
};
