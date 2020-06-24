import React, { useEffect, useState } from 'react';
import { Timer } from '../../components/Timer/Timer';
import { Score } from '../../components/Score/Score';
import './SprintMain.scss';
import { CardField } from '../CardField/CardField';
import { learnCardsSelector } from '../../../../../reducers/learnCards/learnCardsReducer';
import { useSelector } from 'react-redux';
import { shuffleCards } from '../../../../../utilities/sprint/shuffleCards';

export const SprintMain = () => {
  const cards = useSelector(learnCardsSelector);
  const [score, setScore] = useState(0);
  const [gameCards, setGameCards] = useState(cards);
  useEffect(() => {
    const { shuffledCards } = shuffleCards({ cards });
    setGameCards(shuffledCards);
    console.log('cards shuffled');
  }, [cards]);
  return (
    <div className="sprint-main-wrapper">
      <div className="sprint-content-wrapper">
        <Score score={score} />
        <Timer />
        <CardField score={score} setScore={setScore} cards={gameCards} />
      </div>
    </div>
  );
};
