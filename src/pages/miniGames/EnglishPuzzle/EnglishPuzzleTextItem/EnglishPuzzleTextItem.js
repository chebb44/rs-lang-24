import React from 'react';
import './EnglishPuzzleTextItem.scss';
import { shuffleArray } from '../utilities';

export const EnglishPuzzleTextItem = ({ item, shuffled, classes }) => {
  if (!item) {
    return null;
  }
  let textArray;
  if (shuffled) {
    textArray = [...item];
  } else {
    const { textMeaning } = item;
    const regexpTags = new RegExp(`<i>|<\\/i>`, 'g');
    textArray = textMeaning.replace(regexpTags, '').split(' ');
  }
  return textArray ? (
    <div className="english-puzzle-text-item">
      {textArray.map((item, index) => {
        return (
          <div
            className={`english-puzzle-text-item__word ${classes}`}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  ) : null;
};
