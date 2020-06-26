import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { learnCardsSelector } from '../../../../reducers/learnCards/learnCardsReducer';
import { dictionaryStateStateSelector } from '../../../../reducers/dictionaryReducer/dictionaryReducer';
import './SpeakItGamePage.scss';
import { SpeakItCard } from '../SpeakItCard/SpeackItCard';
import {
  getRecognisedWordsArrayFromEvent,
  searchCardIndexInArray,
  setActiveCardInArray,
  shuffleArray,
  setRightCardInArrayByIdx,
  setWrongCardInArrayByIdx,
  initCardsView,
  makeUniqueObjectsArray,
} from '../SpeakItHepler';
import { INIT_CARD } from '../SpeakItConstants';
import { CentralScreen } from './CentralScreen/CentralScreen';
import { Buttons } from './Buttons';
import recognition, {
  startVoxRecognition,
  stopVoxRecognition,
} from '../../../../utilities/speachRecognition';
import SpeakItModalWindow from '../SpeakItModalWindow/SpeakItModalWindow';

export const SpeakItGameScreen = function () {
  const dictionary = useSelector(dictionaryStateStateSelector);
  const learnedWords = [
    ...dictionary.learnedWords,
    ...dictionary.hardWords,
    ...dictionary.nextTrainWords,
  ];
  const cardsToLearn = useSelector(learnCardsSelector);
  const cardsForCurrentGame =
    learnedWords.length > 9
      ? shuffleArray(learnedWords)
      : shuffleArray(
          makeUniqueObjectsArray([
            ...learnedWords,
            ...shuffleArray(cardsToLearn).slice(0, 10),
          ]),
        );

  const [modalOpen, setModalOpen] = useState(false);
  const [trainCards, setTrainCards] = useState(
    cardsForCurrentGame.slice(0, 10),
  );
  const [gameCardsArray, setGameCardsArray] = useState([]);
  const [currentCard, setCurrentCard] = useState(INIT_CARD);
  const [gameMode, setGameMode] = useState(false);
  const [recognisedWords, setRecognisedWords] = useState([]);

  const changeCardsArrayOnRightAnswer = useCallback(() => {
    if (gameCardsArray.length > 0) {
      console.log(gameCardsArray);
      setCurrentCard(gameCardsArray[0]);
      setGameCardsArray(() => {
        const cardsArray = [...gameCardsArray];
        cardsArray.shift();
        return cardsArray;
      });
    } else if (gameMode && gameCardsArray.length === 0) {
      setTimeout(() => setModalOpen(true), 1000);
      setGameMode(false);
    }
  }, [gameCardsArray, gameMode]);

  const stopGame = useCallback(() => {
    stopVoxRecognition();
  }, []);

  // useEffect(() => {
  //   if (gameMode) {
  //     changeCardsArrayOnRightAnswer();
  //     startVoxRecognition();
  //     recognition.onresult = (event) => {
  //       setRecognisedWords(getRecognisedWordsArrayFromEvent(event));
  //     };
  //   } else {
  //     stopVoxRecognition();
  //   }
  //   //eslint-disable-next-line
  // }, [gameMode]);

  // useEffect(() => {
  //   changeCardsArrayOnRightAnswer();
  //   //eslint-disable-next-line
  // }, [recognisedWords]);

  // useEffect(() => {
  //   if (gameMode) {
  //     const currentCardIdx = searchCardIndexInArray(
  //       currentCard._id,
  //       trainCards,
  //     );
  //     const recogWin = recognisedWords.find(
  //       (word) => word.toLowerCase() === currentCard.word.toLowerCase(),
  //     );
  //     if (recogWin) {
  //       console.log(currentCardIdx, trainCards, currentCard._id);
  //       setTrainCards(setRightCardInArrayByIdx(currentCardIdx, trainCards));
  //     } else {
  //       setTrainCards(setWrongCardInArrayByIdx(currentCardIdx, trainCards));
  //     }
  //     console.log(recogWin);
  //   }
  //   //eslint-disable-next-line
  // }, [recognisedWords]);

  const onNewWordRecognise = useCallback(() => {
    if (gameMode) {
      changeCardsArrayOnRightAnswer();
      const currentCardIdx = searchCardIndexInArray(
        currentCard._id,
        trainCards,
      );
      const recogWin = recognisedWords.find(
        (word) => word.toLowerCase() === currentCard.word.toLowerCase(),
      );
      if (recogWin) {
        setTrainCards(setRightCardInArrayByIdx(currentCardIdx, trainCards));
      } else {
        setTrainCards(setWrongCardInArrayByIdx(currentCardIdx, trainCards));
      }
      console.log(recogWin);
    }
  }, [
    changeCardsArrayOnRightAnswer,
    currentCard._id,
    currentCard.word,
    gameMode,
    recognisedWords,
    trainCards,
  ]);

  const startGame = useCallback(() => {
    console.log('startgame');
    changeCardsArrayOnRightAnswer();
    startVoxRecognition();
    recognition.onresult = (event) => {
      setRecognisedWords(getRecognisedWordsArrayFromEvent(event));
      onNewWordRecognise();
    };
  }, [changeCardsArrayOnRightAnswer, onNewWordRecognise]);

  const onClickCard = useCallback(
    (event) => {
      if (!gameMode) {
        const cardId = event.currentTarget.dataset.cardid;
        event.currentTarget.children[3] &&
          event.currentTarget.children[3].play();
        const cardIdx = searchCardIndexInArray(cardId, trainCards);
        setCurrentCard(() => trainCards[cardIdx]);
        setTrainCards(setActiveCardInArray(cardIdx, trainCards));
      }
    },
    [gameMode, trainCards],
  );

  const makeGameCardsArray = useCallback(() => {
    setGameCardsArray(shuffleArray(trainCards));
  }, [trainCards]);

  const onClickSpeakButton = useCallback(() => {
    setGameMode(true);
    makeGameCardsArray();
    console.log(gameCardsArray);
    initCardsView(trainCards);
    // setCurrentCard(INIT_CARD);
    startGame();
  }, [trainCards, gameCardsArray, startGame]);

  const onClickResetButton = useCallback(() => {
    setGameMode(false);
    stopGame();
    initCardsView(trainCards);
    setCurrentCard(INIT_CARD);
  }, [stopGame, trainCards]);

  const onCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div className="speak-it__game-screen">
      <div className="game-score" />
      <CentralScreen currentCard={currentCard} gameMode={gameMode} />
      <div className="cards">
        {trainCards.map((card, idx) => (
          <SpeakItCard cardData={card} key={idx} onClickCard={onClickCard} />
        ))}
      </div>
      <Buttons
        onClickSpeakButton={onClickSpeakButton}
        onClickResetButton={onClickResetButton}
      />
      {modalOpen && <SpeakItModalWindow onCloseModal={onCloseModal} />}
    </div>
  );
};
