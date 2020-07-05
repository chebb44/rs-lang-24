import React, { useState, useCallback, useEffect } from 'react';
import './QuizMainPage.scss';
import { QuizStartScreen } from '../StartScreen/QuizStartScreen';
import { QuizGamePage } from '../GamePage/QuizGamePage';
import {
  QUIZ_START_SCREEN,
  QUIZ_GAME_SCREEN,
  MAX_WORDS_FOR_GAME,
  LEARNED_WORDS,
  SELECTED_WORDS,
} from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { dictionaryStateStateSelector } from '../../../../reducers/dictionaryReducer/dictionaryReducer';
import { getWordsForQuiz, getLearnedWordsForQuiz } from '../getWordsForQuiz';
import { learnCardSettingsSelector } from '../../../../reducers/learnSettings/learnSettingsReducer';
import { Spinner } from '../../../../components/Spinner/Spinner';
import { miniGamesStatsSelector } from '../../../../reducers/miniGamesStats/miniGamesStatsReducer';
import {
  actionQuizSaveGameLevel,
  actionQuizSaveGameRound,
} from '../../../../reducers/miniGamesDifficulty/miniGamesDifficultyActions';
import { miniGamesDifficultySelector } from '../../../../reducers/miniGamesDifficulty/miniGamesDifficultyReducer';

export const QuizMainPage = () => {
  const dispatch = useDispatch();
  const { learnedWords } = useSelector(dictionaryStateStateSelector);
  const { currentWordsGroup, currentWordsPage } = useSelector(
    learnCardSettingsSelector,
  );
  const [currentScreen, setCurrentScreen] = useState(QUIZ_GAME_SCREEN); // start
  const [visibleStatisticGame, setVisibleStatisticGame] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const startGameHandler = useCallback(() => {
    setCurrentScreen(QUIZ_GAME_SCREEN);
  }, []);
  const redirectToStartScreen = useCallback(() => {
    setCurrentScreen(QUIZ_START_SCREEN);
  }, []);
  const visibleStatistic = useCallback(() => {
    setVisibleStatisticGame(!visibleStatisticGame);
  }, [visibleStatisticGame]);
  const {
    miniGames: { quiz: quizDayStat },
  } = useSelector(miniGamesStatsSelector);
  const {
    quiz: { level, round },
  } = useSelector(miniGamesDifficultySelector);

  const [wordsForGame, setWordsForGame] = useState();

  const saveGameLevel = useCallback(
    (level) => {
      dispatch(actionQuizSaveGameLevel(level));
    },
    [dispatch],
  );
  const saveGameRound = useCallback(
    (round) => {
      dispatch(actionQuizSaveGameRound(round));
    },
    [dispatch],
  );

  const [gameMode, setGameMode] = useState();

  useEffect(() => {
    learnedWords.length >= MAX_WORDS_FOR_GAME
      ? setGameMode(LEARNED_WORDS)
      : setGameMode(SELECTED_WORDS);
  }, [learnedWords.length]);

  useEffect(() => {
    setIsLoader(true);
    const fetchWords = async () => {
      let wordsArray = [];
      gameMode === LEARNED_WORDS
        ? (wordsArray = getLearnedWordsForQuiz(learnedWords))
        : (wordsArray = await getWordsForQuiz(round, level));
      setWordsForGame(wordsArray);
      setIsLoader(false);
    };
    fetchWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentWordsGroup,
    currentWordsPage,
    learnedWords,
    level,
    round,
    gameMode,
  ]);

  // console.log('wordsForGame', wordsForGame);

  return (
    <div className="quiz-main-page">
      {(() => {
        switch (currentScreen) {
          case QUIZ_START_SCREEN:
            return isLoader ? (
              <Spinner />
            ) : (
              <QuizStartScreen
                startGameHandler={startGameHandler}
                visibleStatistic={visibleStatistic}
                visibleStatisticGame={visibleStatisticGame}
                quizDayStat={quizDayStat}
                saveGameLevel={saveGameLevel}
                saveGameRound={saveGameRound}
                level={level}
                round={round}
                setGameMode={setGameMode}
              />
            );
          case QUIZ_GAME_SCREEN:
            return wordsForGame ? (
              <QuizGamePage
                redirectToStartScreen={redirectToStartScreen}
                wordsForGame={wordsForGame}
              />
            ) : (
              <Spinner />
            );
          default:
            break;
        }
      })()}
    </div>
  );
};
