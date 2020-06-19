import { getNewWordsForLearn } from './getNewWordsForLearnSaga';

export function* initWordsForLearnWorker() {
  yield getNewWordsForLearn();
}
