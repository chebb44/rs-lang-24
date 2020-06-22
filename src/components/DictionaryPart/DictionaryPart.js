import React from 'react';
import './DictionaryPart.scss';
import { DictionaryWord } from './../DictionaryWord/DictionaryWord';

export const DictionaryPart = ({
  words,
  header,
  learnCardSettings,
  buttonText,
  buttonCallback,
}) => {
  return (
    <div className="dictionary-block">
      <h3 className="mt-3 mb-3"> {header}</h3>
      {words.length > 0 ? (
        <div className="words-container">
          {words.map((word) => (
            <DictionaryWord
              key={word.id}
              wordId={word.id}
              word={word}
              learnCardSettings={learnCardSettings}
              header={header}
              buttonText={buttonText}
              buttonCallback={buttonCallback}
            />
          ))}
        </div>
      ) : (
        <h3>'Слов пока не записано =('</h3>
      )}
    </div>
  );
};
