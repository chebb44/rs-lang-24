import React, { useState } from 'react';
import { Timer } from '../../components/Timer/Timer';
import { Score } from '../../components/Score/Score';
import './SprintMain.scss';
import { CardField } from '../CardField/CardField';
import { learnCardsSelector } from './../../../../../reducers/learnCards/learnCardsReducer';
import { useSelector } from 'react-redux';
import { shuffleCards } from './../../../../../utilities/sprint/shuffleCards';

export const SprintMain = () => {
  const [score, setScore] = useState(600);
  const cards = useSelector(learnCardsSelector);
  const { shuffledCards } = shuffleCards({ cards });
  return (
    <div className="sprint-main-wrapper">
      <div className="sprint-content-wrapper">
        <Score score={score} />
        <Timer />
        <CardField setScore={setScore} cards={shuffledCards} />
      </div>
    </div>
  );
};
