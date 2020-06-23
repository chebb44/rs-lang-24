import React from 'react';

export const LearnCardExample = ({
  isExampleOn,
  isTranslationOn,
  example,
  exampleTranslation,
  isWordSubmitted,
  isWordCorrect,
}) => {
  const createExampleMarkup = () => {
    return {
      __html: example,
    };
  };
  return (
    <>
      {isExampleOn && (
        <p
          className="card-text"
          dangerouslySetInnerHTML={createExampleMarkup()}
        ></p>
      )}

      {isExampleOn && isTranslationOn && isWordSubmitted && (
        <p className="card-text">{exampleTranslation}</p>
      )}
    </>
  );
};
