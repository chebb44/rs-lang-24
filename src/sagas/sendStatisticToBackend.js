import { call, select } from 'redux-saga/effects';
import { putUserStatistic } from '../utilities/network/statisticAPI';
import { miniGamesStatsSelector } from './../reducers/miniGamesStats/miniGamesStatsReducer';
import { currentUserSelector } from '../reducers/currentUser/currentUserReducer';
import { statisticStateSelector } from '../reducers/statisticReducer/statiscticReducer';

export function* sendStatisticToBackendWorker() {
  const { id: userId, token } = yield select(currentUserSelector);
  const { miniGames } = yield select(miniGamesStatsSelector);
  const learnStatistic = yield select(statisticStateSelector);
  const allStatsData = {
    learnedWords: 666,
    optional: { miniGames, learnStatistic },
  };
  yield call(putUserStatistic, { userId, token, data: allStatsData });
}
