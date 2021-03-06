import React from 'react';
import './QuizStartScreen.scss';
import london from '../../../../assets/img/england_PNG721.png';
import { QuizStatisticToDay } from '../QuizStatisticToDay/QuizStatisticToDay';
import { QuizMenuChangeLevel } from '../QuizMenuChangeLevel/QuizMenuChangeLevel';
import { QuizStartGameBtn } from '../QuizStartGameBtn/QuizStartGameBtn';

export const QuizStartScreen = function ({
  startGameHandler,
  visibleStatistic,
  visibleStatisticGame,
  quizDayStat,
  saveGameLevel,
  saveGameRound,
  level,
  round,
  setGameMode,
}) {
  return (
    <div className="quiz-start-screen">
      <QuizMenuChangeLevel
        saveGameLevel={saveGameLevel}
        saveGameRound={saveGameRound}
        level={level}
        round={round}
      />
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M38.1,-49.9C47.3,-37.7,51.2,-23.7,53.8,-9.4C56.4,4.8,57.6,19.4,52.6,32.6C47.6,45.8,36.4,57.6,21.1,67.1C5.8,76.6,-13.7,83.9,-28.9,78.7C-44.1,73.5,-55,55.8,-62.2,38.3C-69.3,20.9,-72.7,3.7,-68.4,-10.6C-64.2,-24.9,-52.2,-36.4,-39.5,-48.1C-26.8,-59.7,-13.4,-71.4,0.5,-72C14.5,-72.6,28.9,-62.2,38.1,-49.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <h1 className="quiz-start-screen__title">КВИЗ</h1>
      <p className="quiz-start-screen__description">
        Напишите заданное слово.
        <br /> Можно воспользоваться 3-мя подсказками:
        <br /> 1. Воспроизвести слово.
        <br /> 2. Показать перевод слова.
        <br /> 3. Показать первую букву.
      </p>
      <p className="quiz-start-screen__description">
        По умолчанию используются изученные слова.
        <br /> Также Вы можете выбрать коллекцию слов для изучения.
        <br /> Слова разделены на 36 частей в зависимости от сложности. Выберите
        уровень и раунд, установите режим <br />
        "Выбранная сложность".
        <br /> Если режим "Изученные слова" недоступен, то изучите больше слов.
      </p>
      <p className="quiz-start-screen__description">
        Чтобы начать нажмите СТАРТ
      </p>
      <div>
        <QuizStartGameBtn
          startGameHandler={startGameHandler}
          setGameMode={setGameMode}
        />
        <button
          className="btn quiz-start-screen__button quiz-start-screen__button_settings"
          onClick={visibleStatistic}
        >
          Статистика
        </button>
      </div>
      <img
        className="quiz-start-screen__footer_image"
        src={london}
        alt="london"
      />
      <QuizStatisticToDay
        visibleStatisticGame={visibleStatisticGame}
        visibleStatistic={visibleStatistic}
        quizDayStat={quizDayStat}
      />
    </div>
  );
};
