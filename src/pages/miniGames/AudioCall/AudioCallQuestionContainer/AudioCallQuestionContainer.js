import React from 'react';
import './AudioCallQuestionContainer.scss';
import { AudioCallQuestionAudio } from '../AudioCallQuestionAudio/AudioCallQuestionAudio';
import { AudioCallQuestionImg } from '../AudioCallQuestionImg/AudioCallQuestionImg';
import { AudioCallQuestionTitle } from '../AudioCallQuestionTitle/AudioCallQuestionTitle';

export const AudioCallQuestionContainer = ({
  wordsForGame,
  questionAudioClass,
  questionTitleClass,
}) => {
  const { audio, image, word } = wordsForGame[0];
  return (
    <div className="audio-call-question-container">
      <AudioCallQuestionAudio
        audioSrc={audio}
        questionAudioClass={questionAudioClass}
      />
      <AudioCallQuestionImg image={image} />
      <AudioCallQuestionTitle
        word={word}
        questionTitleClass={questionTitleClass}
      />
    </div>
  );
};
