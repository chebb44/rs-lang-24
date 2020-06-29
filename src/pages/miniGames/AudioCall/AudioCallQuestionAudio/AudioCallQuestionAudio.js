import React from 'react';
import './AudioCallQuestionAudio.scss';
import { AudioSoundSvg } from './assets/AudioSoundSvg';

export const AudioCallQuestionAudio = ({ className, audioSrc }) => {
  const playAudioClickHandler = () => {
    const audio = new Audio();
    audio.src = `https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${audioSrc}`;
    audio.play();
  };

  return (
    <button className={className} onClick={playAudioClickHandler}>
      <AudioSoundSvg />
    </button>
  );
};
