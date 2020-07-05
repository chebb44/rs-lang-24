import React from 'react';
import './DictionaryDummyCard.scss';
import cardImage from './../../assets/img/blank.jpg';

const DictionaryDummyCard = ({ message }) => {
  const MOBILE_WIDTH_BIG = 480;
  return (
    <div className="dictionary__current-card-view">
      {window.screen.availWidth > MOBILE_WIDTH_BIG && (
        <div className="current-card-view__picture">
          <img src={cardImage} alt="current-word" />
        </div>
      )}
      <div className="dummy-card__information">
        <p className="dummy-card__text">{message}</p>
      </div>
    </div>
  );
};

export default DictionaryDummyCard;
