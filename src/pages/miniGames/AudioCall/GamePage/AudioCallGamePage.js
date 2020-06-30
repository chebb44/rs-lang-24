import React, { useState } from 'react';
import './AudioCallGamePage.scss';
import { AudioCallProgressBar } from '../AudioCallProgressBar/AudioCallProgressBar';
import { AudioCallQuestionContainer } from '../AudioCallQuestionContainer/AudioCallQuestionContainer';
import { AudioCallAnswerBtnsBlock } from '../AudioCallAnswerBtnsBlock/AudioCallAnswerBtnsBlock';
import { AudioCallEnterBtn } from '../AudioCallEnterBtn/AudioCallEnterBtn';
import { AudioCallExitBtn } from '../AudioCallExitBtn/AudioCallExitBtn';
import successSrc from '../../../../assets/audio/success.mp3';
import { SHOW_TRUE, MAX_WORDS_FOR_GAME } from '../constants';

//TODO: fade effect
//TODO: end game result modal
//TODO: statistic modal on startScreen
//TODO: difficulty level

export const AudioCallGamePage = ({ redirectToStartScreen, wordsForGame }) => {
  const [wordNumber, setWordNumber] = useState(0);
  const [gameStatistic, setGameStatistic] = useState([]);
  const [enterBtnClass, setEnterBtnClass] = useState('audio-call-enter-btn');
  const [questionAudioClass, setQuestionAudioClass] = useState(
    'audio-call-question-audio',
  );
  const [questionTitleClass, setQuestionTitleClass] = useState(
    'audio-call-question-title',
  );

  const success = new Audio();
  success.src = successSrc;

  const getTrueAnswer = () => {
    const trueWord = wordsForGame[wordNumber][0].word;
    const answerBtns = document.querySelectorAll('.audio-call-answer-btn');
    answerBtns.forEach((el) => {
      if (trueWord === el.value) {
        successAddClasses(el, SHOW_TRUE);
      }
    });
  };

  const setNextGameWord = () => {
    removeClasses();
    if (wordNumber === MAX_WORDS_FOR_GAME) {
      return null;
    }
    setWordNumber(wordNumber + 1);
  };

  const clickEnterBtn = (event) => {
    event.target.innerText ? getTrueAnswer() : setNextGameWord();
  };

  const successAddClasses = (item, SHOW_TRUE) => {
    success.play();
    const answerBtns = document.querySelectorAll('.audio-call-answer-btn');

    let check = false;
    Array.from(answerBtns).forEach((el) => {
      if (el.classList.contains('audio-call-answer-btn_false')) {
        check = true;
      }
    });

    check || SHOW_TRUE
      ? item.classList.add('audio-call-answer-btn_true-after-false')
      : setGameStatistic([...gameStatistic, wordsForGame[wordNumber][0]]) ||
        item.classList.add('audio-call-answer-btn_true');

    setQuestionTitleClass(
      'audio-call-question-title audio-call-question-title_visible',
    );
    setQuestionAudioClass(
      'audio-call-question-audio audio-call-question-audio_true',
    );
    setEnterBtnClass('audio-call-enter-btn audio-call-enter-btn_next');
    answerBtns.forEach((el) => {
      if (
        el.classList.contains('audio-call-answer-btn_true') ||
        el.classList.contains('audio-call-answer-btn_true-after-false')
      ) {
        return;
      } else {
        el.classList.add('audio-call-answer-btn_disabled');
      }
    });
  };

  const removeClasses = () => {
    setQuestionTitleClass('audio-call-question-title');
    setQuestionAudioClass('audio-call-question-audio');
    setEnterBtnClass('audio-call-enter-btn');
    const answerBtns = document.querySelectorAll('.audio-call-answer-btn');

    answerBtns.forEach((el) => {
      el.classList.remove('audio-call-answer-btn_true');
      el.classList.remove('audio-call-answer-btn_false');
      el.classList.remove('audio-call-answer-btn_disabled');
      el.classList.remove('audio-call-answer-btn_true-after-false');
    });
  };

  const checkTrueWordClick = (event) => {
    const questionWord = document.getElementById('questionWord');

    if (event.target.value !== questionWord.textContent) {
      event.target.classList.add('audio-call-answer-btn_false');
    }
    if (event.target.value === questionWord.textContent) {
      successAddClasses(event.target);
    }
  };

  return wordNumber === MAX_WORDS_FOR_GAME ? (
    <h1>END game result: {gameStatistic.length}</h1>
  ) : (
    <div className="audio-call-game-page">
      <AudioCallProgressBar current={wordNumber} all={MAX_WORDS_FOR_GAME} />
      <AudioCallExitBtn func={redirectToStartScreen} />
      <AudioCallQuestionContainer
        wordsForGame={wordsForGame[wordNumber]}
        questionAudioClass={questionAudioClass}
        questionTitleClass={questionTitleClass}
      />
      <AudioCallAnswerBtnsBlock
        wordsForGame={wordsForGame[wordNumber]}
        func={checkTrueWordClick}
      />
      <AudioCallEnterBtn func={clickEnterBtn} enterBtnClass={enterBtnClass} />
    </div>
  );
};
