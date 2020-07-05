import React from 'react';
import './QuizExitBtn.scss';

export const QuizExitBtn = ({ func }) => {
  return (
    <button
      type="button"
      className="quiz-exit-btn"
      data-dismiss="modal"
      aria-label="Close"
      onClick={func}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
};
