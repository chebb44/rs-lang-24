import { store } from '../../store/store';
import { obtainAudiosToPlay } from '../../utilities/learnCard/obtainAudiosToPlay';
import {
  actionUpdateWordCorrectFlag,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
  actionUpdateTranslationShownFlag,
  actionUpdateCheckDisplaying,
  actionSetPropertiesForSubmittedCard,
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

  const audiosToPlay = obtainAudiosToPlay(learnCard, learnCardSettings);
  store.dispatch(
    actionSetPropertiesForSubmittedCard({
      correctFlag: isWordCorrect,
      audios: audiosToPlay,
    }),
  );
  store.dispatch(actionAddAnswerAccuracy(isWordCorrect));

  if (isWordCorrect) {
    store.dispatch(
      actionMarkWord({ wordId: learnCard._id, difficulty: LEARNED_WORD }),
    );
  }
};
