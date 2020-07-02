import React from 'react';

export const LearnCardTranslation = ({
  isTranslationOn,
  translation,
  isTranslationShown,
}) => {
  return (
    isTranslationOn &&
    isTranslationShown && <p className="card-text">{translation}</p>
  );
};
