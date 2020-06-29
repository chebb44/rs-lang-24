import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SavannaStatistic } from '../SavannaStatisticPage/SavannaStatisticPage';
import { learnCardsSelector } from '../../../../reducers/learnCards/learnCardsReducer';
import './SavannaPlayPage.scss';
import { SavannaAnswers } from '../SavannaAnswersWord/SavannaAnswersPage';
import big_ben_upper from '../SavannaAssets/png/big_ben_upper.png';
import big_ben_down from '../SavannaAssets/png/big_ben_down.png';
export const SavannaPlay = ({ difficulty }) => {
  const [SavannaTimer, setSavannaTimer] = useState(90);
  const Difficulty = difficulty;
  const learnCards = useSelector(learnCardsSelector);
  if (learnCards.length < Difficulty - 1) {
    return SavannaStatistic(``);
  }
  let random_index = parseInt(Math.random() * learnCards.length);
  if (SavannaTimer === 90) {
    setTimeout(() => {
      setSavannaTimer(SavannaTimer + 360);
    }, 10);
  }
  const TimerId = setTimeout(() => {
    setSavannaTimer(SavannaTimer + 360);
  }, 3000);
  return [
    <img src={big_ben_upper} alt="big Ben" />,
    <div className="game-container">
      <p className="question">{learnCards[random_index].wordTranslate}</p>
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
          learnwords={learnCards}
          difficulty={Difficulty}
          answerindex={random_index}
        />
      </div>
    </div>,
    <img src={big_ben_down} alt="big Ben" />,
  ];
};
