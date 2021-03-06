import React, { useState, useEffect, useCallback } from 'react';
import { turnover, plusAnswer, getRandom } from '../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { SavannaStatistic } from '../SavannaStatisticPage/SavannaStatisticPage';
import { learnCardsSelector } from '../../../../reducers/learnCards/learnCardsReducer';
import './SavannaPlayPage.scss';
import { SavannaAnswers } from '../SavannaAnswersWord/SavannaAnswersPage';
import big_ben_upper from '../SavannaAssets/png/big_ben_upper.png';
import big_ben_down from '../SavannaAssets/png/big_ben_down.png';
import { getDateStringByDate } from '../../../../utilities/getDateStringByDate';
import { actionSavannaSendGameResult } from '../../../../reducers/miniGamesStats/miniGamesStatsActions';
import { miniGamesStatsSelector } from '../../../../reducers/miniGamesStats/miniGamesStatsReducer';
export const SavannaPlay = ({ difficulty }) => {
  const mixCards = (learnCards) => {
    return learnCards.reduce((mixedCardArray, card) => {
      getRandom() > 1 / 2
        ? mixedCardArray.push(card)
        : mixedCardArray.unshift(card);
      return mixedCardArray;
    }, []);
  };
  const blockSize = difficulty;
  const learnCards = useSelector(learnCardsSelector);
  const [isSended, setIsSended] = useState(false);
  const [currentCards, setCurrentCards] = useState(mixCards(learnCards));
  const [blockIndex, setBlockIndex] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(
    parseInt(getRandom() * blockSize),
  );
  const [secondHandDeg, setSecondHandDeg] = useState(90);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(false);
  const [targetWord, setTargetWord] = useState(null);
  const questionNumber = parseInt(currentCards.length / blockSize);
  const dispatch = useDispatch();
  const sendDataToStatistic = useCallback(
    (result) => {
      dispatch(
        actionSavannaSendGameResult({
          SavannaDate: getDateStringByDate(new Date()),
          SavannaResults: parseInt(
            (result.answerNumber / result.questionNumber) * 100,
          ),
        }),
      );
      setIsSended(null);
    },
    [dispatch],
  );
  const {
    miniGames: { savanna: gameStat },
  } = useSelector(miniGamesStatsSelector);
  useEffect(
    () => {
      if (currentAnswer) {
        setCorrectAnswers(plusAnswer(correctAnswers));
      }
      setSecondHandDeg(turnover(secondHandDeg));
      setAnswerIndex(parseInt(getRandom() * blockSize));
      setCurrentAnswer(false);
      setTargetWord(null);
      document.location.href = '#playside';
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [blockIndex],
  );
  const timer = setTimeout(() => {
    setBlockIndex(plusAnswer(blockIndex));
  }, 3000);
  if (currentCards.length < (blockIndex + 1) * blockSize || blockIndex === 10) {
    clearTimeout(timer);
    return (
      <SavannaStatistic
        answerNumber={correctAnswers}
        questionNumber={questionNumber}
        gameStat={gameStat}
        sendDataToStatistic={sendDataToStatistic}
        isSended={isSended}
        setIsSended={setIsSended}
        setCurrentCards={setCurrentCards}
      />
    );
  }
  return [
    <img key="big_ben_upper" src={big_ben_upper} alt="big Ben" />,
    <div key="playside" id="playside"></div>,
    <div key="play_ground" className="game-container">
      <p className="question">
        {currentCards[blockIndex * blockSize + answerIndex].wordTranslate}
      </p>
      <div className="clock">
        <div
          style={{ transform: 'rotate(' + secondHandDeg + 'deg)' }}
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
          setCurrentAnswer={setCurrentAnswer}
          targetWord={targetWord}
          setTargetWord={setTargetWord}
        />
      </div>
    </div>,
    <img key="big_ben_down" src={big_ben_down} alt="big Ben" />,
  ];
};
