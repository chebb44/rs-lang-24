import React from 'react';
import './EndGame.scss';
import { UniversalButton } from './../../../../../components/UniversalButton/UniversalButton';
import { CSSTransition } from 'react-transition-group';
export const EndGame = ({ score, redirectToStartScreen }) => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="sprint-fade"
      timeout={400}
      unmountOnExit={true}
    >
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
    </CSSTransition>
  );
};
