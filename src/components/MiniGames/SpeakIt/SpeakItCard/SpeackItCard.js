import React from 'react';
import './SpeackItCard.scss';
import SpeakerImage from './SpeakerImage';

export const SpeakItCard = function ({
  word,
  transcription,
  audioSrc,
  onClickCard,
}) {
  const FILES_URL =
    'https://raw.githubusercontent.com/irinainina/rslang-data/master/';

  return (
    <div className="card" onClick={onClickCard}>
      <span className="card__audio-icon">
        <SpeakerImage />
      </span>
      <p className="card__word">{word}</p>
      <p className="card__transcription">{transcription}</p>
      <audio src={FILES_URL + audioSrc} />
    </div>
  );
};
