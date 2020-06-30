import React, { useState, useCallback, useEffect } from 'react';
import './AudioCallMainPage.scss';
import { AudioCallStartScreen } from '../StartScreen/AudioCallStartScreen';
import { AudioCallGamePage } from '../GamePage/AudioCallGamePage';
import {
  AUDIO_CALL_START_SCREEN,
  AUDIO_CALL_STATISTIC_SCREEN,
  AUDIO_CALL_GAME_SCREEN,
  AUDIO_CALL_END_SCREEN,
  MAX_WORDS_FOR_GAME,
} from '../constants';
import { useSelector } from 'react-redux';
import { dictionaryStateStateSelector } from '../../../../reducers/dictionaryReducer/dictionaryReducer';
import {
  getWordsForAudioCall,
  getFalseWordsForAudioCall,
} from '../getWordsForAudioCall';
import { learnCardSettingsSelector } from '../../../../reducers/learnSettings/learnSettingsReducer';
import { Spinner } from '../../../../components/Spinner/Spinner';

export const AudioCallMainPage = () => {
  const { learnedWords } = useSelector(dictionaryStateStateSelector);
  const { currentWordsGroup, currentWordsPage } = useSelector(
    learnCardSettingsSelector,
  );
  const [currentScreen, setCurrentScreen] = useState(AUDIO_CALL_GAME_SCREEN);

  const startGameHandler = useCallback(() => {
    setCurrentScreen(AUDIO_CALL_GAME_SCREEN);
  }, []);
  const redirectToStartScreen = useCallback(() => {
    setCurrentScreen(AUDIO_CALL_START_SCREEN);
  }, []);
  const redirectToStatistic = useCallback(() => {
    setCurrentScreen(AUDIO_CALL_STATISTIC_SCREEN);
  }, []);
  const endGameHandler = useCallback(() => {
    setCurrentScreen(AUDIO_CALL_END_SCREEN);
  }, []);

  const [wordsGroup, setWordsGroup] = useState(0);
  const [wordPage, setWordPage] = useState(0);
  const [wordsForGame, setWordsForGame] = useState();

  useEffect(() => {
    const fetchWords = async () => {
      let wordsArray = [];
      learnedWords.length === MAX_WORDS_FOR_GAME
        ? (wordsArray = await getFalseWordsForAudioCall(
            currentWordsGroup,
            currentWordsPage,
            learnedWords,
          ))
        : (wordsArray = await getWordsForAudioCall(wordsGroup, wordPage));
      setWordsForGame(wordsArray);
    };
    fetchWords();
  }, [wordPage, wordsGroup, currentWordsGroup, currentWordsPage, learnedWords]);

  return (
    <div className="audio-call-main-page">
      {(() => {
        switch (currentScreen) {
          case AUDIO_CALL_START_SCREEN:
            return (
              <AudioCallStartScreen
                startGameHandler={startGameHandler}
                redirectToStatistic={redirectToStatistic}
              />
            );
          case AUDIO_CALL_GAME_SCREEN:
            return wordsForGame ? (
              <AudioCallGamePage
                redirectToStartScreen={redirectToStartScreen}
                wordsForGame={wordsForGame}
              />
            ) : (
              <Spinner />
            );
          // case AUDIO_CALL_END_SCREEN:
          //   return (
          //     <AudioCallEndGame
          //       redirectToStartScreen={redirectToStartScreen}
          //       score={score}
          //     />
          //   );
          // case AUDIO_CALL_STATISTIC_SCREEN:
          //   return (
          //     <AudioCallStatistic
          //       gameStat={gameStat}
          //       redirectToStartScreen={redirectToStartScreen}
          //     />
          //   );
          default:
            break;
        }
      })()}
    </div>
  );
};
