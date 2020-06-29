import React, { useState, useCallback } from 'react';
import './AudioCallGamePage.scss';
import { AudioCallProgressBar } from '../AudioCallProgressBar/AudioCallProgressBar';
import { AudioCallQuestionContainer } from '../AudioCallQuestionContainer/AudioCallQuestionContainer';
import { AudioCallAnswerBtnsBlock } from '../AudioCallAnswerBtnsBlock/AudioCallAnswerBtnsBlock';
import { AudioCallEnterBtn } from '../AudioCallEnterBtn/AudioCallEnterBtn';
import { AudioCallExitBtn } from '../AudioCallExitBtn/AudioCallExitBtn';

const currentLearnCardIndex = 6;
const learnCards = ['', '', '', '', '', '', '', '', '', ''];

export const AudioCallGamePage = ({
  learnedWords,
  redirectToStartScreen,
  wordsForGame,
  upState,
}) => {

  return (
    <div className="audio-call-game-page">
      <AudioCallProgressBar
        current={currentLearnCardIndex}
        all={learnCards.length}
      />
      <AudioCallExitBtn func={redirectToStartScreen} />
      <AudioCallQuestionContainer />
      <AudioCallAnswerBtnsBlock />
      <AudioCallEnterBtn func={upState} />
    </div>
  );
};
