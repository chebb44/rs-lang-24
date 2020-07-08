import { store } from '../../store/store';
import { LEARNED_WORD } from '../../sagas/constants';
import {
  actionUpdateWordCorrectFlag,
  actionUpdateAnswerShownFlag,
  actionUpdateTranslationShownFlag,
} from '../../reducers/learnCard/learnCardActions';
import { actionMarkWord } from '../../store/actionsForSaga';
import { actionAddAnswerAccuracy } from '../../reducers/learnSettings/learnSettingsActions';

export const showWordAnswer = (learnCard) => {
  store.dispatch(
    actionMarkWord({ wordId: learnCard._id, difficulty: LEARNED_WORD }),
  );
  store.dispatch(actionUpdateAnswerShownFlag(true));
  store.dispatch(actionUpdateTranslationShownFlag(true));
  store.dispatch(actionUpdateWordCorrectFlag(true));
  store.dispatch(actionAddAnswerAccuracy(true));
};
