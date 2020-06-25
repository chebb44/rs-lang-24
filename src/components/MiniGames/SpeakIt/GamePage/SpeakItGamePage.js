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

  const [trainCards, setTrainCards] = useState(
    cardsForCurrentGame.slice(0, 10),
  );
  const [gameCardsArray, setGameCardsArray] = useState([]);
  const [currentCard, setCurrentCard] = useState(INIT_CARD);
  const [gameMode, setGameMode] = useState(false);
  const [recognisedWords, setRecognisedWords] = useState([]);
  // console.log(cardsToLearn, trainCards);

  // TODO: Show and hide results pannel

  const changeCardsOnRightAnswer = useCallback(() => {
    if (gameCardsArray.length > 0) {
      setCurrentCard(gameCardsArray[0]);
      setGameCardsArray(() => {
        const cardsArray = [...gameCardsArray];
        cardsArray.shift();
        return cardsArray;
      });
    } else {
      setGameMode(false);
    }
  }, [gameCardsArray]);

  useEffect(() => {
    if (gameMode) {
      changeCardsOnRightAnswer();
      startVoxRecognition();
      recognition.onresult = (event) => {
        setRecognisedWords(getRecognisedWordsArrayFromEvent(event));
      };
    } else {
      stopVoxRecognition();
    }
  }, [gameMode]);

  useEffect(() => {
    changeCardsOnRightAnswer();
  }, [recognisedWords]);

  useEffect(() => {
    if (gameMode) {
      const currentCardIdx = searchCardIndexInArray(
        currentCard._id,
        trainCards,
      );
      const recogWin = recognisedWords.find(
        (word) => word.toLowerCase() === currentCard.word.toLowerCase(),
      );
      if (recogWin) {
        console.log(currentCardIdx, trainCards, currentCard._id);
        setTrainCards(setRightCardInArrayByIdx(currentCardIdx, trainCards));
      } else {
        setTrainCards(setWrongCardInArrayByIdx(currentCardIdx, trainCards));
      }
      console.log(recogWin);
    }
  }, [recognisedWords]);

  const onClickCard = (event) => {
    if (!gameMode) {
      const cardId = event.currentTarget.dataset.cardid;
      event.currentTarget.children[3] && event.currentTarget.children[3].play();
      const cardIdx = searchCardIndexInArray(cardId, trainCards);
      setCurrentCard(() => trainCards[cardIdx]);
      setTrainCards(setActiveCardInArray(cardIdx, trainCards));
    }
  };

  const onClickSpeakButton = () => {
    setGameMode(true);
    initCardsView(trainCards);
    // setTrainCards(setActiveCardInArray(null, trainCards));
    setCurrentCard(INIT_CARD);
    setGameCardsArray(shuffleArray(trainCards));
  };

  const onClickResetButton = () => {
    setGameMode(false);
    initCardsView(trainCards);
    setCurrentCard(INIT_CARD);
    // TODO: Deactivate microphone icon
  };

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
    </div>
  );
};
