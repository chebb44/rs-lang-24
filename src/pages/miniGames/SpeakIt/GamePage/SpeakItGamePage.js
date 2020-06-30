import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  calculateAnswers,
} from '../SpeakItHepler';
import { INIT_CARD } from '../SpeakItConstants';
import { CentralScreen } from './CentralScreen/CentralScreen';
import { Buttons } from './Buttons';
import recognition, {
  startVoxRecognition,
  stopVoxRecognition,
} from '../../../../utilities/speachRecognition';
import SpeakItModalWindow from '../SpeakItModalWindow/SpeakItModalWindow';
import { actionSpeakItSendGameResult } from '../../../../reducers/miniGamesStats/miniGamesStatsActions';
import { getBeginDayTimeStamp } from '../../../../utilities/getBeginDayTimeStamp';
import { loginUser } from '../../../../utilities/network/userAPI';

export const SpeakItGameScreen = function ({ onClickStatsButton }) {
  const dispatch = useDispatch();
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
  const [isUnsupportedBrowser, setIsUnsupportedBrowser] = useState(false);
  const [trainCards, setTrainCards] = useState(
    cardsForCurrentGame.slice(0, 10),
  );
  const [currentCardState, setCurrentCardState] = useState(INIT_CARD);
  const [isGameStarted, setIsGameStarted] = useState(false);
  let gameCardsArray = useRef([]);
  let curGameCard = useRef({});

  const sendDataToStatistic = useCallback(
    (result) => {
      dispatch(
        actionSpeakItSendGameResult({
          dates: getBeginDayTimeStamp(new Date()),
          results: result,
        }),
      );
    },
    [dispatch],
  );

  const endGameHandler = useCallback(() => {
    sendDataToStatistic(calculateAnswers(trainCards));
    setTimeout(() => setModalOpen(true), 1000);
    setIsGameStarted(false);
    stopVoxRecognition();
  }, [sendDataToStatistic, trainCards]);

  const setNewCard = useCallback(() => {
    curGameCard.current = gameCardsArray.current.shift();
    setCurrentCardState(curGameCard.current);
  }, []);

  const gameHandler = useCallback(
    (gameCards) => {
      if (gameCards.length > 0) {
        setNewCard(gameCards);
      } else if (gameCards.length === 0) {
        endGameHandler();
      }
    },
    [endGameHandler, setNewCard],
  );

  const onNewWordRecognise = useCallback(
    (recognised) => {
      const isGuessTheWord = recognised.find(
        (word) => word.toLowerCase() === curGameCard.current.word.toLowerCase(),
      );
      const currentCardIdx = searchCardIndexInArray(
        curGameCard.current._id,
        trainCards,
      );
      if (isGuessTheWord) {
        setTrainCards(setRightCardInArrayByIdx(currentCardIdx, trainCards));
      } else {
        setTrainCards(setWrongCardInArrayByIdx(currentCardIdx, trainCards));
      }
      gameHandler(gameCardsArray.current);
      console.log(isGuessTheWord);
    },
    [gameHandler, trainCards],
  );

  const startVoiceRecognition = useCallback(() => {
    startVoxRecognition();
    recognition.onresult = (event) => {
      const recognised = getRecognisedWordsArrayFromEvent(event);
      onNewWordRecognise(recognised);
    };
  }, [onNewWordRecognise]);

  const initNewGame = useCallback(() => {
    setIsGameStarted(true);
    initCardsView(trainCards);
    gameCardsArray.current = shuffleArray(trainCards);
    setNewCard();
    startVoiceRecognition();
  }, [setNewCard, startVoiceRecognition, trainCards]);

  const onClickSpeakButton = useCallback(() => {
    window.scrollTo(0, 0);
    !recognition && setIsUnsupportedBrowser(true);
    !isGameStarted && recognition && initNewGame();
  }, [initNewGame, isGameStarted]);

  const onClickResetButton = useCallback(() => {
    setIsGameStarted(false);
    stopVoxRecognition();
    initCardsView(trainCards);
    setCurrentCardState(INIT_CARD);
  }, [trainCards]);

  const onCloseModal = useCallback(() => {
    setModalOpen(false);
    initCardsView(trainCards);
    setCurrentCardState(INIT_CARD);
  }, [trainCards]);

  const onClickCard = useCallback(
    (event) => {
      if (!isGameStarted) {
        const cardId = event.currentTarget.dataset.cardid;
        event.currentTarget.children[3] &&
          event.currentTarget.children[3].play();
        const cardIdx = searchCardIndexInArray(cardId, trainCards);
        setCurrentCardState(() => trainCards[cardIdx]);
        setTrainCards(setActiveCardInArray(cardIdx, trainCards));
      }
    },
    [isGameStarted, trainCards],
  );

  const onCloseModalError = useCallback(() => {
    setIsUnsupportedBrowser(false);
    initCardsView(trainCards);
    setCurrentCardState(INIT_CARD);
  }, [trainCards]);

  return (
    <div className="speak-it__game-screen">
      <CentralScreen currentCard={currentCardState} gameMode={isGameStarted} />
      <div className="cards">
        {trainCards.map((card, idx) => (
          <SpeakItCard cardData={card} key={idx} onClickCard={onClickCard} />
        ))}
      </div>
      <Buttons
        onClickSpeakButton={onClickSpeakButton}
        onClickResetButton={onClickResetButton}
        onClickStatsButton={onClickStatsButton}
      />
      {modalOpen && (
        <SpeakItModalWindow
          answers={calculateAnswers(trainCards)}
          onCloseModal={onCloseModal}
          endGame={true}
        />
      )}
      {isUnsupportedBrowser && (
        <SpeakItModalWindow onCloseModal={onCloseModalError} />
      )}
    </div>
  );
};
