import React from 'react';
import './EnglishPuzzleControlBtnItem.scss';

export const EnglishPuzzleControlBtnItem = ({ data }) => {
  const { icon, title, func, disabled } = data;
  return !disabled ? (
    <button
      className="english-puzzle-control-btn__item english-puzzle-control-btn__item_disabled"
      onClick={func}
      title={title}
    >
      <img src={icon} alt="button-control" />
    </button>
  ) : (
    <button
      className="english-puzzle-control-btn__item"
      onClick={func}
      title={title}
    >
      <img src={icon} alt="button-control" />
    </button>
  );
};
