import { store } from '../../store/store';
import { calculateCorrectAnswersStatistic } from '../learnCard/calculateCorrectAnswersStatistic';
import {
  actionSetCorrectAnswersPercent,
  actionSetLongestCorrectAnswerSeries,
  actionSetCardsAmount,
  actionSetNewWordsAmount,
} from '../../reducers/statisticReducer/statisticActions';

export function setShortStatistic(wordsPerDay, cardsPerDay, answersAccuracy) {
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
}
