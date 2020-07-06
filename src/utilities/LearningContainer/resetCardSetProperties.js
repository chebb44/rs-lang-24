import { store } from '../../store/store';
import { actionUpdateCurrentCardIndex } from '../../reducers/learnCard/learnCardActions';
import {
  actionUpdateLastCorrectWordIndex,
  actionClearAnswerAccuracy,
} from '../../reducers/learnSettings/learnSettingsActions';

export function resetCardSetProperties() {
  store.dispatch(actionUpdateCurrentCardIndex(0));
  store.dispatch(actionUpdateLastCorrectWordIndex(-1));
  store.dispatch(actionClearAnswerAccuracy([]));
}
