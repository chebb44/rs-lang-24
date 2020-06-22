import React, { useState } from 'react';
import './SpeakItMainPage.scss';
import { SpeakItEnterScreen } from '../StartScreen/SpeakItEnterScreen';
import { SpeakItGameScreen } from '../GamePage/SpeakItGamePage';

export const SpeakItMainPage = function () {
<<<<<<< HEAD
  const [speakItScreen, setSpeakItScreen] = useState('start');
=======
  const [speakItScreen, setSpeakItScreen] = useState('');
>>>>>>> fbec8b1d76dfeb505b68657e8217ee21bdf3795d
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
