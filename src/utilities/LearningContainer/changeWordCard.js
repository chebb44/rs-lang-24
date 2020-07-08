import { store } from '../../store/store';
import { actionUpdateCurrentCardIndex } from '../../reducers/learnCard/learnCardActions';
import { actionUpdateLastCorrectWordIndex } from '../../reducers/learnSettings/learnSettingsActions';
import {
  actionUpdatePrevPageGroupWordNumber,
  actionUpdateLastFinishedLearningDate,
} from '../../reducers/learnSettings/learnSettingsActions';
import { actionSetIsStatisticModalShown } from '../../reducers/appState/appStateActions';
import { setShortStatistic } from './setShortStatistic';
import { resetCardProperties } from './resetCardProperties';
import { resetCardSetProperties } from './resetCardSetProperties';
import { getDateStringByDate } from '../getDateStringByDate';
import { actionUpdateLearnedWordsStatistic } from '../../reducers/statisticReducer/statisticActions';

export function changeWordCard(
  direction,
  isWordCorrect,
  currentLearnCardIndex,
  wordsPerDay,
  cardsPerDay,
  lastCorrectWordIndex,
  learnCardsLength,
  answersAccuracy,
) {
  if (
    direction === 'next' &&
    (isWordCorrect || currentLearnCardIndex <= lastCorrectWordIndex) &&
    currentLearnCardIndex <= learnCardsLength - 1
  ) {
    store.dispatch(actionUpdateCurrentCardIndex(currentLearnCardIndex + 1));

    if (isWordCorrect) {
      store.dispatch(
        actionUpdateLastCorrectWordIndex(lastCorrectWordIndex + 1),
      );
    }

    if (currentLearnCardIndex === learnCardsLength - 1) {
      // set short statistic and show statistic modal
      setShortStatistic(wordsPerDay, cardsPerDay, answersAccuracy);
      store.dispatch(actionSetIsStatisticModalShown(true));

      // reset card set properties
      resetCardSetProperties();

      // add learned word to statistic
      store.dispatch(actionUpdateLearnedWordsStatistic(wordsPerDay));

      // set finish date and card page
      const setDate = getDateStringByDate(new Date());
      store.dispatch(actionUpdateLastFinishedLearningDate(setDate));
      store.dispatch(actionUpdatePrevPageGroupWordNumber());
    }
  }
  if (direction === 'previous' && currentLearnCardIndex > 0) {
    store.dispatch(actionUpdateCurrentCardIndex(currentLearnCardIndex - 1));
  }
  // reset card properties
  resetCardProperties();
}
