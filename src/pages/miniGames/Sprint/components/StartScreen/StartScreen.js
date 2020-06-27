import React from 'react';
import './StartScreen.scss';
import { UniversalButton } from '../../../../../components/UniversalButton/UniversalButton';
export const StartScreen = ({ startClickHandler, redirectToStatistic }) => {
  return (
    <div className="sprint-start-screen">
      <h2 className="mb-3">Спринт</h2>
      <p className="mb-2">
        Ход игры: пользователь видит слово на английском языке и перевод слова,
        нужно указать принадлежит ли данный перевод этому слову. В игре
        участвуют только ранее изученные слова.
      </p>
      <p className="mb-2">
        Для старта игры необходимо изучить <b>не менее 5 слов</b>. В течение
        игры, слова в которых вы ошиблись - будут предложены вам для повторного
        изучения на следующей тренировке.
      </p>
      <p className="mb-2">
        Продолжительность раунда одна минута, в начале игры за каждое угаданное
        слово начисляется 10 баллов, каждые четыре правильных ответа подряд
        увеличивают количество баллов за каждое угаданное слово вдвое, при
        ошибке за угаданное слово снова начисляется только 10 баллов.
      </p>
      <div>
        <UniversalButton
          onClickHandler={startClickHandler}
          buttonText="Начать игру"
          extraClasses="m-1"
        />
        <UniversalButton
          onClickHandler={redirectToStatistic}
          buttonText="Статистика"
          extraClasses="m-1 sprint-stat-btn"
        />
      </div>
    </div>
  );
};
