import React from 'react';
import { DictionaryWord } from './../DictionaryWord/DictionaryWord';

export const DictionaryPart = ({ words, header }) => {
  return (
    <>
      <h2> {header}</h2>
      {words.length > 0 ? (
        <div className="names-container">
          {words.map((word) => (
            <DictionaryWord key={word.id} word={word} />
          ))}
        </div>
      ) : (
        <h3>'Слов пока не записано =('</h3>
      )}
    </>
  );
};
