import React, { useState, useCallback, useEffect } from 'react';
import './AudioCallMainPage.scss';
import { AudioCallStartScreen } from '../StartScreen/AudioCallStartScreen';
import { AudioCallGamePage } from '../GamePage/AudioCallGamePage';
import {
  AUDIO_CALL_START_SCREEN,
  AUDIO_CALL_GAME_SCREEN,
  MAX_WORDS_FOR_GAME,
  LEARNED_WORDS,
  SELECTED_WORDS,
} from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { dictionaryStateStateSelector } from '../../../../reducers/dictionaryReducer/dictionaryReducer';
import { getWordsForAudioCall } from '../getWordsForAudioCall';
import { learnCardSettingsSelector } from '../../../../reducers/learnSettings/learnSettingsReducer';
import { Spinner } from '../../../../components/Spinner/Spinner';
import { miniGamesStatsSelector } from '../../../../reducers/miniGamesStats/miniGamesStatsReducer';
import {
  actionAudioCallSaveGameLevel,
  actionAudioCallSaveGameRound,
} from '../../../../reducers/miniGamesDifficulty/miniGamesDifficultyActions';
import { miniGamesDifficultySelector } from '../../../../reducers/miniGamesDifficulty/miniGamesDifficultyReducer';

export const AudioCallMainPage = () => {
  const dispatch = useDispatch();
  const { learnedWords } = useSelector(dictionaryStateStateSelector);
  const { currentWordsGroup, currentWordsPage } = useSelector(
    learnCardSettingsSelector,
  );
  const [currentScreen, setCurrentScreen] = useState(AUDIO_CALL_START_SCREEN);
  const [visibleStatisticGame, setVisibleStatisticGame] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const startGameHandler = useCallback(() => {
    setCurrentScreen(AUDIO_CALL_GAME_SCREEN);
  }, []);
  const redirectToStartScreen = useCallback(() => {
    setCurrentScreen(AUDIO_CALL_START_SCREEN);
  }, []);
  const visibleStatistic = useCallback(() => {
    setVisibleStatisticGame(!visibleStatisticGame);
  }, [visibleStatisticGame]);
  const {
    miniGames: { audioCall: audioCallDayStat },
  } = useSelector(miniGamesStatsSelector);
  const {
    audioCall: { level, round },
  } = useSelector(miniGamesDifficultySelector);
  const [wordsForGame, setWordsForGame] = useState();

  const saveGameLevel = useCallback(
    (level) => {
      dispatch(actionAudioCallSaveGameLevel(level));
    },
    [dispatch],
  );
  const saveGameRound = useCallback(
    (round) => {
      dispatch(actionAudioCallSaveGameRound(round));
    },
    [dispatch],
  );

  const [gameMode, setGameMode] = useState(LEARNED_WORDS);

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
        ? (wordsArray = await getWordsForAudioCall(
            currentWordsPage,
            currentWordsGroup,
            learnedWords,
          ))
        : (wordsArray = await getWordsForAudioCall(round, level));
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
    <div className="audio-call-main-page">
      {(() => {
        switch (currentScreen) {
          case AUDIO_CALL_START_SCREEN:
            return isLoader ? (
              <Spinner />
            ) : (
              <AudioCallStartScreen
                startGameHandler={startGameHandler}
                visibleStatistic={visibleStatistic}
                visibleStatisticGame={visibleStatisticGame}
                audioCallDayStat={audioCallDayStat}
                saveGameLevel={saveGameLevel}
                saveGameRound={saveGameRound}
                level={level}
                round={round}
                setGameMode={setGameMode}
              />
            );
          case AUDIO_CALL_GAME_SCREEN:
            return wordsForGame ? (
              <AudioCallGamePage
                redirectToStartScreen={redirectToStartScreen}
                wordsForGame={wordsForGame}
                level={level}
                round={round}
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
