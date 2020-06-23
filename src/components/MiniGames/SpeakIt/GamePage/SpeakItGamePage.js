import React, { useState } from 'react';
import './SpeakItGamePage.scss';
import blank from './../../../../assets/img/blank.jpg';
import { SpeakItCard } from '../SpeakItCard/SpeackItCard';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

const searchCardIndexInArray = (cardId, cardsArray) => {
  // TODO: implement searchCardIndexInArray by card id function
  return
}

export const SpeakItGameScreen = function () {
  const [currentCard, setCurrentCard] = useState({
    id: null,
    group: 0,
    page: 0,
    word: ' ',
    image: 'files/01_0005.jpg',
    wordTranslate: ' ',
  });

  const onClickCard = (event) => {
    event.currentTarget.children[3] && event.currentTarget.children[3].play();
    // TODO: set current card from cards array by cardId
    //  Use searchCardIndexInArray function
    // setCurrentCard(() => )
  };

  return (
    <div className="speak-it__game-screen">
      <div className="game-score" />
      <div className="central-screen">
        <div className="central-screen__image">
          <img src={currentCard.id === null ? blank : FILES_URL + currentCard.image} alt="img" />
        </div>
        <div className="translation__block">
          <i className="material-icons md-36 icon__mic">mic</i>
          <div className="central-screen__translation">
            {currentCard.wordTranslate}
          </div>
        </div>
      </div>
      <div className="cards">
        <SpeakItCard
          cardData={{
            id: '5e9f5ee35eb9e72bc21af4a2',
            group: 0,
            page: 0,
            word: 'boat',
            image: 'files/01_0005.jpg',
            audio: 'files/01_0005.mp3',
            audioMeaning: 'files/01_0005_meaning.mp3',
            audioExample: 'files/01_0005_example.mp3',
            textMeaning: 'A <i>boat</i> is a vehicle that moves across water.',
            textExample: 'There is a small <b>boat</b> on the lake.',
            transcription: '[bout]',
            textExampleTranslate: 'На озере есть маленькая лодка',
            textMeaningTranslate:
              'Лодка - это транспортное средство, которое движется по воде',
            wordTranslate: 'лодка',
            wordsPerExampleSentence: 8,
          }}
          onClickCard={onClickCard}
        />
      </div>
      <div className="buttons">
        <button className="btn btn_speak-it btn_small button__reset active">
          Сброс
        </button>
        <button className="btn btn_speak-it btn_wide button__speak-please">
          SPEAK IT
        </button>
        <button className="btn btn_speak-it btn_small button__result">
          Результаты
        </button>
      </div>
    </div>
  );
};
