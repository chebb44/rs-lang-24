import React from 'react';

export const LearnCardMeaning = ({
  isMeaningOn,
  isTranslationOn,
  meaning,
  meaningTranslation,
  isWordSubmitted,
}) => {
  return (
    <>
      {isMeaningOn && <p className="card-text">{meaning}</p>}
      {isMeaningOn && isTranslationOn && isWordSubmitted && (
        <p className="card-text">{meaningTranslation}</p>
      )}
    </>
  );
};
