import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const EnglishPuzzleDragCard = ({ item, index }) => {
  const { id, content } = item;
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="english-puzzle-text-item__word"
          value={content}
        >
          {content}
        </div>
      )}
    </Draggable>
  );
};
