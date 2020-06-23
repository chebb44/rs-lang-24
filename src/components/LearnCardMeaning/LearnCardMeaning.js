import React from 'react';

export const LearnCardMeaning = ({
  isMeaningOn,
  isTranslationOn,
  meaning,
  meaningTranslation,
  isWordSubmitted,
}) => {
  const createMeaningMarkup = () => {
    return {
      __html: meaning,
    };
  };
  return (
    <>
      {isMeaningOn && (
        <p
          className="card-text"
          dangerouslySetInnerHTML={createMeaningMarkup()}
        ></p>
      )}
      {isMeaningOn && isTranslationOn && isWordSubmitted && (
        <p className="card-text">{meaningTranslation}</p>
      )}
    </>
  );
};
