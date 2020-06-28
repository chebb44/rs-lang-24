import React from 'react';
import './AudioCallAnswerBtnsBlock.scss';
import { AudioCallAnswerBtn } from '../AudioCallAnswerBtn/AudioCallAnswerBtn';

export const AudioCallAnswerBtnsBlock = ({
  mapWords = ['exa', 'exam', 'examp', 'exampl', 'example'],
}) => {
  const btnList = [
    {
      word: mapWords[0],
      position: 1,
    },
    {
      word: mapWords[1],
      position: 2,
    },
    {
      word: mapWords[2],
      position: 3,
    },
    {
      word: mapWords[3],
      position: 4,
    },
    {
      word: mapWords[4],
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
