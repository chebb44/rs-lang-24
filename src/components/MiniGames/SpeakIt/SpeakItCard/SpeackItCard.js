import React from 'react';
import './SpeackItCard.scss';
import SpeakerImage from './SpeakerImage';
import { FILES_URL } from '../../../../utilities/network/networkConstants';
import { capitalizeFirstLetter } from '../SpeakItHepler';

export const SpeakItCard = function ({ cardData, onClickCard }) {
  const cardClassName = cardData.active ? 'card active' : 'card';
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
