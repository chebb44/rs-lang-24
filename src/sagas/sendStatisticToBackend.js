import { store } from '../store/store';
import { call } from 'redux-saga/effects';
import { putUserStatistic } from '../utilities/network/statisticAPI';

export function* sendStatisticToBackendWorker() {
  const state = store.getState();
  const statistic = state.statisticState;
  const { id: userId, token } = state.currentUser;
  yield call(putUserStatistic, { userId, token, data: statistic });
}
