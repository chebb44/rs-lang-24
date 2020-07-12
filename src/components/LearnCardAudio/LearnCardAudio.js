import React from 'react';

export const LearnCardAudio = ({
  currentAudio,
  handleNextAudio,
  isAudioOn,
}) => {
  if (!isAudioOn || !currentAudio) return null;
  return (
    isAudioOn &&
    currentAudio && (
      <audio
        autoPlay
        src={`https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${currentAudio}`}
        onEnded={handleNextAudio}
      />
    )
  );
};
