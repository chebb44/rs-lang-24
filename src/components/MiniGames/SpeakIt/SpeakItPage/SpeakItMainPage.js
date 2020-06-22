import React, { useState } from 'react';
import './SpeakItMainPage.scss';
import { SpeakItEnterScreen } from '../StartScreen/SpeakItEnterScreen';
import { SpeakItGameScreen } from '../GamePage/SpeakItGamePage';

export const SpeakItMainPage = function () {

  const [speakItScreen, setSpeakItScreen] = useState('');
  return (
    <div>
      {speakItScreen === 'gamePage' ? (
        <SpeakItGameScreen />
      ) : (
        <SpeakItEnterScreen setSpeakItScreen={setSpeakItScreen} />
      )}
    </div>
  );
};
