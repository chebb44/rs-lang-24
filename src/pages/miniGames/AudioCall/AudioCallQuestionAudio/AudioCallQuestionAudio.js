import React, { useEffect } from 'react';
import './AudioCallQuestionAudio.scss';
import { AudioSoundSvg } from './assets/AudioSoundSvg';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

export const AudioCallQuestionAudio = ({ audioSrc, questionAudioClass }) => {
  const playAudioClickHandler = () => {
    const audio = new Audio();
    audio.src = `${FILES_URL}${audioSrc}`;
    audio.play();
  };

  useEffect(() => {
    const audio = new Audio();
    audio.src = `${FILES_URL}${audioSrc}`;
    setTimeout(() => {
      audio.play();
    }, 1000);
  }, [audioSrc]);

  return (
    <button
      className={questionAudioClass}
      onClick={playAudioClickHandler}
      id="audioIcon"
      muted="muted"
    >
      <AudioSoundSvg />
    </button>
  );
};
