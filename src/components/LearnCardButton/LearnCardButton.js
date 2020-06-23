import React from 'react';
import classNames from 'classnames';
import './LearnCardButton.scss';

export const LearnCardButton = ({ text, onButtonClick, type }) => {
  const classes = classNames({
    'btn ml-2 mb-2': true,
    'card-buttons__button': true,
    'card-buttons__button_action': type === 'action',
    'card-buttons__button_mark': type === 'mark',
  });
  return (
    <button type="button" className={classes} onClick={() => onButtonClick()}>
      {text}
    </button>
  );
};
