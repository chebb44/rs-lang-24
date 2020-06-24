import React from 'react';
import './GameButtons.scss';
import { UniversalButton } from '../../../../../components/UniversalButton/UniversalButton';
export const GameButtons = ({ clickHandler }) => {
  return (
    <div>
      <UniversalButton
        buttonText="Верно"
        extraClasses="sprint-true-button"
        onClickHandler={clickHandler(true)}
      />
      <UniversalButton
        buttonText="Неверно"
        extraClasses="sprint-false-button"
        onClickHandler={clickHandler(false)}
      />
    </div>
  );
};
