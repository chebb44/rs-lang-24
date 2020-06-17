import React from 'react';

export const LearnCardExample = ({
  isExampleOn,
  isTranslationOn,
  example,
  exampleTranslation,
  isWordSubmitted,
}) => {
  return (
    <>
      {isExampleOn && <p className="card-text">{example}</p>}

      {isExampleOn && isTranslationOn && isWordSubmitted && (
        <p className="card-text">{exampleTranslation}</p>
      )}
    </>
  );
};
