import React, { useState, useCallback } from 'react';
import './AudioCallGamePage.scss';
import { AudioCallProgressBar } from '../AudioCallProgressBar/AudioCallProgressBar';
import { AudioCallQuestionContainer } from '../AudioCallQuestionContainer/AudioCallQuestionContainer';
import { AudioCallAnswerBtnsBlock } from '../AudioCallAnswerBtnsBlock/AudioCallAnswerBtnsBlock';
import { AudioCallEnterBtn } from '../AudioCallEnterBtn/AudioCallEnterBtn';
import { AudioCallExitBtn } from '../AudioCallExitBtn/AudioCallExitBtn';

export const AudioCallGamePage = ({
  redirectToStartScreen,
  wordsForGame,
  upState,
}) => {
  const [wordNumber, setWordNumber] = useState(0);

  return (
    <div className="audio-call-game-page">
      <AudioCallProgressBar current={wordNumber} all={wordsForGame.length} />
      <AudioCallExitBtn func={redirectToStartScreen} />
      <AudioCallQuestionContainer wordsForGame={wordsForGame[wordNumber]} />
      <AudioCallAnswerBtnsBlock wordsForGame={wordsForGame[wordNumber]} />
      <AudioCallEnterBtn func={upState} />
    </div>
  );
};
