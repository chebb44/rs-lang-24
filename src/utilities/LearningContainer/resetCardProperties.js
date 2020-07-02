import { store } from '../../store/store';
import {
  actionUpdateEnteredWord,
  actionUpdateWordCorrectFlag,
  actionUpdateCheckDisplaying,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
  actionUpdateAnswerShownFlag,
  actionUpdateTranslationShownFlag,
} from '../../reducers/learnCard/learnCardActions';

export function resetCardProperties() {
  store.dispatch(actionUpdateAnswerShownFlag(false));
  store.dispatch(actionUpdateEnteredWord(''));
  store.dispatch(actionUpdateWordCorrectFlag(false));
  store.dispatch(actionUpdateCheckDisplaying(false));
  store.dispatch(actionUpdateAudiosToPlay([]));
  store.dispatch(actionUpdateCurrentAudio(null));
  store.dispatch(actionUpdateTranslationShownFlag(false));
}
