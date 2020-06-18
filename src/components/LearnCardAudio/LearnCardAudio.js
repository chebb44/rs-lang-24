import React from 'react';

export const LearnCardAudio = ({ currentAudio, onEnded }) => {
  return (
    <audio
      autoPlay
      src={
        currentAudio &&
        `https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${currentAudio}`
      }
      onEnded={() => onEnded()}
    />
  );
};
