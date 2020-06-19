export const defaultLearnSettings = {
  wordsPerDay: 50,
  learnCardSettings: {
    isTranslationOn: true,
    isMeaningOn: true,
    isExampleOn: true,
    isTranscriptionOn: true,
    isImageOn: true,
    currentWordsGroup: 0,
    currentWordsPage: 0,
    currentWordOnPage: 3,
  },
};

export const defaultAppState = {
  alertMessage: '',
  isSideBarShow: true,
  initDone: false,
  visibleStatisticModal: false,
  visibleMaxCardsModal: false,
};

const DAILY_NORM = 40;
const REPEAT_COEFFICIENT = 0.6;
export const NUMBER_OF_NEW_WORDS = Math.ceil(DAILY_NORM * REPEAT_COEFFICIENT);
export const NUMBER_OF_REPEAT_WORDS = DAILY_NORM - NUMBER_OF_NEW_WORDS;
