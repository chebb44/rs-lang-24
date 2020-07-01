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
      wordTranslate: wordsForGameShuffle[0].wordTranslate,
      position: 1,
      checkFunc: func,
    },
    {
      wordTranslate: wordsForGameShuffle[1].wordTranslate,
      position: 2,
      checkFunc: func,
    },
    {
      wordTranslate: wordsForGameShuffle[2].wordTranslate,
      position: 3,
      checkFunc: func,
    },
    {
      wordTranslate: wordsForGameShuffle[3].wordTranslate,
      position: 4,
      checkFunc: func,
    },
    {
      wordTranslate: wordsForGameShuffle[4].wordTranslate,
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
