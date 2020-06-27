import React from 'react';
import './EndGame.scss';
import { UniversalButton } from './../../../../../components/UniversalButton/UniversalButton';
export const EndGame = ({ score, redirectToStartScreen }) => {
  return (
    <div>
      <h3>Игра окончена!</h3>
      <p>{`Вы набрали: ${score} очков!`}</p>
      <p>Прекрасный результат!</p>
      <UniversalButton
        buttonText="Закрыть"
        onClickHandler={redirectToStartScreen}
        extraClasses="mt-3"
      />
    </div>
  );
};
