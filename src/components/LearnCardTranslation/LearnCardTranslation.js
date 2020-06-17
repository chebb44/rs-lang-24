import React from 'react';

export const LearnCardTranslation = ({
  isTranslationOn,
  translation,
  isWordSubmitted,
}) => {
  return (
    isTranslationOn &&
    isWordSubmitted && <p className="card-text">{translation}</p>
  );
};
