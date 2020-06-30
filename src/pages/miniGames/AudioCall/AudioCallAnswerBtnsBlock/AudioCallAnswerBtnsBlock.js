import React, { useEffect, useState } from 'react';
import './AudioCallAnswerBtnsBlock.scss';
import { AudioCallAnswerBtn } from '../AudioCallAnswerBtn/AudioCallAnswerBtn';
import { shuffleArray } from '../utilities';

export const AudioCallAnswerBtnsBlock = ({ wordsForGame, func }) => {
  const [wordsForGameShuffle, setWordsForGameShuffle] = useState([
    '',
    '',
    '',
    '',
    '',
  ]);

  useEffect(() => {
    setWordsForGameShuffle(shuffleArray(wordsForGame));
  }, [wordsForGame]);
  const btnList = [
    {
      word: wordsForGameShuffle[0].word,
      position: 1,
      checkFunc: func,
    },
    {
      word: wordsForGameShuffle[1].word,
      position: 2,
      checkFunc: func,
    },
    {
      word: wordsForGameShuffle[2].word,
      position: 3,
      checkFunc: func,
    },
    {
      word: wordsForGameShuffle[3].word,
      position: 4,
      checkFunc: func,
    },
    {
      word: wordsForGameShuffle[4].word,
      position: 5,
      checkFunc: func,
    },
  ];

  return (
    <div className="audio-call-answer-btns-block">
      <form>
        {btnList.map((item, index) => (
          <AudioCallAnswerBtn item={item} key={index} />
        ))}
      </form>
    </div>
  );
};
