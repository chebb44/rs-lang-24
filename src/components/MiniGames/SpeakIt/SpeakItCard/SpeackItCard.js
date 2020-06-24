import React from 'react';
import './SpeackItCard.scss';
import SpeakerImage from './SpeakerImage';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

export const SpeakItCard = function ({ cardData, onClickCard }) {
  return (
    <div className="card" onClick={onClickCard} datacardid={cardData.id}>
      <span className="card__audio-icon">
        <SpeakerImage />
      </span>
      <p className="card__word">{cardData.word}</p>
      <p className="card__transcription">{cardData.transcription}</p>
      <audio src={FILES_URL + cardData.audio} />
    </div>
  );
};
