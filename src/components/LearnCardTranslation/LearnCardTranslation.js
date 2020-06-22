import React from 'react';

export const LearnCardTranslation = ({
  isTranslationOn,
  translation,
  isCheckButtonClicked,
}) => {
  return (
    isTranslationOn &&
    isCheckButtonClicked && <p className="card-text">{translation}</p>
  );
};
