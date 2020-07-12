import { getDateByString } from '../../utilities/getDateStringByDate';

export const parseLastFinishedLearningDate = (lastFinishedLearningDate) => {
  let lastLearningDate, lastLearningMonth;
  const date = new Date();
  if (lastFinishedLearningDate === null) {
    const yesterdayDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 1,
    );
    lastLearningDate = yesterdayDate.getDate();
    lastLearningMonth = yesterdayDate.getMonth();
  } else {
    lastLearningDate = getDateByString(lastFinishedLearningDate).getDate();
    lastLearningMonth = getDateByString(lastFinishedLearningDate).getMonth();
  }

  return [lastLearningDate, lastLearningMonth];
};
