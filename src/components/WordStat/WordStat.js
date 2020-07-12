import { getPlanRepeatDate } from './../../utilities/repeatLearn/getPlanRepeatDate';
import React from 'react';
import {
  WORDS_DIFFICULTY,
  HARD_WORD,
  GOOD_WORD,
  EASY_WORD,
  LEARNED_WORD,
} from './../../sagas/constants';

export const WordStat = ({
  stat: {
    difficulty,
    optional: { sumOfRepeats, lastRepeatDate },
  },
}) => {
  const difficultyTypes = [HARD_WORD, GOOD_WORD, EASY_WORD];
  const planDateTypes = [HARD_WORD, GOOD_WORD, EASY_WORD, LEARNED_WORD];
  return (
    <div className="word-stat small  mt-3">
      {difficultyTypes.includes(difficulty) && (
        <p>{`Индивидуальная сложность: ${WORDS_DIFFICULTY[difficulty]}`}</p>
      )}
      <p>{`Количество повторов: ${sumOfRepeats}`}</p>
      <p>{`Последний повтор: ${new Date(
        lastRepeatDate,
      ).toLocaleDateString()}`}</p>
      {planDateTypes.includes(difficulty) && (
        <p>{`Следующий повтор: ${getPlanRepeatDate({
          difficulty,
          lastRepeatDate,
        }).toLocaleDateString()}`}</p>
      )}
    </div>
  );
};
