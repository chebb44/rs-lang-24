import React from 'react';
import './AudioCallAnswerBtnsBlock.scss';
import { AudioCallAnswerBtn } from '../AudioCallAnswerBtn/AudioCallAnswerBtn';
import { shuffleArray } from '../utilities';

export const AudioCallAnswerBtnsBlock = ({ wordsForGame }) => {
  wordsForGame = shuffleArray(wordsForGame);
  const btnList = [
    {
      word: wordsForGame[0].word,
      position: 1,
    },
    {
      word: wordsForGame[1].word,
      position: 2,
    },
    {
      word: wordsForGame[2].word,
      position: 3,
    },
    {
      word: wordsForGame[3].word,
      position: 4,
    },
    {
      word: wordsForGame[4].word,
      position: 5,
    },
  ];

  return (
    <div className="audio-call-answer-btns-block">
      {btnList.map((item, index) => (
        <AudioCallAnswerBtn item={item} key={index} />
      ))}
    </div>
  );
};
