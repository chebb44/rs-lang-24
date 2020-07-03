import React from 'react';
import './DictionaryAllWordsList.scss';
import { capitalizeFirstLetter } from '../../pages/miniGames/SpeakIt/SpeakItHepler';

const make10WordsNestedArray = (words) => {
  return words.reduce((resultArr, word, index) => {
    if (!(index % 10) || index === 0) {
      resultArr.push([]);
    }
    resultArr[resultArr.length - 1].push(word);
    return resultArr;
  }, []);
};

const DictionaryAllWordsList = ({
  words,
  onWordClick,
  buttonText,
  buttonCallback,
}) => {
  const dictionaryAllWordsArray = make10WordsNestedArray(words);

  return (
    <div className="dictionary__all-words-wrapper">
      {dictionaryAllWordsArray.map((columnWords, key) => (
        <DictionaryWordsColumn
          key={key}
          columnWords={columnWords}
          onWordClick={onWordClick}
          buttonText={buttonText}
          buttonCallback={buttonCallback}
        />
      ))}
    </div>
  );
};

export default DictionaryAllWordsList;

const DictionaryWordsColumn = ({
  columnWords,
  onWordClick,
  buttonText,
  buttonCallback,
}) => {
  return (
    <div className="words-container">
      {columnWords.map((word, key) => {
        return (
          <div className="words_word-row" key={key}>
            <div
              className="words_word-wrapper"
              data-wordid={word._id}
              onClick={onWordClick}
            >
              <span className="dictionary-all-words__word">
                {capitalizeFirstLetter(word.word)}
              </span>
              <span></span>
              <span></span>
            </div>
            <button
              className="btn dictionary-all-words__word-delete"
              onClick={() => buttonCallback(word._id)}
            >
              {buttonText}
            </button>
          </div>
        );
      })}
    </div>
  );
};
