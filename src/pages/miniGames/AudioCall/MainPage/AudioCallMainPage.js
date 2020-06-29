import React, { useState, useCallback, useEffect } from 'react';
import './AudioCallMainPage.scss';
import { AudioCallStartScreen } from '../StartScreen/AudioCallStartScreen';
import { AudioCallGamePage } from '../GamePage/AudioCallGamePage';
import {
  AUDIO_CALL_START_SCREEN,
  AUDIO_CALL_STATISTIC_SCREEN,
  AUDIO_CALL_GAME_SCREEN,
  AUDIO_CALL_END_SCREEN,
} from '../constants';
import { useDispatch, useSelector } from 'react-redux';
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

  //get level option
  const [wordsGroup, setWordsGroup] = useState(0);
  const [wordPage, setWordPage] = useState(0);
  const [wordsForGame, setWordsForGame] = useState();

  const upState = useCallback(() => {
    setWordsGroup(wordsGroup + 1);
  });

  useEffect(() => {
    const fetchWords = async () => {
      let wordsArray = [];
      learnedWords.length > 9
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
                upState={upState}
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
