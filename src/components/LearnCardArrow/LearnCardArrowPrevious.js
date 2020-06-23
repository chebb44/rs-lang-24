import React from 'react';
import './LearnCardArrows.scss';
import classNames from 'classnames';

export const LearnCardArrowPrevious = ({
  onPreviousArrowClick,
  currentCardIndex,
}) => {
  const classes = classNames({
    'arrow-icon': true,
    'arrow-icon_previous': true,
    'arrow-icon_disabled-previous': currentCardIndex === 0,
  });
  return (
    <div className="arrow-wrapper">
      <div
        className={classes}
        onClick={() => onPreviousArrowClick('previous')}
      ></div>
    </div>
  );
};
