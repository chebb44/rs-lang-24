import React from 'react';
import './EnglishPuzzleTextItem.scss';

export const EnglishPuzzleTextItem = ({ item }) => {
  if (!item) {
    return null;
  }
  const { textMeaning } = item;
  const regexpTags = new RegExp(`<i>|<\\/i>`, 'g');
  const textArray = textMeaning.replace(regexpTags, '').split(' ');

  return textArray ? (
    <div className="english-puzzle-text-item">
      {textArray.map((item, index) => {
        return (
          <div className="english-puzzle-text-item__word" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  ) : null;
};
