import React from 'react';

export const LearnCardTranscription = ({
  isTranscriptionOn,
  transcription,
}) => {
  return isTranscriptionOn && <p className="card-text">{transcription}</p>;
};
