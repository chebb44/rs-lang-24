import { call, put } from 'redux-saga/effects';
import { store } from '../store/store';
import { getUserStatistic } from './../utilities/network/statisticAPI';
import { actionSetAllStatistic } from '../reducers/statisticReducer/statisticActions';
import { sendStatisticToBackendWorker } from './sendStatisticToBackend';

export function* initStatisticSaga() {
  const { token, id: userId } = store.getState().currentUser;
  const statistic = yield call(getUserStatistic, { token, userId }); //get statistic from API
  if (statistic) {
    yield put(actionSetAllStatistic(statistic)); // set statistic to store if they are
  } else {
    yield call(sendStatisticToBackendWorker); //send defaultStatistic
  }
}
