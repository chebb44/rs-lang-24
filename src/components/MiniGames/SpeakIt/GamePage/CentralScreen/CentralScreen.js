import blank from '../../../../../assets/img/blank.jpg';
import { FILES_URL } from '../../../../../utilities/network/networkConstants';
import { capitalizeFirstLetter } from '../../SpeakItHepler';
import React from 'react';

export const CentralScreen = ({currentCard}) => {
  return (
    <div className="central-screen">
      <div className="central-screen__image">
        <img
          src={currentCard.id === null ? blank : FILES_URL + currentCard.image}
          alt="img"
        />
      </div>
      <div className="translation__block">
        <i className="material-icons md-36 icon__mic">mic</i>
        <div className="central-screen__translation">
          {capitalizeFirstLetter(currentCard.wordTranslate)}
        </div>
      </div>
    </div>
  );
};
