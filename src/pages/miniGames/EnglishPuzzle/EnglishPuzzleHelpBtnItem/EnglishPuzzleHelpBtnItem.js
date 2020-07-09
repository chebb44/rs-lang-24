import React from 'react';
import './EnglishPuzzleHelpBtnItem.scss';

export const EnglishPuzzleHelpBtnItem = ({ data }) => {
  const { icon, title, func, disabled } = data;
  return !disabled ? (
    <button
      className="englishPuzzle-help-btn__item englishPuzzle-help-btn__item_disabled"
      onClick={func}
      title={title}
      disabled
    >
      <img src={icon} alt="button-helper" />
    </button>
  ) : (
    <button className="englishPuzzle-help-btn__item" onClick={func} title={title}>
      <img src={icon} alt="button-helper" />
    </button>
  );
};
