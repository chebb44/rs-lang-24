import React from 'react';
import './DictionaryAllWordsList.scss';
import DictionaryWordSingleView from './DictionaryWordSingleView';

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
      {columnWords.map((word) => {
        return (
          <DictionaryWordSingleView
            word={word}
            buttonCallback={buttonCallback}
            onWordClick={onWordClick}
            buttonText={buttonText}
            key={word.word}
          />
        );
      })}
    </div>
  );
};
