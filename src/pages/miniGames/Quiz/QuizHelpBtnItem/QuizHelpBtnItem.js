import React from 'react';
import './QuizHelpBtnItem.scss';

export const QuizHelpBtnItem = ({ data }) => {
  const { icon, title, func, disabled } = data;
  return !disabled ? (
    <button
      className="quiz-help-btn__item quiz-help-btn__item_disabled"
      onClick={func}
      title={title}
      disabled
    >
      <img src={icon} alt="button-helper" />
    </button>
  ) : (
    <button className="quiz-help-btn__item" onClick={func} title={title}>
      <img src={icon} alt="button-helper" />
    </button>
  );
};
