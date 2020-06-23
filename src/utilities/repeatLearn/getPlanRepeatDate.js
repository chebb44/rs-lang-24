import { STEP_BASIS, STEP_WORDS } from './../../sagas/constants';
export const getPlanRepeatDate = ({ lastRepeatDate, difficulty }) => {
  const repeatDelayDays = STEP_BASIS * STEP_WORDS[difficulty];
  const msInDay = 1000 * 60 * 60 * 24;
  let planDate = new Date(
    Date.parse(lastRepeatDate) + repeatDelayDays * msInDay,
  );
  return planDate;
};
