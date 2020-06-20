export const UPDATE_LEARN_CARD_SETTINGS = 'UPDATE_LEARN_CARD_SETTINGS';
export const actionUpdateLearnCardSettings = (learnCardSettings) => ({
  type: UPDATE_LEARN_CARD_SETTINGS,
  payload: learnCardSettings,
});

export const SET_WORDS_PER_DAY = 'SET_WORDS_PER_DAY';
export const actionSetWordsPerDay = (wordsNumber) => ({
  type: SET_WORDS_PER_DAY,
  payload: wordsNumber,
});

export const SET_LEARN_SETTINGS = 'UPDATE_LEARN_SETTINGS';
export const actionSetLearnSetting = (settings) => ({
  type: SET_LEARN_SETTINGS,
  payload: settings,
});

export const SET_AUTO_AUDIO = 'SET_AUTO_AUDIO';
export const actionSetAutoAudio = (audio) => ({
  type: SET_AUTO_AUDIO,
  payload: audio,
});

export const SET_AUTO_TRANSLATE = 'SET_AUTO_TRANSLATE';
export const actionSetAutoTranslate = (translate) => ({
  type: SET_AUTO_TRANSLATE,
  payload: translate,
});
