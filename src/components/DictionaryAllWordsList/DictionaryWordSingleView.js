import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../pages/miniGames/SpeakIt/SpeakItHepler';
import { Spin } from '../Spinner/assets/Spin';

const DictionaryWordSingleView = ({
  word,
  buttonCallback,
  onWordClick,
  buttonText,
}) => {
  const wordClassList = word.active
    ? 'words_word-wrapper active'
    : 'words_word-wrapper';
  const [isDeleteButtonPressed, setIsDeleteButtonPressed] = useState(false);
  const buttonHandler = () => {
    buttonCallback(word._id);
    setIsDeleteButtonPressed(true);
  };

  return (
    <div className="words_word-row" key={word._id}>
      <div
        className={wordClassList}
        data-wordid={word._id}
        onClick={onWordClick}
      >
        <span className="dictionary-all-words__word">
          {capitalizeFirstLetter(word.word)}
        </span>
      </div>
      {isDeleteButtonPressed && <DictionarySpinner />}
      <button
        className="btn dictionary-all-words__word-delete"
        onClick={buttonHandler}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default DictionaryWordSingleView;

const DictionarySpinner = () => {
  return (
    <div className="dictionary__spinner">
      <Spin width="25px" height="25px" />
    </div>
  );
};
