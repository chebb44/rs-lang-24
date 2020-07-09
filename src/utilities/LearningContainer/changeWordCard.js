import { store } from '../../store/store';
import {
  actionUpdateCurrentCardIndex,
  actionResetNextPrevLearnCard,
} from '../../reducers/learnCard/learnCardActions';
import { actionUpdateLastCorrectWordIndex } from '../../reducers/learnSettings/learnSettingsActions';
import {
  actionUpdatePrevPageGroupWordNumber,
  actionResetFinishedLearnSet,
} from '../../reducers/learnSettings/learnSettingsActions';
import { actionSetIsStatisticModalShown } from '../../reducers/appState/appStateActions';
import { setShortStatistic } from './setShortStatistic';
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
    store.dispatch(actionResetNextPrevLearnCard());

    if (isWordCorrect) {
      store.dispatch(
        actionUpdateLastCorrectWordIndex(lastCorrectWordIndex + 1),
      );
    }

    // last card
    if (currentLearnCardIndex === learnCardsLength - 1) {
      // set short and long statistic and show statistic modal
      setShortStatistic(wordsPerDay, cardsPerDay, answersAccuracy);
      store.dispatch(actionSetIsStatisticModalShown(true));
      store.dispatch(actionUpdateLearnedWordsStatistic(wordsPerDay));

      // reset card and card set properties
      store.dispatch(actionUpdateCurrentCardIndex(0));
      store.dispatch(actionResetFinishedLearnSet());
      store.dispatch(actionUpdatePrevPageGroupWordNumber());
    }
  }
  if (direction === 'previous' && currentLearnCardIndex > 0) {
    store.dispatch(actionUpdateCurrentCardIndex(currentLearnCardIndex - 1));
    store.dispatch(actionResetNextPrevLearnCard());
  }
}
