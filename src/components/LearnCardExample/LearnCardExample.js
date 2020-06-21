import React from 'react';

export const LearnCardExample = ({
  isExampleOn,
  isTranslationOn,
  example,
  exampleTranslation,
  isCheckButtonClicked,
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

      {isExampleOn && isTranslationOn && isCheckButtonClicked && (
        <p className="card-text">{exampleTranslation}</p>
      )}
    </>
  );
};
