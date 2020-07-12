import React from 'react';
import './EnglishPuzzleMenuChangeLevel.scss';

export const EnglishPuzzleMenuChangeLevel = ({
  saveGameLevel,
  saveGameRound,
  level,
  round,
}) => {
  const handleChangeLevel = (event) => {
    saveGameLevel(+event.target.value);
  };
  const handleChangeRound = (event) => {
    saveGameRound(+event.target.value);
  };

  return (
    <div className="english-puzzle-menu-change-difficulty">
      <div className="english-puzzle-menu-change-difficulty__level m-1">
        <label htmlFor="sel1">Уровень</label>
        <select
          className="form-control"
          id="sel1"
          onChange={handleChangeLevel}
          defaultValue={level}
        >
          <option value="0">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
          <option value="5">6</option>
        </select>
      </div>

      <div className="english-puzzle-menu-change-difficulty__round m-1">
        <label htmlFor="sel1">Раунд</label>
        <select
          className="form-control"
          id="sel1"
          onChange={handleChangeRound}
          defaultValue={round}
        >
          <option value="0">1</option>
          <option value="4">2</option>
          <option value="9">3</option>
          <option value="14">4</option>
          <option value="19">5</option>
          <option value="24">6</option>
        </select>
      </div>
    </div>
  );
};
