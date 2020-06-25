import React from 'react';
import './AudioCallQuestionAudio.scss';
import { AudioSoundSvg } from './assets/AudioSoundSvg';

export const AudioCallQuestionAudio = ({ className }) => {
  return (
    <div className={className}>
      <AudioSoundSvg />
    </div>
  );
};
