import React, { useState } from 'react';
import './AudioCallGamePage.scss';
import { AudioCallProgressBar } from '../AudioCallProgressBar/AudioCallProgressBar';
import { AudioCallQuestionContainer } from '../AudioCallQuestionContainer/AudioCallQuestionContainer';
import { AudioCallAnswerBtnsBlock } from '../AudioCallAnswerBtnsBlock/AudioCallAnswerBtnsBlock';
import { AudioCallEnterBtn } from '../AudioCallEnterBtn/AudioCallEnterBtn';
import { AudioCallExitBtn } from '../AudioCallExitBtn/AudioCallExitBtn';
import { useDispatch } from 'react-redux';
import { AudioCallStartScreen } from '../StartScreen/AudioCallStartScreen';

const currentLearnCardIndex = 6;
const learnCards = ['', '', '', '', '', '', '', '', '', ''];

export const AudioCallGamePage = () => {
  const [setAudioCallScreen] = useState('');
  const dispatch = useDispatch();
  const backToStartPage = () => {
    return <AudioCallStartScreen setAudioCallScreen={setAudioCallScreen} />;
  };
  return (
    <div className="audio-call-game-page">
      <AudioCallProgressBar
        current={currentLearnCardIndex}
        all={learnCards.length}
      />
      <AudioCallExitBtn func={backToStartPage} />
      <AudioCallQuestionContainer />
      <AudioCallAnswerBtnsBlock />
      <AudioCallEnterBtn />
    </div>
  );
};
