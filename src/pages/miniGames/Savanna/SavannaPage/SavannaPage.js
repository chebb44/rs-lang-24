import React, { useState } from 'react';
import './SavannaPage.scss';
import { SavannaStart } from '../SavannaStartPage/SavannaStartPage';
import { SavannaPlay } from '../SavannaPlayPage/SavannaPLayPage';
localStorage.setItem('SavannaStatisticAnswers', 0);
localStorage.setItem('SavannaStatisticCorrectAnswers', 0);
export const SavannaPage = () => {
  const [SavannaPage, setSavannaPage] = useState('start');
  const [difficulty, setDifficulty] = useState(4);
  return (
    <div className="Savanna-app">
      {SavannaPage === 'playPage' ? (
        <SavannaPlay difficulty={difficulty} />
      ) : (
        <SavannaStart
          setSavannaPage={setSavannaPage}
          setDifficulty={setDifficulty}
        />
      )}
    </div>
  );
};
