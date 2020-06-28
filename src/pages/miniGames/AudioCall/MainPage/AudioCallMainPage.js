import React, { useState, useCallback } from 'react';
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
import { shuffleArray } from '../utilities';
import {
  getWordsForAudioCall,
  getFalseWordsForAudioCall,
} from '../getWordsForAudioCall';

export const AudioCallMainPage = () => {
  const dispatch = useDispatch();
  const { learnedWords } = useSelector(dictionaryStateStateSelector);
  const [currentScreen, setCurrentScreen] = useState(AUDIO_CALL_START_SCREEN);

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

  // dispatch
  let wordsForGame = [];
  learnedWords.length > 9
    ? // get page/group of MAIN user state
      (wordsForGame = getFalseWordsForAudioCall(0, 0, learnedWords))
    : // get difficulty game user
      (wordsForGame = getWordsForAudioCall(0, 0));

  return (
    <div>
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
            return (
              <AudioCallGamePage
                wordsForGame={wordsForGame}
                redirectToStartScreen={redirectToStartScreen}
              />
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
