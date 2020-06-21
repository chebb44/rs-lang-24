import React from 'react';

export const LearnCardMeaning = ({
  isMeaningOn,
  isTranslationOn,
  meaning,
  meaningTranslation,
  isCheckButtonClicked,
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
      {isMeaningOn && isTranslationOn && isCheckButtonClicked && (
        <p className="card-text">{meaningTranslation}</p>
      )}
    </>
  );
};
