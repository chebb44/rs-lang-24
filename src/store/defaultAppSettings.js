const DAILY_NORM = 40;
const REPEAT_COEFFICIENT = 0.6;
export const NUMBER_OF_NEW_WORDS = Math.ceil(DAILY_NORM * REPEAT_COEFFICIENT);
export const NUMBER_OF_REPEAT_WORDS = DAILY_NORM - NUMBER_OF_NEW_WORDS;

export const NEW_WORDS_MODE = 'NEW_WORDS_MODE';
export const REPEAT_MODE = 'REPEAT_MODE';
export const STANDARD_MODE = 'STANDARD_MODE';

export const defaultLearnSettings = {
  wordsPerDay: 50,
  learnCardSettings: {
    isTranslationOn: true,
    isMeaningOn: true,
    isExampleOn: true,
    isTranscriptionOn: true,
    isImageOn: true,
    prevWordsGroup: 0,
    prevWordsPage: 0,
    prevWordOnPage: 0,
    currentWordsGroup: 0,
    currentWordsPage: 0,
    currentWordOnPage: 0,
    learnMode: STANDARD_MODE,
    isAudioOn: true,
  },
};

export const defaultAppState = {
  alertMessage: '',
  isSideBarShow: true,
  initDone: false,
  visibleStatisticModal: false,
  visibleMaxCardsModal: false,
  visibleSettingsModal: false,
};
