import React from 'react';
import './EndGame.scss';
export const EndGame = ({ score }) => {
  return (
    <div>
      <h3>Игра окончена!</h3>
      <p>{`Вы набрали: ${score} очков!`}</p>
      <p>Прекрасный результат!</p>
    </div>
  );
};
