import React from 'react';
import './EnglishPuzzleTextItem.scss';
import { shuffleArray } from '../utilities';

export const EnglishPuzzleTextItem = ({ item, shuffle, classes }) => {
  const { textMeaning } = item;
  const regexpTags = new RegExp(`<i>|<\\/i>`, 'g');
  let textArray = textMeaning.replace(regexpTags, '').split(' ');
  if (shuffle) {
    textArray = shuffleArray(textArray);
  }
  return (
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
  );
};
