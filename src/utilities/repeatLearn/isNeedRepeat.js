import { STEP_WORDS, STEP_BASIS } from '../../sagas/constants';

export const isNeedToRepeat = ({ word: { userWord } }) => {
  const {
    difficulty,
    optional: { lastRepeatDate },
  } = userWord;
  const msInDay = 1000 * 60 * 60 * 24;
  let todayDate = new Date();
  let repeatDate = new Date(
    Date.parse(lastRepeatDate) + STEP_BASIS * STEP_WORDS[difficulty] * msInDay,
  );
  repeatDate.setHours(0, 0, 0, 0);
  return repeatDate < todayDate;
};
