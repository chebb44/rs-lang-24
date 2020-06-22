import React from 'react';
import './DictionaryPart.scss';
import { DictionaryWord } from './../DictionaryWord/DictionaryWord';

export const DictionaryPart = ({ words, header, learnCardSettings }) => {
  return (
    <div className="dictionary-block">
      <h3 className="mt-3 mb-3"> {header}</h3>
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
    </div>
  );
};
