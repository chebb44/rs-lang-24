import { call, select } from 'redux-saga/effects';
import { putUserStatistic } from '../utilities/network/statisticAPI';
import { miniGamesStatsSelector } from './../reducers/miniGamesStats/miniGamesStatsReducer';
import { currentUserSelector } from '../reducers/currentUser/currentUserReducer';

export function* sendStatisticToBackendWorker() {
  const { id: userId, token } = yield select(currentUserSelector);
  const { miniGames } = yield select(miniGamesStatsSelector);
  console.log('function*sendStatisticToBackendWorker -> miniGames', miniGames);
  const allStatsData = { learnedWords: 666, optional: { miniGames } };
  yield call(putUserStatistic, { userId, token, data: allStatsData });
}
