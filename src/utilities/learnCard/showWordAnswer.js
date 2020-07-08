import { store } from '../../store/store';
import { LEARNED_WORD } from '../../sagas/constants';
import {
  actionUpdateWordCorrectFlag,
  actionUpdateAnswerShownFlag,
  actionUpdateTranslationShownFlag,
} from '../../reducers/learnCard/learnCardActions';
import { actionMarkWord } from '../../store/actionsForSaga';
import { changeAnswersAccuracy } from './changeAnswersAccuracy';

export const showWordAnswer = (
  learnCard,
  learnedWords,
  hardWords,
  deletedWords,
) => {
  store.dispatch(actionUpdateAnswerShownFlag(true));
  store.dispatch(actionUpdateTranslationShownFlag(true));
  store.dispatch(actionUpdateWordCorrectFlag(true));
  store.dispatch(
    actionMarkWord({ wordId: learnCard._id, difficulty: LEARNED_WORD }),
  );
  changeAnswersAccuracy(
    true,
    learnCard.word,
    learnedWords,
    hardWords,
    deletedWords,
  );
};
