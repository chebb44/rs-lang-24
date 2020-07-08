import React, { useState, useCallback } from 'react';
import './QuizGamePage.scss';
import { QuizProgressBar } from '../QuizProgressBar/QuizProgressBar';
import { QuizEnterBtn } from '../QuizEnterBtn/QuizEnterBtn';
import { QuizExitBtn } from '../QuizExitBtn/QuizExitBtn';
import { MAX_WORDS_FOR_GAME, SHOW_TRUE } from '../constants';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { QuizEndGameStatisticModal } from '../QuizEndGameStatisticModal/QuizEndGameStatisticModal';
import { useDispatch } from 'react-redux';
import { actionQuizSendGameResult } from '../../../../reducers/miniGamesStats/miniGamesStatsActions';
import { getDateStringByDate } from '../utilities';
import { actionMarkWord } from '../../../../store/actionsForSaga';
import { NEXT_TRAIN_WORD } from '../../../../sagas/constants';
import { QuizQuestionContainer } from '../QuizQuestionContainer/QuizQuestionContainer';
import successSrc from '../../../../assets/audio/success.mp3';
import errorSrc from '../../../../assets/audio/error.mp3';

export const QuizGamePage = ({ redirectToStartScreen, wordsForGame }) => {
  const [wordNumber, setWordNumber] = useState(0);
  const [trueAnswerStatistic, setTrueAnswerStatistic] = useState([]);
  const [falseAnswerStatistic, setFalseAnswerStatistic] = useState([]);
  const [enterBtnClass, setEnterBtnClass] = useState('quiz-enter-btn');
  const [inputValue, setInputValue] = useState('');
  const [playWordSoundValue, setPlayWordSoundValue] = useState(true);
  const [showTranslateWordValue, setShowTranslateWordValue] = useState(true);
  const [showFirstLetterValue, setShowFirstLetterValue] = useState(true);
  const [inputWordClass, setInputWordClass] = useState(
    'form-control m-auto quiz-question-input__entered-word',
  );

  const dispatch = useDispatch();
  const success = new Audio();
  success.src = successSrc;
  const error = new Audio();
  error.src = errorSrc;

  const saveStatistic = useCallback(() => {
    let score = trueAnswerStatistic.length;

    dispatch(
      actionQuizSendGameResult({
        quizDate: getDateStringByDate(new Date()),
        quizResult: score,
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
    setInputValue('');
    removeClasses();
  };

  const clickEnterBtn = (event) => {
    event.target.innerText ? getTrueAnswer() : setNextGameWord();
  };

  const successAddClasses = (SHOW_TRUE) => {
    setEnterBtnClass('quiz-enter-btn quiz-enter-btn_next');
    return !SHOW_TRUE
      ? setInputWordClass(
          'form-control m-auto quiz-question-input__entered-word quiz-question-input__entered-word_success',
        )
      : null;
  };

  const removeClasses = () => {
    setEnterBtnClass('quiz-enter-btn');
    setInputWordClass('form-control m-auto quiz-question-input__entered-word');
  };

  const checkTrueWordClick = () => {
    if (
      wordsForGame[wordNumber].word.toLowerCase() === inputValue.toLowerCase()
    ) {
      success.play();
      successAddClasses();
      setTrueAnswerStatistic([
        ...trueAnswerStatistic,
        wordsForGame[wordNumber],
      ]);
    } else {
      error.play();
    }
  };

  const getTrueAnswer = () => {
    setInputValue(wordsForGame[wordNumber].word);
    successAddClasses(SHOW_TRUE);
    setFalseAnswerStatistic([
      ...falseAnswerStatistic,
      wordsForGame[wordNumber],
    ]);
  };

  return wordNumber === MAX_WORDS_FOR_GAME ? (
    <div className="quiz-game-page">
      <QuizEndGameStatisticModal
        trueAnswerStatistic={trueAnswerStatistic}
        falseAnswerStatistic={falseAnswerStatistic}
        redirectToStartScreen={redirectToStartScreen}
        saveStatistic={saveStatistic}
        markWordsToNextTrain={markWordsToNextTrain}
      />
    </div>
  ) : (
    <div className="quiz-game-page">
      <QuizProgressBar current={wordNumber} all={MAX_WORDS_FOR_GAME} />
      <QuizExitBtn func={redirectToStartScreen} />
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
          <div className="quiz-game-page__container">
            <QuizQuestionContainer
              word={wordsForGame[wordNumber]}
              setInputValue={setInputValue}
              getTrueAnswer={getTrueAnswer}
              inputValue={inputValue}
              inputWordClass={inputWordClass}
              checkTrueWordClick={checkTrueWordClick}
              playWordSoundValue={playWordSoundValue}
              setPlayWordSoundValue={setPlayWordSoundValue}
              showTranslateWordValue={showTranslateWordValue}
              setShowTranslateWordValue={setShowTranslateWordValue}
              showFirstLetterValue={showFirstLetterValue}
              setShowFirstLetterValue={setShowFirstLetterValue}
            />
            <QuizEnterBtn func={clickEnterBtn} enterBtnClass={enterBtnClass} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
