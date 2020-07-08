import { store } from '../../store/store';
import { actionAddAnswerAccuracy } from '../../reducers/learnSettings/learnSettingsActions';

export const changeAnswersAccuracy = (
  isWordCorrect,
  originalWord,
  learnedWords,
  hardWords,
  deletedWords,
) => {
  const isWordLearned = learnedWords.find(
    (item) => item.word.toLowerCase() === originalWord.toLowerCase(),
  );
  const isWordHard = hardWords.find(
    (item) => item.word.toLowerCase() === originalWord.toLowerCase(),
  );
  const isWordDeleted = deletedWords.find(
    (item) => item.word.toLowerCase() === originalWord.toLowerCase(),
  );

  if (!isWordLearned && !isWordHard && !isWordDeleted) {
    if (isWordCorrect) {
      store.dispatch(actionAddAnswerAccuracy(true));
    } else {
      store.dispatch(actionAddAnswerAccuracy(false));
    }
  }
};
