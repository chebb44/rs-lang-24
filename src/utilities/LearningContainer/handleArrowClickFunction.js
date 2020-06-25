import { store } from '../../store/store';
import {
  actionUpdateCurrentCardIndex,
  actionUpdateEnteredWord,
  actionUpdateSubmissionFlag,
  actionUpdateWordCorrectFlag,
  actionUpdateCheckDisplaying,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
  actionUpdateAnswerShownFlag,
} from '../../reducers/learnCard/learnCardActions';
import {
  actionUpdateLastCorrectWordIndex,
  actionClearAnswerAccuracy,
} from '../../reducers/learnSettings/learnSettingsActions';
import { actionUpdatePrevPageGroupWordNumber } from '../../reducers/learnSettings/learnSettingsActions';
import { actionSetIsStatisticModalShown } from '../../reducers/appState/appStateActions';
import { calculateCorrectAnswersStatistic } from '../../utilities/learnCard/calculateCorrectAnswersStatistic';
import {
  actionSetCorrectAnswersPercent,
  actionSetLongestCorrectAnswerSeries,
} from '../../reducers/statisticReducer/statisticActions';

export function handleArrowClickFunction(
  direction,
  isWordCorrect,
  currentLearnCardIndex,
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
    if (isWordCorrect)
      store.dispatch(
        actionUpdateLastCorrectWordIndex(lastCorrectWordIndex + 1),
      );
    if (currentLearnCardIndex === learnCardsLength - 1) {
      const [
        correctAnswersPercent,
        longestCorrectAnswersSeries,
      ] = calculateCorrectAnswersStatistic(answersAccuracy);
      store.dispatch(actionSetCorrectAnswersPercent(correctAnswersPercent));
      store.dispatch(
        actionSetLongestCorrectAnswerSeries(longestCorrectAnswersSeries),
      );
      store.dispatch(actionUpdateLastCorrectWordIndex(-1));
      store.dispatch(actionClearAnswerAccuracy([]));
      store.dispatch(actionUpdatePrevPageGroupWordNumber());
      store.dispatch(actionSetIsStatisticModalShown(true));
      store.dispatch(actionUpdateCurrentCardIndex(0));
    }
  }
  if (direction === 'previous' && currentLearnCardIndex > 0) {
    store.dispatch(actionUpdateCurrentCardIndex(currentLearnCardIndex - 1));
  }
  store.dispatch(actionUpdateAnswerShownFlag(false));
  store.dispatch(actionUpdateEnteredWord(''));
  store.dispatch(actionUpdateSubmissionFlag(false));
  store.dispatch(actionUpdateWordCorrectFlag(false));
  store.dispatch(actionUpdateCheckDisplaying(false));
  store.dispatch(actionUpdateAudiosToPlay([]));
  store.dispatch(actionUpdateCurrentAudio(null));
}
