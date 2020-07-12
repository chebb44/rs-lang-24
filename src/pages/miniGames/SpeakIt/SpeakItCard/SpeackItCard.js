import React from 'react';
import './SpeackItCard.scss';
import SpeakerImage from './SpeakItImagesSvg';
import { FILES_URL } from '../../../../utilities/network/networkConstants';
import { capitalizeFirstLetter } from '../SpeakItHepler';

export const SpeakItCard = function ({ cardData, onClickCard }) {
  let cardClassName = cardData.active ? 'card active' : 'card';
  cardClassName = cardData.right ? `${cardClassName} right` : cardClassName;
  cardClassName = cardData.wrong ? `${cardClassName} wrong` : cardClassName;
  return (
    <div
      className={cardClassName}
      onClick={onClickCard}
      data-cardid={cardData._id}
    >
      <span className="card__audio-icon">
        <SpeakerImage />
      </span>
      <p className="card__word">{capitalizeFirstLetter(cardData.word)}</p>
      <p className="card__transcription">{cardData.transcription}</p>
      <audio src={FILES_URL + cardData.audio} />
    </div>
  );
};
