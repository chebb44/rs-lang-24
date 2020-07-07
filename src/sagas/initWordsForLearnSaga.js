import { getNewWordsForLearn } from './getNewWordsForLearnSaga';
import { resetLearningProperties } from './resetLearningProperties';

export function* initWordsForLearnWorker() {
  yield getNewWordsForLearn();
  yield resetLearningProperties();
}
