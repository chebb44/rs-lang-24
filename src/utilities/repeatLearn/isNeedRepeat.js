import { STEP_WORDS, STEP_BASIS } from '../../sagas/constants';

export const isNeedToRepeat = ({ word: { userWord } }) => {
  const {
    difficulty,
    optional: { lastRepeatDate },
  } = userWord;
  const msInDay = 1000 * 60 * 60 * 24;
  const newDate = Date.parse(new Date());
  const repeatDate =
    Date.parse(lastRepeatDate) + STEP_BASIS * STEP_WORDS[difficulty] * msInDay;
  const deltaDays = Math.ceil((newDate - repeatDate) / msInDay);
  return deltaDays <= 1;
};
