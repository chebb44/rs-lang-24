import React from 'react';
import { DictionaryWord } from './../DictionaryWord/DictionaryWord';

export const DictionaryPart = ({ words, header, learnCardSettings }) => {
  return (
    <>
      <h2> {header}</h2>
      {words.length > 0 ? (
        <div className="words-container">
          {words.map((word) => (
            <DictionaryWord
              key={word.id}
              word={word}
              learnCardSettings={learnCardSettings}
            />
          ))}
        </div>
      ) : (
        <h3>'Слов пока не записано =('</h3>
      )}
    </>
  );
};
