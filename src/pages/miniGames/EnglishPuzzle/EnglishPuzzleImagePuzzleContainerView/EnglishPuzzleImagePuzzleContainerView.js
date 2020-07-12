import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { EnglishPuzzleTextItem } from '../EnglishPuzzleTextItem/EnglishPuzzleTextItem';
import { EnglishPuzzleDragCard } from '../EnglishPuzzleDragCard/EnglishPuzzleDragCard';

export const EnglishPuzzleImagePuzzleContainerView = ({
  onDragEnd,
  textItemList,
  wordNumber,
  state,
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="english-puzzle-image-puzzle-container__answer">
        {textItemList.map((item, index) => {
          if (index > wordNumber) {
            return null;
          } else if (index === wordNumber) {
            return (
              <Droppable
                droppableId="droppable2"
                direction="horizontal"
                key={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    className="english-puzzle-text-item"
                    id="checkedArea"
                  >
                    {state.selected.map((item, index) => (
                      <EnglishPuzzleDragCard
                        item={item}
                        index={index}
                        key={index}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          }
          return <EnglishPuzzleTextItem item={item} key={index} />;
        })}
      </div>
      <div className="english-puzzle-image-puzzle-container__question">
        {state.items ? (
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className="english-puzzle-text-item"
                id="questionArea"
              >
                {state.items.map((item, index) => (
                  <EnglishPuzzleDragCard
                    item={item}
                    index={index}
                    key={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : null}
      </div>
    </DragDropContext>
  );
};
