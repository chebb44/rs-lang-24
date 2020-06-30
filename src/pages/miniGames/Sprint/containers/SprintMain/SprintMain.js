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
import { SPRINT_GAME_SCREEN, SPRINT_START_SCREEN } from '../../constants';
import { SPRINT_END_SCREEN, SPRINT_STATISTIC_SCREEN } from './../../constants';
import { SprintStatistic } from '../../components/SprintStatistic/SprintStatistic';
import { miniGamesStatsSelector } from './../../../../../reducers/miniGamesStats/miniGamesStatsReducer';
import { getDateStringByDate } from '../../../../../utilities/getDateStringByDate';

export const SprintMain = () => {
  const {
    miniGames: { sprint: gameStat },
  } = useSelector(miniGamesStatsSelector);
  const { learnedWords } = useSelector(dictionaryStateStateSelector);
  const [cards, setCards] = useState(learnedWords);
  const [currentScreen, setCurrentScreen] = useState(SPRINT_START_SCREEN);
  const [score, setScore] = useState(0);
  const [gameCards, setGameCards] = useState(cards);
  const dispatch = useDispatch();
  useEffect(() => {
    setCards(
      learnedWords
        .map((item) => {
          return { ...item };
        })
        .sort(() => Math.random() - 0.5),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const { shuffledCards } = shuffleCards({ cards });
    setGameCards(shuffledCards);
  }, [cards]);
  const startGameHandler = useCallback(() => {
    setCurrentScreen(SPRINT_GAME_SCREEN);
  }, []);
  const redirectToStartScreen = useCallback(() => {
    setCurrentScreen(SPRINT_START_SCREEN);
    setGameCards(gameCards.sort(() => Math.random() - 0.5));
    setScore(0);
  }, [gameCards]);
  const redirectToStatistic = useCallback(() => {
    setCurrentScreen(SPRINT_STATISTIC_SCREEN);
  }, []);
  const endGameHandler = useCallback(() => {
    dispatch(
      actionSprintSendGameResult({
        date: getDateStringByDate(new Date()),
        result: score,
      }),
    );
    setCurrentScreen(SPRINT_END_SCREEN);
  }, [dispatch, score]);
  return (
    <div className="sprint-main-wrapper">
      {(() => {
        switch (currentScreen) {
          case SPRINT_START_SCREEN:
            return (
              <StartScreen
                startClickHandler={startGameHandler}
                redirectToStatistic={redirectToStatistic}
              />
            );
          case SPRINT_GAME_SCREEN:
            return cards.length >= 5 ? (
              <div className="sprint-content-wrapper">
                <Score score={score} />
                <Timer endGameHandler={endGameHandler} />
                <CardField
                  score={score}
                  setScore={setScore}
                  cards={gameCards}
                  redirectToStartScreen={redirectToStartScreen}
                  endGameHandler={endGameHandler}
                />
              </div>
            ) : (
              <StartScreen
                startClickHandler={startGameHandler}
                redirectToStatistic={redirectToStatistic}
              />
            );
          case SPRINT_END_SCREEN:
            return (
              <EndGame
                redirectToStartScreen={redirectToStartScreen}
                score={score}
              />
            );
          case SPRINT_STATISTIC_SCREEN:
            return (
              <SprintStatistic
                gameStat={gameStat}
                redirectToStartScreen={redirectToStartScreen}
              />
            );
          default:
            break;
        }
      })()}
    </div>
  );
};
