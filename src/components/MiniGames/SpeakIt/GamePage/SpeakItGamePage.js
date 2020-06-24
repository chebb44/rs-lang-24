import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { learnCardsSelector } from '../../../../reducers/learnCards/learnCardsReducer';
import { dictionaryStateStateSelector } from '../../../../reducers/dictionaryReducer/dictionaryReducer';
import './SpeakItGamePage.scss';
import blank from './../../../../assets/img/blank.jpg';
import { SpeakItCard } from '../SpeakItCard/SpeackItCard';
import { FILES_URL } from '../../../../utilities/network/networkConstants';
import {
  capitalizeFirstLetter,
  getRecognisedWordsArrayFromEvent,
  searchCardIndexInArray,
  setActiveCardInArray,
  shuffleArray,
} from '../SpeakItHepler';
import { INIT_CARD } from '../SpeakItConstants';
import { CentralScreen } from './CentralScreen/CentralScreen';
import { Buttons } from './Buttons';
import recognition, {
  startVoxRecognition,
  stopVoxRecognition,
} from '../../../../utilities/speachRecognition';

export const SpeakItGameScreen = function () {
  const speakDictionary = useSelector(dictionaryStateStateSelector);
  const learnCards = useSelector(learnCardsSelector);
  const cardsToTrain = learnCards.slice(0, 10);
  const [trainCards, setTrainCards] = useState(cardsToTrain);
  const [gameCardsArray, setGameCardsArray] = useState(
    shuffleArray(cardsToTrain),
  );
  const [currentCard, setCurrentCard] = useState(INIT_CARD);
  const [gameMode, setGameMode] = useState(false);
  const [recognisedWords, setRecognisedWords] = useState([]);
  console.log(cardsToTrain, speakDictionary);

  // TODO: Show and hide results pannel
  // TODO: Show and hide microphone icon

  useEffect(() => {
    if (gameMode) {
      // TODO: setCurrentCard  .shift() from gameCardsArray
      startVoxRecognition();
      recognition.onresult = (event) => {
        setRecognisedWords(getRecognisedWordsArrayFromEvent(event));
      };
    } else {
      stopVoxRecognition();
    }
  }, [gameMode]);

  useEffect(() => {
    const recogWin = recognisedWords.find(
      (word) => word.toLowerCase() === currentCard.word.toLowerCase(),
    );
    if (recogWin) {
      // TODO: Mark card inactive(orGreen)
      //  setCurrentCard to next card
      //  .shift() from gameCardsArray first element
    }
    console.log(recogWin);
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
    setTrainCards(setActiveCardInArray(null, trainCards));
    setCurrentCard(INIT_CARD);
  };

  const onClickResetButton = () => {
    setGameMode(false);
    setTrainCards(setActiveCardInArray(null, trainCards));
    setCurrentCard(INIT_CARD);
    // TODO: Deactivate microphone icon
  };

  return (
    <div className="speak-it__game-screen">
      <div className="game-score" />
      <CentralScreen currentCard={currentCard} />
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
