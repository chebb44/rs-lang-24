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
import {
  actionUpdatePrevPageGroupWordNumber,
  actionUpdateLastFinishedLearningDate,
} from '../../reducers/learnSettings/learnSettingsActions';
import { actionSetIsStatisticModalShown } from '../../reducers/appState/appStateActions';
import { calculateCorrectAnswersStatistic } from '../../utilities/learnCard/calculateCorrectAnswersStatistic';
import {
  actionSetCorrectAnswersPercent,
  actionSetLongestCorrectAnswerSeries,
  actionSetCardsAmount,
  actionSetNewWordsAmount,
  actionUpdateLearnedWords,
} from '../../reducers/statisticReducer/statisticActions';
import { getDateStringByDate } from '../../utilities/getDateStringByDate';

export function handleArrowClickFunction(
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
      const wordDate = getDateStringByDate(new Date());
      store.dispatch(actionUpdateLearnedWords(wordDate));
    }

    if (currentLearnCardIndex === learnCardsLength - 1) {
      const [
        correctAnswersPercent,
        longestCorrectAnswersSeries,
      ] = calculateCorrectAnswersStatistic(answersAccuracy);
      store.dispatch(actionSetCorrectAnswersPercent(correctAnswersPercent));
      store.dispatch(
        actionSetLongestCorrectAnswerSeries(longestCorrectAnswersSeries),
      );
      store.dispatch(actionSetCardsAmount(cardsPerDay));
      store.dispatch(actionSetNewWordsAmount(wordsPerDay));
      store.dispatch(actionUpdateLastCorrectWordIndex(-1));
      store.dispatch(actionClearAnswerAccuracy([]));
      store.dispatch(actionUpdatePrevPageGroupWordNumber());
      store.dispatch(actionSetIsStatisticModalShown(true));
      store.dispatch(actionUpdateCurrentCardIndex(0));
      const cardsSetDate = getDateStringByDate(new Date());
      store.dispatch(actionUpdateLastFinishedLearningDate(cardsSetDate));
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
