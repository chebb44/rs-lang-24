import React, { useState, useCallback } from 'react';
import './EnglishPuzzleGamePage.scss';
import { EnglishPuzzleProgressBar } from '../EnglishPuzzleProgressBar/EnglishPuzzleProgressBar';
import { EnglishPuzzleEnterBtn } from '../EnglishPuzzleEnterBtn/EnglishPuzzleEnterBtn';
import { EnglishPuzzleExitBtn } from '../EnglishPuzzleExitBtn/EnglishPuzzleExitBtn';
import { MAX_WORDS_FOR_GAME, SHOW_TRUE } from '../constants';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { EnglishPuzzleEndGameStatisticModal } from '../EnglishPuzzleEndGameStatisticModal/EnglishPuzzleEndGameStatisticModal';
import { useDispatch } from 'react-redux';
import { actionEnglishPuzzleSendGameResult } from '../../../../reducers/miniGamesStats/miniGamesStatsActions';
import { getDateStringByDate } from '../utilities';
import { actionMarkWord } from '../../../../store/actionsForSaga';
import { NEXT_TRAIN_WORD } from '../../../../sagas/constants';
import { EnglishPuzzleQuestionContainer } from '../EnglishPuzzleQuestionContainer/EnglishPuzzleQuestionContainer';
import successSrc from '../../../../assets/audio/success.mp3';
import errorSrc from '../../../../assets/audio/error.mp3';

export const EnglishPuzzleGamePage = ({
  redirectToStartScreen,
  wordsForGame,
}) => {
  const [wordNumber, setWordNumber] = useState(0);
  const [trueAnswerStatistic, setTrueAnswerStatistic] = useState([]);
  const [falseAnswerStatistic, setFalseAnswerStatistic] = useState([]);
  const [enterBtnClass, setEnterBtnClass] = useState('englishPuzzle-enter-btn');
  const [playWordSoundValue, setPlayWordSoundValue] = useState(true);
  const [showTranslateWordValue, setShowTranslateWordValue] = useState(true);
  const [showFirstLetterValue, setShowFirstLetterValue] = useState(true); // other helps

  const dispatch = useDispatch();
  const success = new Audio();
  success.src = successSrc;
  const error = new Audio();
  error.src = errorSrc;

  const saveStatistic = useCallback(() => {
    let score = trueAnswerStatistic.length;

    dispatch(
      actionEnglishPuzzleSendGameResult({
        englishPuzzleDate: getDateStringByDate(new Date()),
        englishPuzzleResult: score,
      }),
    );
  }, [dispatch, trueAnswerStatistic.length]);
  const markWordsToNextTrain = useCallback(() => {
    falseAnswerStatistic.map((word) => {
      return dispatch(
        actionMarkWord({
          wordId: word._id || word.id,
          difficulty: NEXT_TRAIN_WORD,
        }),
      );
    });
  }, [dispatch, falseAnswerStatistic]);

  const setNextGameWord = () => {
    if (wordNumber === MAX_WORDS_FOR_GAME) {
      return null;
    }
    setWordNumber(wordNumber + 1);
    removeClasses();
  };

  const clickEnterBtn = (event) => {
    event.target.innerText ? getTrueAnswer() : setNextGameWord();
  };

  const successAddClasses = (SHOW_TRUE) => {
    setEnterBtnClass('englishPuzzle-enter-btn englishPuzzle-enter-btn_next');
  };

  const removeClasses = () => {
    setEnterBtnClass('englishPuzzle-enter-btn');
  };

  const checkTrueWordClick = () => {};

  const getTrueAnswer = () => {
    successAddClasses(SHOW_TRUE);
    setFalseAnswerStatistic([
      ...falseAnswerStatistic,
      wordsForGame[wordNumber],
    ]);
  };

  return wordNumber === MAX_WORDS_FOR_GAME ? (
    <div className="englishPuzzle-game-page">
      <EnglishPuzzleEndGameStatisticModal
        trueAnswerStatistic={trueAnswerStatistic}
        falseAnswerStatistic={falseAnswerStatistic}
        redirectToStartScreen={redirectToStartScreen}
        saveStatistic={saveStatistic}
        markWordsToNextTrain={markWordsToNextTrain}
      />
    </div>
  ) : (
    <div className="englishPuzzle-game-page">
      <EnglishPuzzleProgressBar current={wordNumber} all={MAX_WORDS_FOR_GAME} />
      <EnglishPuzzleExitBtn func={redirectToStartScreen} />
      <SwitchTransition>
        <CSSTransition
          key={wordNumber}
          appear
          timeout={600}
          classNames={{
            enter: 'my-node-enter',
            enterActive: 'my-node-enter-active',
            exit: 'my-node-exit',
            exitActive: 'my-node-exit-active',
          }}
        >
          <div className="englishPuzzle-game-page__container">
            <EnglishPuzzleQuestionContainer
              word={wordsForGame[wordNumber]}
              getTrueAnswer={getTrueAnswer}
              checkTrueWordClick={checkTrueWordClick}
              playWordSoundValue={playWordSoundValue}
              setPlayWordSoundValue={setPlayWordSoundValue}
              showTranslateWordValue={showTranslateWordValue}
              setShowTranslateWordValue={setShowTranslateWordValue}
              showFirstLetterValue={showFirstLetterValue}
              setShowFirstLetterValue={setShowFirstLetterValue}
            />
            <EnglishPuzzleEnterBtn
              func={clickEnterBtn}
              enterBtnClass={enterBtnClass}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
