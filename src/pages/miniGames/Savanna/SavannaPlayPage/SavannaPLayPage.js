import React, { useState, useEffect } from 'react';
import { turnover, plusAnswer } from '../constants/constants';
import { useSelector } from 'react-redux';
import { SavannaStatistic } from '../SavannaStatisticPage/SavannaStatisticPage';
import { learnCardsSelector } from '../../../../reducers/learnCards/learnCardsReducer';
import './SavannaPlayPage.scss';
import { SavannaAnswers } from '../SavannaAnswersWord/SavannaAnswersPage';
import big_ben_upper from '../SavannaAssets/png/big_ben_upper.png';
import big_ben_down from '../SavannaAssets/png/big_ben_down.png';
export const SavannaPlay = ({ difficulty }) => {
  const mixCards = (learnCards) => {
    let mixedCardArray = [];
    for (let i = 0; i < learnCards.length; i++) {
      if (Math.random > 1 / 2) {
        mixedCardArray.push(learnCards[i]);
      } else {
        mixedCardArray.unshift(learnCards[i]);
      }
    }
    return mixedCardArray;
  };
  const blockSize = difficulty;
  const learnCards = useSelector(learnCardsSelector);
  const currentCards = mixCards(learnCards);
  const [blockIndex, setBlockIndex] = useState(0);
  const answerIndex = parseInt(Math.random() * blockSize);
  const [SavannaTimer, setSavannaTimer] = useState(90);
  const [answerNumber, setAnswerNumber] = useState(0);
  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const questionNumber = parseInt(currentCards.length / blockSize);
  useEffect(() => {
    if (trueOrFalse) {
      setAnswerNumber(plusAnswer(answerNumber));
    }
    setSavannaTimer(turnover(SavannaTimer));
  }, [blockIndex]);
  if (currentCards.length < (blockIndex + 1) * blockSize) {
    return (
      <SavannaStatistic
        answerNumber={answerNumber}
        questionNumber={questionNumber}
      />
    );
  }
  setTimeout(() => {
    setBlockIndex(plusAnswer(blockIndex));
  }, 3000);
  return [
    <img src={big_ben_upper} alt="big Ben" />,
    <div className="game-container">
      <p className="question">
        {currentCards[blockIndex * blockSize + answerIndex].wordTranslate}
      </p>
      <div className="clock">
        <div
          style={{ transform: 'rotate(' + SavannaTimer + 'deg)' }}
          className="arrow"
        >
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="answers">
        <SavannaAnswers
          currentCards={currentCards}
          blockSize={blockSize}
          answerIndex={answerIndex}
          blockIndex={blockIndex}
          trueOrFalse={trueOrFalse}
          setTrueOrFalse={setTrueOrFalse}
        />
      </div>
    </div>,
    <img src={big_ben_down} alt="big Ben" />,
  ];
};
