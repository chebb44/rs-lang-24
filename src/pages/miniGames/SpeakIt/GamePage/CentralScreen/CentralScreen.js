import blank from '../../../../../assets/img/blank.jpg';
import { FILES_URL } from '../../../../../utilities/network/networkConstants';
import { capitalizeFirstLetter } from '../../SpeakItHepler';
import React from 'react';
import { MicIcon } from '../../SpeakItCard/SpeakItImagesSvg';
import './CentralScreen.scss';

export const CentralScreen = ({ currentCard, gameMode }) => {
  return (
    <div className="central-screen">
      <div className="central-screen__image">
        <img
          src={currentCard.id === null ? blank : FILES_URL + currentCard.image}
          alt="img"
        />
      </div>
      <div className="translation__block">
        <MicIcon gameMode={gameMode} />
        <div className="central-screen__translation">
          {capitalizeFirstLetter(currentCard.wordTranslate)}
        </div>
      </div>
    </div>
  );
};
