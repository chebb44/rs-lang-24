const DAILY_NORM = 40;
const REPEAT_COEFFICIENT = 0.6;
export const NUMBER_OF_NEW_WORDS = Math.ceil(DAILY_NORM * REPEAT_COEFFICIENT);
export const NUMBER_OF_REPEAT_WORDS = DAILY_NORM - NUMBER_OF_NEW_WORDS;

export const NEW_WORDS_MODE = 'NEW_WORDS_MODE';
export const REPEAT_MODE = 'REPEAT_MODE';
export const ONLY_HARD_WORDS_MODE = 'ONLY_HARD_WORDS_MODE';
export const STANDARD_MODE = 'STANDARD_MODE';

export const defaultLearnSettings = {
  wordsPerDay: 10,
  learnCardSettings: {
    isTranslationOn: true,
    isMeaningOn: true,
    isExampleOn: true,
    isTranscriptionOn: true,
    isImageOn: true,
    prevWordsGroup: 0,
    prevWordsPage: 0,
    prevWordOnPage: 0,
    isAudioOn: true,
    currentWordsGroup: 0,
    currentWordsPage: 0,
    currentWordOnPage: 0,
    learnMode: STANDARD_MODE,
    cardsPerDay: 10,
    lastCorrectWordIndex: -1,
    answersAccuracy: [],
    lastFinishedLearningDate: null,
    isShowAnswerBtnOn: true,
    isDeleteBtnOn: true,
    isMarkDifficultyBtnsOn: true,
  },
};

export const defaultAppState = {
  alertMessage: '',
  isSideBarShow: false,
  initDone: false,
  isStatisticModalShown: false,
  isMaxCardsModalShown: false,
  visibleSettingsModal: false,
};
