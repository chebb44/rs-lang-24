import React, { useState, useCallback } from 'react';
import './QuizGamePage.scss';
import { QuizProgressBar } from '../QuizProgressBar/QuizProgressBar';
import { QuizQuestionContainer } from '../QuizQuestionContainer/QuizQuestionContainer';
import { QuizEnterBtn } from '../QuizEnterBtn/QuizEnterBtn';
import { QuizExitBtn } from '../QuizExitBtn/QuizExitBtn';
import { SHOW_TRUE, MAX_WORDS_FOR_GAME } from '../constants';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { QuizEndGameStatisticModal } from '../QuizEndGameStatisticModal/QuizEndGameStatisticModal';
import { useDispatch } from 'react-redux';
import { actionQuizSendGameResult } from '../../../../reducers/miniGamesStats/miniGamesStatsActions';
import { getDateStringByDate } from '../utilities';
import { actionMarkWord } from '../../../../store/actionsForSaga';
import { NEXT_TRAIN_WORD } from '../../../../sagas/constants';

export const QuizGamePage = ({ redirectToStartScreen, wordsForGame }) => {
  const [wordNumber, setWordNumber] = useState(0);
  const [trueAnswerStatistic, setTrueAnswerStatistic] = useState([]);
  const [falseAnswerStatistic, setFalseAnswerStatistic] = useState([]);
  const [enterBtnClass, setEnterBtnClass] = useState('quiz-enter-btn');
  const [questionTitleClass, setQuestionTitleClass] = useState(
    'quiz-question-title quiz-question-title_visible',
  );
  const dispatch = useDispatch();

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

  const getTrueAnswer = () => {
    let trueWord;
  };

  const setNextGameWord = () => {
    removeClasses();
    if (wordNumber === MAX_WORDS_FOR_GAME) {
      return null;
    }
    setWordNumber(wordNumber + 1);
  };

  const clickEnterBtn = (event) => {
    event.target.innerText ? getTrueAnswer() : setNextGameWord();
  };

  const successAddClasses = (item, SHOW_TRUE) => {
    setQuestionTitleClass('quiz-question-title quiz-question-title_visible');
    setEnterBtnClass('quiz-enter-btn quiz-enter-btn_next');
  };

  const removeClasses = () => {
    setQuestionTitleClass('quiz-question-title');
    setEnterBtnClass('quiz-enter-btn');
  };

  const checkTrueWordClick = (event) => {
    const questionWord = document.getElementById('questionWord');

    if (event.target.value !== questionWord.title) {
      event.target.classList.add('quiz-answer-btn_false');
    }
    if (event.target.value === questionWord.title) {
      successAddClasses(event.target);
    }
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
          timeout={800}
          classNames={{
            enter: 'slide-enter',
            enterActive: 'slide-enter-active',
            exit: 'slide-exit',
            exitActive: 'slide-exit-active',
          }}
        >
          <div className="quiz-game-page__container">
            <QuizQuestionContainer
              wordsForGame={wordsForGame[wordNumber]}
              questionTitleClass={questionTitleClass}
            />
            <QuizEnterBtn func={clickEnterBtn} enterBtnClass={enterBtnClass} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
