import { store } from '../../store/store';
import { actionSetIsMaxCardsModalShown } from '../../reducers/appState/appStateActions';

export const checkLastFinishedLearningDate = (
  lastFinishedLearningDate,
  dispatch,
) => {
  if (
    lastFinishedLearningDate &&
    lastFinishedLearningDate.getDate() === new Date().getDate() &&
    lastFinishedLearningDate.getMonth() === new Date().getMonth()
  ) {
    dispatch(actionSetIsMaxCardsModalShown(true));
  } else {
    dispatch(actionSetIsMaxCardsModalShown(false));
  }
};
