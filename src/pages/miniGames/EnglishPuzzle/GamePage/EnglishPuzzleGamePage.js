import React, { useState, useCallback, useEffect } from 'react';
import './EnglishPuzzleGamePage.scss';
import { EnglishPuzzleProgressBar } from '../EnglishPuzzleProgressBar/EnglishPuzzleProgressBar';
import { EnglishPuzzleEnterBtn } from '../EnglishPuzzleEnterBtn/EnglishPuzzleEnterBtn';
import { EnglishPuzzleExitBtn } from '../EnglishPuzzleExitBtn/EnglishPuzzleExitBtn';
import { MAX_WORDS_FOR_GAME, SHOW_TRUE } from '../constants';
import { EnglishPuzzleEndGameStatisticModal } from '../EnglishPuzzleEndGameStatisticModal/EnglishPuzzleEndGameStatisticModal';
import { useDispatch } from 'react-redux';
import { actionEnglishPuzzleSendGameResult } from '../../../../reducers/miniGamesStats/miniGamesStatsActions';
import { getDateStringByDate, shuffleArray } from '../utilities';
import { actionMarkWord } from '../../../../store/actionsForSaga';
import { NEXT_TRAIN_WORD } from '../../../../sagas/constants';
import { EnglishPuzzleQuestionContainer } from '../EnglishPuzzleQuestionContainer/EnglishPuzzleQuestionContainer';
import successSrc from '../../../../assets/audio/success.mp3';
import errorSrc from '../../../../assets/audio/error.mp3';
import { EnglishPuzzleImagePuzzleContainer } from '../EnglishPuzzleImagePuzzleContainer/EnglishPuzzleImagePuzzleContainer';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

export const EnglishPuzzleGamePage = ({
  redirectToStartScreen,
  wordsForGame,
}) => {
  const [wordNumber, setWordNumber] = useState(0);
  const [currentWord, setCurrentWord] = useState(false);
  const [currentWordShuffled, setCurrentWordShuffled] = useState(false);
  const [selectedWords, setSelectedWords] = useState(false);
  const [trueAnswerStatistic, setTrueAnswerStatistic] = useState([]);
  const [falseAnswerStatistic, setFalseAnswerStatistic] = useState([]);
  const [enterBtnClass, setEnterBtnClass] = useState(
    'english-puzzle-enter-btn',
  );
  const [autoPlayWordSound, setAutoPlayWordSound] = useState(false);
  const [showTranslateWord, setShowTranslateWord] = useState(true);
  const [playWordSound, setPlayWordSound] = useState(true);
  const [showBackground, setShowBackground] = useState(true);

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
      setTrueAnswerStatistic([
        ...trueAnswerStatistic,
        wordsForGame[wordNumber],
      ]);
      return null;
    } else {
      setWordNumber(wordNumber + 1);
      removeClasses();
    }
  };

  const clickEnterBtn = (event) => {
    event.target.innerText ? getTrueAnswer() : setNextGameWord();
  };

  const successAddClasses = (SHOW_TRUE) => {
    if (!SHOW_TRUE) {
      success.play();

      setTrueAnswerStatistic([
        ...trueAnswerStatistic,
        wordsForGame[wordNumber],
      ]);
    }
    setEnterBtnClass('english-puzzle-enter-btn english-puzzle-enter-btn_next');
  };

  const removeClasses = () => {
    setEnterBtnClass('english-puzzle-enter-btn');
    const questionArea = document.getElementById('questionArea');
    questionArea.classList.remove('english-puzzle-text-item_pointer');
  };

  const getWordForGame = () => {
    if (wordNumber === MAX_WORDS_FOR_GAME) {
      return null;
    } else {
      const { textMeaning } = wordsForGame[wordNumber];
      const regexpTags = new RegExp(`<i>|<\\/i>`, 'g');
      let textArray = textMeaning.replace(regexpTags, '').split(' ');
      setCurrentWord(textArray);
      const word = shuffleArray(textArray);
      setCurrentWordShuffled(word);
    }
  };

  useEffect(() => {
    getWordForGame();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordNumber]);

  const checkTrueAnswer = () => {
    if (wordNumber === MAX_WORDS_FOR_GAME) {
      return null;
    } else {
      if (selectedWords && currentWord) {
        if (selectedWords.length === currentWord.length) {
          const checkedArea = document.getElementById('checkedArea');
          const wordsForCheck = checkedArea.innerText
            .replace(/\s+/g, ' ')
            .split(' ');
          for (let i = 0; i < wordsForCheck.length; i += 1) {
            for (let j = 0; j < currentWord.length; j += 1) {
              if (wordsForCheck[i] === currentWord[i]) {
                checkedArea.children[i].classList.add(
                  'english-puzzle-text-item__word_true',
                );
              } else {
                checkedArea.children[i].classList.add(
                  'english-puzzle-text-item__word_false',
                );
              }
            }
          }
          if (wordsForCheck.join() === currentWord.join()) {
            successAddClasses();
          }
        }
      }
    }
  };

  useEffect(() => {
    checkTrueAnswer();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedWords]);

  const getTrueAnswer = () => {
    const checkedArea = document.getElementById('checkedArea');
    checkedArea.innerHTML = ' ';

    currentWord.map((item, index) => {
      const trueWord = document.createElement('div');
      trueWord.className = 'english-puzzle-text-item__word';
      trueWord.style.flexGrow = `${item.length}`;
      trueWord.style.flexBasis = 0;
      trueWord.innerText = item;
      return checkedArea.appendChild(trueWord);
    });

    const questionArea = document.getElementById('questionArea');
    questionArea.classList.add('english-puzzle-text-item_pointer');

    successAddClasses(SHOW_TRUE);
    setFalseAnswerStatistic([
      ...falseAnswerStatistic,
      wordsForGame[wordNumber],
    ]);
  };

  const autoPlayNextText = () => {
    if (wordNumber === MAX_WORDS_FOR_GAME) {
      return null;
    } else {
      if (autoPlayWordSound) {
        const { audioMeaning } = wordsForGame[wordNumber];
        const audioWord = new Audio();
        audioWord.src = `${FILES_URL}${audioMeaning}`;
        audioWord.play();
      }
    }
  };

  useEffect(() => {
    autoPlayNextText();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlayWordSound, currentWord]);

  return wordNumber === MAX_WORDS_FOR_GAME ? (
    <div className="english-puzzle-game-page">
      <EnglishPuzzleEndGameStatisticModal
        trueAnswerStatistic={trueAnswerStatistic}
        falseAnswerStatistic={falseAnswerStatistic}
        redirectToStartScreen={redirectToStartScreen}
        saveStatistic={saveStatistic}
        markWordsToNextTrain={markWordsToNextTrain}
      />
    </div>
  ) : (
    <div className="english-puzzle-game-page">
      <EnglishPuzzleProgressBar current={wordNumber} all={MAX_WORDS_FOR_GAME} />
      <EnglishPuzzleExitBtn func={redirectToStartScreen} />
      <div className="english-puzzle-game-page__container">
        <EnglishPuzzleQuestionContainer
          word={wordsForGame[wordNumber]}
          getTrueAnswer={getTrueAnswer}
          autoPlayWordSound={autoPlayWordSound}
          setAutoPlayWordSound={setAutoPlayWordSound}
          showTranslateWord={showTranslateWord}
          setShowTranslateWord={setShowTranslateWord}
          playWordSound={playWordSound}
          setPlayWordSound={setPlayWordSound}
          showBackground={showBackground}
          setShowBackground={setShowBackground}
        />
        {currentWordShuffled ? (
          <EnglishPuzzleImagePuzzleContainer
            wordNumber={wordNumber}
            wordsForGame={wordsForGame}
            currentWordShuffled={currentWordShuffled}
            setSelectedWords={setSelectedWords}
          />
        ) : null}
        <EnglishPuzzleEnterBtn
          func={clickEnterBtn}
          enterBtnClass={enterBtnClass}
        />
      </div>
    </div>
  );
};
