/* eslint-disable no-useless-escape */
import React from 'react';

export const DescriptionWord = ({
  isOn,
  isTranslationOn,
  text,
  textTranslation,
  isWordSubmitted,
  isWordCorrect,
  tag,
}) => {
  const regexpAll = new RegExp(`<${tag}>(\\w+)<\\/${tag}>`);
  const regexpTags = new RegExp(`<${tag}>|<\\/${tag}>`, 'g');
  const matches = text.match(regexpAll);
  const word = matches[1];
  const wordMask = word.replace(/\w/g, '_');
  const { index } = matches;
  const hidedText = text.replace(regexpTags, '').replace(word, wordMask);
  const firstHalf = text.slice(0, index);
  const secondHalf = hidedText.slice(index + word.length);

  return (
    <>
      {isOn ? (
        <>
          {isWordCorrect ? (
            <p className="card-text">
              <span>{firstHalf}</span>
              <b>{word}</b>
              <span>{secondHalf}</span>
            </p>
          ) : (
            <p className="card-text">{hidedText}</p>
          )}
          {isTranslationOn && isWordSubmitted ? (
            <p className="card-text">{textTranslation}</p>
          ) : null}
        </>
      ) : null}
    </>
  );
};
