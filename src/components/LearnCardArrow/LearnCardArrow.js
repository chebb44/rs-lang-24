import React from 'react';
import './LearnCardArrow.scss';
import classNames from 'classnames';

export const LearnCardArrow = ({
  direction,
  onArrowClick,
  currentCardIndex,
  isWordCorrect,
  lastCorrectWordIndex,
}) => {
  const classes = classNames({
    'arrow-icon': true,
    'arrow-icon_next': direction === 'next',
    'arrow-icon_previous': direction === 'previous',
    'arrow-icon_disabled-next':
      direction === 'next' &&
      currentCardIndex > lastCorrectWordIndex &&
      !isWordCorrect,
    'arrow-icon_disabled-previous':
      direction === 'previous' && currentCardIndex === 0,
  });

  return (
    <div className="arrow-wrapper">
      <div className={classes} onClick={() => onArrowClick(direction)}></div>
    </div>
  );
};
