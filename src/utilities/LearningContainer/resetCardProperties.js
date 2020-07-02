import { store } from '../../store/store';
import {
  actionUpdateEnteredWord,
  actionUpdateSubmissionFlag,
  actionUpdateWordCorrectFlag,
  actionUpdateCheckDisplaying,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
  actionUpdateAnswerShownFlag,
} from '../../reducers/learnCard/learnCardActions';

export function resetCardProperties() {
  store.dispatch(actionUpdateAnswerShownFlag(false));
  store.dispatch(actionUpdateEnteredWord(''));
  store.dispatch(actionUpdateSubmissionFlag(false));
  store.dispatch(actionUpdateWordCorrectFlag(false));
  store.dispatch(actionUpdateCheckDisplaying(false));
  store.dispatch(actionUpdateAudiosToPlay([]));
  store.dispatch(actionUpdateCurrentAudio(null));
}
