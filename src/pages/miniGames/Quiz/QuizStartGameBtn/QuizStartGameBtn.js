import React, { useState } from 'react';
import './QuizStartGameBtn.scss';
import {
  LEARNED_WORDS,
  SELECTED_WORDS,
  MAX_WORDS_FOR_GAME,
} from '../constants';
import { useSelector } from 'react-redux';
import { dictionaryStateStateSelector } from '../../../../reducers/dictionaryReducer/dictionaryReducer';

export const QuizStartGameBtn = ({ startGameHandler, setGameMode }) => {
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
    <div className="btn-group dropup">
      <button
        type="button"
        className="btn quiz-start-game-btn quiz-start-game-btn_start"
        onClick={startGameHandler}
      >
        Старт
      </button>
      <button
        type="button"
        className="btn dropdown-toggle dropdown-toggle-split quiz-start-game-btn_toggle"
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
          <button className="dropdown-item" onClick={handleChangeLearnedWords}>
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
