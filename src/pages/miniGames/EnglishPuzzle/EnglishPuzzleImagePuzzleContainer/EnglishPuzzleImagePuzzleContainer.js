import React, { useState, useEffect } from 'react';
import './EnglishPuzzleImagePuzzleContainer.scss';
import { reorder, move } from '../utilities';
import { EnglishPuzzleImagePuzzleContainerView } from '../EnglishPuzzleImagePuzzleContainerView/EnglishPuzzleImagePuzzleContainerView';

export const EnglishPuzzleImagePuzzleContainer = ({
  wordNumber,
  wordsForGame,
  currentWordShuffled,
  setSelectedWords,
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

  const [state, setState] = useState({
    items: [],
    selected: [],
  });

  useEffect(
    () => {
      const wordQuestion = currentWordShuffled.map((el, index) => {
        return {
          id: `card-${index}`,
          content: el,
        };
      });
      setState({
        items: wordQuestion,
        selected: [],
      });
    },
    [currentWordShuffled],
    wordsForGame,
    currentWordShuffled,
  );

  const id2List = {
    droppable: 'items',
    droppable2: 'selected',
  };

  const getList = (id) => state[id2List[id]];

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const itemsReorder = reorder(
        getList(source.droppableId),
        source.index,
        destination.index,
      );

      let stateReorder = { items: itemsReorder, selected: state.selected };

      if (source.droppableId === 'droppable2') {
        stateReorder = { items: state.items, selected: itemsReorder };
        setSelectedWords(itemsReorder);
      }
      setState(stateReorder);
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination,
      );

      setState({
        items: result.droppable,
        selected: result.droppable2,
      });
      setSelectedWords(result.droppable2);
    }
  };

  return (
    <EnglishPuzzleImagePuzzleContainerView
      onDragEnd={onDragEnd}
      textItemList={textItemList}
      wordsForGame={wordsForGame}
      wordNumber={wordNumber}
      state={state}
    />
  );
};
