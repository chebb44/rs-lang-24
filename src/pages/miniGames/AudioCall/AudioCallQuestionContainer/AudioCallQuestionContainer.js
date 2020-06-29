import React from 'react';
import './AudioCallQuestionContainer.scss';
import { AudioCallQuestionAudio } from '../AudioCallQuestionAudio/AudioCallQuestionAudio';
import { AudioCallQuestionImg } from '../AudioCallQuestionImg/AudioCallQuestionImg';
import { AudioCallQuestionTitle } from '../AudioCallQuestionTitle/AudioCallQuestionTitle';

export const AudioCallQuestionContainer = ({ wordsForGame }) => {
  const { id, audio, image, word } = wordsForGame[0];
  return (
    <div className="audio-call-question-container">
      <AudioCallQuestionAudio
        className={'audio-call-question-audio audio-call-question-audio_true'}
        audioSrc={audio}
      />
      <AudioCallQuestionImg image={image} />
      <AudioCallQuestionTitle word={word} />
    </div>
  );
};
