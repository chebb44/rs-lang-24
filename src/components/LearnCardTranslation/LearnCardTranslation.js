import React from 'react';

export const LearnCardTranslation = ({
  isTranslationOn,
  translation,
  isCheckButtonClicked,
  dictionaryMode = false,
}) => {
  if (dictionaryMode) {
    return <h5 className="card-text">{translation}</h5>;
  } else {
    return isTranslationOn && isCheckButtonClicked ? (
      <p className="card-text">{translation}</p>
    ) : null;
  }
};
