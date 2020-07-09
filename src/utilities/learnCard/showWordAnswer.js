import { store } from '../../store/store';
import { LEARNED_WORD } from '../../sagas/constants';
import { actionSetPropertiesForCardWithShownAnswer } from '../../reducers/learnCard/learnCardActions';
import { actionMarkWord } from '../../store/actionsForSaga';
import { actionAddAnswerAccuracy } from '../../reducers/learnSettings/learnSettingsActions';

export const showWordAnswer = (learnCard) => {
  store.dispatch(
    actionMarkWord({ wordId: learnCard._id, difficulty: LEARNED_WORD }),
  );
  store.dispatch(actionSetPropertiesForCardWithShownAnswer());
  store.dispatch(actionAddAnswerAccuracy(true));
};
