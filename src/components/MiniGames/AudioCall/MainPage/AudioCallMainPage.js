import React, { useState } from 'react';
import { AudioCallStartScreen } from '../StartScreen/AudioCallStartScreen';
import { AudioCallGamePage } from '../GamePage/AudioCallGamePage';

export const AudioCallMainPage = () => {
  const [audioCallScreen, setAudioCallScreen] = useState('');

  return (
    <div>
      {audioCallScreen === 'gamePage' ? (
        <AudioCallGamePage />
      ) : (
        <AudioCallStartScreen setAudioCallScreen={setAudioCallScreen} />
      )}
    </div>
  );
};
