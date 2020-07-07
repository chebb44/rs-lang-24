import React from 'react';
import './QuizHelpBtnItem.scss';

export const QuizHelpBtnItem = ({ data }) => {
  const { icon, title, func } = data;
  return (
    <button className="quiz-help-btn__item" onClick={func} title={title}>
      <img src={icon} alt="button-helper" />
    </button>
  );
};
