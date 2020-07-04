import React, { useState } from 'react';
import './AudioCallStartGameBtn.scss';
import {
  LEARNED_WORDS,
  SELECTED_WORDS,
  MAX_WORDS_FOR_GAME,
} from '../constants';
import { useSelector } from 'react-redux';
import { dictionaryStateStateSelector } from '../../../../reducers/dictionaryReducer/dictionaryReducer';

export const AudioCallStartGameBtn = ({ startGameHandler, setGameMode }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleClick = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  const handleChangeLearnedWords = () => {
    setIsToggleOpen(!isToggleOpen);
    setGameMode(LEARNED_WORDS);
  };
  const handleChangeSelectedWords = () => {
    setIsToggleOpen(!isToggleOpen);
    setGameMode(SELECTED_WORDS);
  };
  const { learnedWords } = useSelector(dictionaryStateStateSelector);

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn audio-call-start-game-btn audio-call-start-game-btn_start"
        onClick={startGameHandler}
      >
        Старт
      </button>
      <button
        type="button"
        className="btn dropdown-toggle dropdown-toggle-split audio-call-start-game-btn_toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        id="dropdownMenuButton"
        onClick={handleClick}
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div
        className={`dropdown-menu ${isToggleOpen ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton"
      >
        {learnedWords.length >= MAX_WORDS_FOR_GAME ? (
          <button className="dropdown-item" onClick={handleChangeLearnedWords} >
            Изученные слова
          </button>
        ) : (
          <button
            className="dropdown-item"
            onClick={handleChangeLearnedWords}
            disabled
          >
            Изученные слова
          </button>
        )}
        <button className="dropdown-item" onClick={handleChangeSelectedWords}>
          Выбранная сложность
        </button>
      </div>
    </div>
  );
};
