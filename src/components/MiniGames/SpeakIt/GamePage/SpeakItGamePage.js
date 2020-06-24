import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { learnCardsSelector } from '../../../../reducers/learnCards/learnCardsReducer';
import './SpeakItGamePage.scss';
import blank from './../../../../assets/img/blank.jpg';
import { SpeakItCard } from '../SpeakItCard/SpeackItCard';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

const searchCardIndexInArray = (cardId, cardsArray) => {
  // TODO: implement searchCardIndexInArray by card id function
  return cardsArray.findIndex((card) => card.id === cardId);
};

export const SpeakItGameScreen = function () {
  const learnCards = useSelector(learnCardsSelector);
  const currentGameCards = learnCards.slice(0, 10);
  console.log(currentGameCards);
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
    console.dir(event.currentTarget.dataset.cardid);
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
        {currentGameCards.map((card, idx) => (
          <SpeakItCard cardData={card} key={idx} onClickCard={onClickCard} />
        ))}
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
