import React from 'react';
import './EnglishPuzzleImagePuzzleContainer.scss';
import { EnglishPuzzleTextItem } from '../EnglishPuzzleTextItem/EnglishPuzzleTextItem';

export const EnglishPuzzleImagePuzzleContainer = ({
  wordNumber,
  wordsForGame,
  currentWord,
}) => {
  const textItemList = [
    {
      textMeaning: wordsForGame[0].textMeaning,
    },
    {
      textMeaning: wordsForGame[1].textMeaning,
    },
    {
      textMeaning: wordsForGame[2].textMeaning,
    },
    {
      textMeaning: wordsForGame[3].textMeaning,
    },
    {
      textMeaning: wordsForGame[4].textMeaning,
    },
    {
      textMeaning: wordsForGame[5].textMeaning,
    },
    {
      textMeaning: wordsForGame[6].textMeaning,
    },
    {
      textMeaning: wordsForGame[7].textMeaning,
    },
    {
      textMeaning: wordsForGame[8].textMeaning,
    },
    {
      textMeaning: wordsForGame[9].textMeaning,
    },
  ];

  // if true show map item
  // const check

  return (
    <div>
      <div className="english-puzzle-image-puzzle-container__answer">
        {textItemList.map((item, index) => {
          if (index > wordNumber) {
            return null;
          } else if (index === wordNumber) {
            return (
              <EnglishPuzzleTextItem
                item={item}
                key={index}
                classes={'english-puzzle-text-item__word_visible'}
              />
            );
          }
          return <EnglishPuzzleTextItem item={item} key={index} classes={''} />;
        })}
      </div>
      <div className="english-puzzle-image-puzzle-container__question">
        <EnglishPuzzleTextItem item={currentWord} shuffled={true} />
      </div>
    </div>
  );
};
