import { call, put, select } from 'redux-saga/effects';
import { getUserStatistic } from './../utilities/network/statisticAPI';
import { currentUserSelector } from '../reducers/currentUser/currentUserReducer';
import { actionSetAllMiniGamesStats } from '../reducers/miniGamesStats/miniGamesStatsActions';
import { actionSetAllLearnStatistic } from '../reducers/statisticReducer/statisticActions';

export function* initStatisticSaga() {
  const { token, id: userId } = yield select(currentUserSelector);
  const statistic = yield call(getUserStatistic, { token, userId }); //get statistic from API
  if (statistic) {
    const {
      optional: { miniGames, learnStatistic },
    } = statistic;
    yield put(actionSetAllMiniGamesStats({ miniGames }));
    yield put(actionSetAllLearnStatistic(learnStatistic));
  }
}
