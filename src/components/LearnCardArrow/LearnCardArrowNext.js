import React from 'react';
import './LearnCardArrows.scss';
import classNames from 'classnames';

export const LearnCardArrowNext = ({
  onNextArrowClick,
  currentCardIndex,
  cardsSetLength,
  learnedWordsAmount,
}) => {
  const classes = classNames({
    'arrow-icon': true,
    'arrow-icon_next': true,
    'arrow-icon_disabled-next':
      currentCardIndex === cardsSetLength - 1 ||
      learnedWordsAmount <= currentCardIndex,
  });

  return (
    <div className="arrow-wrapper">
      <div className={classes} onClick={() => onNextArrowClick('next')}></div>
    </div>
  );
};
