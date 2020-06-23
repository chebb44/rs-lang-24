import React from 'react';

export const LearnCardAudio = ({
  currentAudio,
  handleNextAudio,
  isAudioOn,
}) => {
  return (
    <audio
      autoPlay
      src={
        currentAudio &&
        isAudioOn &&
        `https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${currentAudio}`
      }
      onEnded={handleNextAudio}
    />
  );
};
