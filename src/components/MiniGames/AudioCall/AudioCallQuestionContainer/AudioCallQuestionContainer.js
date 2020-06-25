import React from 'react';
import './AudioCallQuestionContainer.scss';
import { AudioCallQuestionAudio } from '../AudioCallQuestionAudio/AudioCallQuestionAudio';
import { AudioCallQuestionImg } from '../AudioCallQuestionImg/AudioCallQuestionImg';
import { AudioCallQuestionTitle } from '../AudioCallQuestionTitle/AudioCallQuestionTitle';

const word = 'example';

export const AudioCallQuestionContainer = () => {
  return (
    <div className="audio-call-question-container">
      <AudioCallQuestionAudio
        className={'audio-call-question-audio audio-call-question-audio_true'}
      />
      <AudioCallQuestionImg />
      <AudioCallQuestionTitle word={word} />
    </div>
  );
};
