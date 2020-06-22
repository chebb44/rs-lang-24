import React from 'react';
import './UniversalButton.scss';

export const UniversalButton = ({
  onClickHandler = () => console.log('button click!'),
  buttonText = 'text',
  extraClasses = '',
}) => {
  const classes = 'btn button_universal' + extraClasses;
  return (
    <button type="button" className={classes} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};
