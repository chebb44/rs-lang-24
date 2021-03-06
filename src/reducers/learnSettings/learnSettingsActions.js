export const SET_WORDS_PER_DAY = 'SET_WORDS_PER_DAY';
export const actionSetWordsPerDay = (wordsNumber) => ({
  type: SET_WORDS_PER_DAY,
  payload: wordsNumber,
});

export const SET_CARDS_PER_DAY = 'SET_CARDS_PER_DAY';
export const actionSetCardsPerDay = (cardsNumber) => ({
  type: SET_CARDS_PER_DAY,
  payload: cardsNumber,
});

export const RESET_LEARN_SETTINGS = 'RESET_LEARN_SETTINGS';
export const actionResetLearnSetting = () => ({
  type: RESET_LEARN_SETTINGS,
});

export const SET_LEARN_SETTINGS = 'SET_LEARN_SETTINGS';
export const actionSetLearnSetting = (settings) => ({
  type: SET_LEARN_SETTINGS,
  payload: settings,
});

export const SET_PAGE_GROUP_WORD_NUMBER = 'SET_PAGE_GROUP_WORD_NUMBER';
export const actionSetPageGroupWordNumber = (data) => ({
  type: SET_PAGE_GROUP_WORD_NUMBER,
  data,
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

export const UPDATE_PREV_PAGE_GROUP_WORD_NUMBER =
  'UPDATE_PREV_PAGE_GROUP_WORD_NUMBER';
export const actionUpdatePrevPageGroupWordNumber = () => ({
  type: UPDATE_PREV_PAGE_GROUP_WORD_NUMBER,
});

export const SET_LEARN_MODE = 'SET_LEARN_MODE';
export const actionSetLearnMode = (mode) => ({
  type: SET_LEARN_MODE,
  payload: mode,
});

export const UPDATE_LAST_CORRECT_WORD_INDEX = 'UPDATE_LAST_CORRECT_WORD_INDEX';
export const actionUpdateLastCorrectWordIndex = (index) => ({
  type: UPDATE_LAST_CORRECT_WORD_INDEX,
  payload: index,
});

export const ADD_ANSWER_ACCURACY = 'ADD_ANSWER_ACCURACY';
export const actionAddAnswerAccuracy = (flag) => ({
  type: ADD_ANSWER_ACCURACY,
  payload: flag,
});

export const CLEAR_ANSWER_ACCURACY = 'CLEAR_ANSWER_ACCURACY';
export const actionClearAnswerAccuracy = (array) => ({
  type: CLEAR_ANSWER_ACCURACY,
  payload: array,
});

export const UPDATE_LAST_FINISHED_LEARNING_DATE =
  'UPDATE_LAST_FINISHED_LEARNING_DATE';
export const actionUpdateLastFinishedLearningDate = (date) => ({
  type: UPDATE_LAST_FINISHED_LEARNING_DATE,
  payload: date,
});

export const SET_MEANING_WORD = 'SET_MEANING_WORD';
export const actionSetMeaningWord = (meaning) => ({
  type: SET_MEANING_WORD,
  payload: meaning,
});

export const SET_EXAMPLE_WORD = 'SET_EXAMPLE_WORD';
export const actionSetExampleWord = (example) => ({
  type: SET_EXAMPLE_WORD,
  payload: example,
});

export const SET_TRANSCRIPTION_WORD = 'SET_TRANSCRIPTION_WORD';
export const actionSetTranscriptionWord = (translate) => ({
  type: SET_TRANSCRIPTION_WORD,
  payload: translate,
});

export const SET_IMAGE = 'SET_IMAGE';
export const actionSetImage = (image) => ({
  type: SET_IMAGE,
  payload: image,
});

export const SET_SHOW_ANSWER_BTN = 'SET_SHOW_ANSWER_BTN';
export const actionSetShowAnswerBtn = (btn) => ({
  type: SET_SHOW_ANSWER_BTN,
  payload: btn,
});

export const SET_DELETE_BTN = 'SET_DELETE_BTN';
export const actionSetDeleteBtn = (btn) => ({
  type: SET_DELETE_BTN,
  payload: btn,
});

export const SET_SHOW_MARK_DIFFICULTY_BTNS = 'SET_SHOW_MARK_DIFFICULTY_BTNS';
export const actionSetMarkDifficultyBtns = (btn) => ({
  type: SET_SHOW_MARK_DIFFICULTY_BTNS,
  payload: btn,
});

export const RESET_LEARN_SET = 'RESET_LEARN_SET';
export const actionResetLearnSet = () => ({
  type: RESET_LEARN_SET,
});

export const RESET_FINISHED_LEARN_SET = 'RESET_FINISHED_LEARN_SET';
export const actionResetFinishedLearnSet = () => ({
  type: RESET_FINISHED_LEARN_SET,
});
