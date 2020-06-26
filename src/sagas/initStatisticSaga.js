import { call, put, select } from 'redux-saga/effects';
import { getUserStatistic } from './../utilities/network/statisticAPI';
import { currentUserSelector } from '../reducers/currentUser/currentUserReducer';
import { actionSetAllMiniGamesStats } from '../reducers/miniGamesStats/miniGamesStatsActions';

export function* initStatisticSaga() {
  const { token, id: userId } = yield select(currentUserSelector);
  const statistic = yield call(getUserStatistic, { token, userId }); //get statistic from API
  console.log('function*initStatisticSaga -> statistic', statistic);
  if (statistic) {
    const {
      optional: { miniGames },
    } = statistic;
    yield put(actionSetAllMiniGamesStats({ miniGames }));
    // yield put(actionSetAllStatistic(statistic)); // set statistic to store if they are
  }
}
