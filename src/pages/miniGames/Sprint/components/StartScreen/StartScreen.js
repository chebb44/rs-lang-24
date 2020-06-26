import React from 'react';
import './StartScreen.scss';
import { UniversalButton } from '../../../../../components/UniversalButton/UniversalButton';
export const StartScreen = ({ startClickHandler }) => {
  return (
    <div className="sprint-start-screen">
      <h2 className="mb-3">Спринт</h2>
      <p>
        Ход игры: пользователь видит слово на английском языке и перевод слова,
        нужно указать принадлежит ли данный перевод этому слову.
      </p>
      <p>
        Продолжительность раунда 1 минута, в начале игры за каждое угаданное
        слово начисляется 10 баллов, каждые четыре правильных ответа подряд
        увеличивают количество баллов за каждое угаданное слово вдвое, при
        ошибке за угаданное слово снова начисляется только 10 баллов.
      </p>
      <UniversalButton
        onClickHandler={startClickHandler}
        buttonText="Начать игру"
        extraClasses="mt-4"
      />
    </div>
  );
};
