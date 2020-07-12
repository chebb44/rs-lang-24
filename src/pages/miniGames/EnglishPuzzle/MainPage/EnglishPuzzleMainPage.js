import React, { useState, useCallback, useEffect } from 'react';
import './EnglishPuzzleMainPage.scss';
import { EnglishPuzzleStartScreen } from '../StartScreen/EnglishPuzzleStartScreen';
import { EnglishPuzzleGamePage } from '../GamePage/EnglishPuzzleGamePage';
import {
  ENGLISH_PUZZLE_START_SCREEN,
  ENGLISH_PUZZLE_GAME_SCREEN,
  MAX_WORDS_FOR_GAME,
  LEARNED_WORDS,
  SELECTED_WORDS,
} from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { dictionaryStateStateSelector } from '../../../../reducers/dictionaryReducer/dictionaryReducer';
import {
  getWordsForEnglishPuzzle,
  getLearnedWordsForEnglishPuzzle,
} from '../getWordsForEnglishPuzzle';
import { learnCardSettingsSelector } from '../../../../reducers/learnSettings/learnSettingsReducer';
import { Spinner } from '../../../../components/Spinner/Spinner';
import { miniGamesStatsSelector } from '../../../../reducers/miniGamesStats/miniGamesStatsReducer';
import {
  actionEnglishPuzzleSaveGameLevel,
  actionEnglishPuzzleSaveGameRound,
} from '../../../../reducers/miniGamesDifficulty/miniGamesDifficultyActions';
import { miniGamesDifficultySelector } from '../../../../reducers/miniGamesDifficulty/miniGamesDifficultyReducer';

export const EnglishPuzzleMainPage = () => {
  const dispatch = useDispatch();
  const { learnedWords } = useSelector(dictionaryStateStateSelector);
  const { currentWordsGroup, currentWordsPage } = useSelector(
    learnCardSettingsSelector,
  );
  const [currentScreen, setCurrentScreen] = useState(
    ENGLISH_PUZZLE_START_SCREEN,
  );
  const [visibleStatisticGame, setVisibleStatisticGame] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const startGameHandler = useCallback(() => {
    setCurrentScreen(ENGLISH_PUZZLE_GAME_SCREEN);
  }, []);
  const redirectToStartScreen = useCallback(() => {
    setCurrentScreen(ENGLISH_PUZZLE_START_SCREEN);
  }, []);
  const visibleStatistic = useCallback(() => {
    setVisibleStatisticGame(!visibleStatisticGame);
  }, [visibleStatisticGame]);
  const {
    miniGames: { englishPuzzle: englishPuzzleDayStat },
  } = useSelector(miniGamesStatsSelector);
  const {
    englishPuzzle: { level, round },
  } = useSelector(miniGamesDifficultySelector);

  const [wordsForGame, setWordsForGame] = useState();

  const saveGameLevel = useCallback(
    (level) => {
      dispatch(actionEnglishPuzzleSaveGameLevel(level));
    },
    [dispatch],
  );
  const saveGameRound = useCallback(
    (round) => {
      dispatch(actionEnglishPuzzleSaveGameRound(round));
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
        ? (wordsArray = getLearnedWordsForEnglishPuzzle(learnedWords))
        : (wordsArray = await getWordsForEnglishPuzzle(round, level));
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

  return (
    <div className="english-puzzle-main-page">
      {(() => {
        switch (currentScreen) {
          case ENGLISH_PUZZLE_START_SCREEN:
            return isLoader ? (
              <Spinner />
            ) : (
              <EnglishPuzzleStartScreen
                startGameHandler={startGameHandler}
                visibleStatistic={visibleStatistic}
                visibleStatisticGame={visibleStatisticGame}
                englishPuzzleDayStat={englishPuzzleDayStat}
                saveGameLevel={saveGameLevel}
                saveGameRound={saveGameRound}
                level={level}
                round={round}
                setGameMode={setGameMode}
              />
            );
          case ENGLISH_PUZZLE_GAME_SCREEN:
            return wordsForGame ? (
              <EnglishPuzzleGamePage
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
