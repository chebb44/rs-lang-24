import React from 'react';
import './DeleteWordButton.scss';

export const DeleteWordButton = ({ onDeleteButtonClick }) => {
  return (
    <button
      type="button"
      className="btn ml-2 button_delete"
      onClick={() => onDeleteButtonClick()}
    >
      Удалить
    </button>
  );
};
