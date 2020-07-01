/* eslint-disable no-loop-func */
import React, { useState } from 'react';
export const SavannaAnswers = ({ learnwords, difficulty, answerindex }) => {
  let tab = true;
  const [answers, setAnswers] = useState(0);
  const saveAnswer = (answer) => {
    setAnswers(answers + 1);
    if (localStorage.getItem('SavannaStatisticAnswers') == null) {
      localStorage.setItem('SavannaStatisticAnswers', 0);
      localStorage.setItem('SavannaStatisticCorrectAnswers', 0);
    }
    if (answer) {
      localStorage.setItem(
        'SavannaStatisticAnswers',
        parseInt(localStorage.getItem('SavannaStatisticAnswers')) + 1,
      );
      localStorage.setItem(
        'SavannaStatisticCorrectAnswers',
        parseInt(localStorage.getItem('SavannaStatisticCorrectAnswers')) + 1,
      );
    } else {
      localStorage.setItem(
        'SavannaStatisticAnswers',
        parseInt(localStorage.getItem('SavannaStatisticAnswers')) + 1,
      );
    }
  };
  let AnswersArray = [
    <button
      key={learnwords[answerindex].word}
      type="button"
      className="btn btn-outline-light answer"
      onClick={(event) => {
        if (tab) {
          saveAnswer(true);
          tab = false;
          event.target.className = 'btn btn-warning answer';
        }
      }}
    >
      {learnwords[answerindex].word}
    </button>,
  ];
  for (let i = 0; i < difficulty - 1; i++) {
    let random = Math.random();
    let random_word = learnwords.splice(
      parseInt(random * learnwords.length),
      1,
    )[0].word;
    if (random > 1 / 2) {
      AnswersArray.unshift(
        <button
          key={random}
          type="button"
          className="btn btn-outline-light answer"
          onClick={(event) => {
            if (tab) {
              saveAnswer(true);
              tab = false;
              event.target.className = 'btn btn-warning answer';
            }
          }}
        >
          {random_word}
        </button>,
      );
    } else {
      AnswersArray.push(
        <button
          key={random}
          type="button"
          className="btn btn-outline-light answer"
          onClick={(event) => {
            if (tab) {
              saveAnswer(true);
              tab = false;
              event.target.className = 'btn btn-warning answer';
            }
          }}
        >
          {random_word}
        </button>,
      );
    }
  }
  return AnswersArray;
};
