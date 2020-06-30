import React, { useState } from 'react';
import './SpeakItMainPage.scss';
import { SpeakItEnterScreen } from '../EnterScreen/SpeakItEnterScreen';
import { SpeakItGameScreen } from '../GamePage/SpeakItGamePage';
import SpeakItStatistic from '../SpeakItStatistic/SpeakItStatistic';
import { useSelector } from 'react-redux';
import { miniGamesStatsSelector } from '../../../../reducers/miniGamesStats/miniGamesStatsReducer';

export const SpeakItMainPage = function () {
  const [speakItScreen, setSpeakItScreen] = useState('');
  const [showStatistic, setShowStatistic] = useState(false);
  const {
    miniGames: { speakIt: gameStat },
  } = useSelector(miniGamesStatsSelector);
  const statArray = [];
  for (const key in gameStat) {
    if (gameStat.hasOwnProperty(key)) {
      statArray.push({ date: key, data: gameStat[key] });
    }
  }
  // console.log(statArray);
  return (
    <div>
      {speakItScreen === 'gamePage' && !showStatistic ? (
        <SpeakItGameScreen onClickStatsButton={() => setShowStatistic(true)} />
      ) : showStatistic ? (
        <SpeakItStatistic
          onCloseStatistic={() => setShowStatistic(false)}
          gameStat={statArray}
        />
      ) : (
        <SpeakItEnterScreen setSpeakItScreen={setSpeakItScreen} />
      )}
    </div>
  );
};
