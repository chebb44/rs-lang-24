import React from 'react';
import './DictionaryDummyCard.scss';
import cardImage from './../../assets/img/blank.jpg';

const DictionaryDummyCard = ({ message }) => {
  return (
    <div className="dictionary__current-card-view">
      <div className="current-card-view__picture">
        <img src={cardImage} alt="current-word" />
      </div>
      <div className="current-card-view__information">
        <p className="dummy-card__text">{message}</p>
      </div>
    </div>
  );
};

export default DictionaryDummyCard;
