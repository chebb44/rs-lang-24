import { store } from '../../store/store';
import { obtainAudiosToPlay } from '../../utilities/learnCard/obtainAudiosToPlay';
import {
  actionUpdateWordCorrectFlag,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
  actionUpdateTranslationShownFlag,
  actionUpdateCheckDisplaying,
} from '../../reducers/learnCard/learnCardActions';
import { actionAddAnswerAccuracy } from '../../reducers/learnSettings/learnSettingsActions';
import { actionMarkWord } from '../../store/actionsForSaga';
import { LEARNED_WORD } from '../../sagas/constants';

export const submitWordFunction = (
  enteredWord,
  learnCard,
  learnCardSettings,
) => {
  const isWordCorrect =
    enteredWord.toLowerCase() === learnCard.word.toLowerCase();
  if (isWordCorrect) {
    store.dispatch(actionUpdateWordCorrectFlag(true));
    store.dispatch(
      actionMarkWord({ wordId: learnCard._id, difficulty: LEARNED_WORD }),
    );
    store.dispatch(actionAddAnswerAccuracy(true));
  } else {
    store.dispatch(actionAddAnswerAccuracy(false));
  }
  store.dispatch(actionUpdateCheckDisplaying(true));
  store.dispatch(actionUpdateTranslationShownFlag(true));
  const audiosToPlay = obtainAudiosToPlay(learnCard, learnCardSettings);
  store.dispatch(actionUpdateAudiosToPlay(audiosToPlay));
  store.dispatch(actionUpdateCurrentAudio(audiosToPlay[0]));
};
