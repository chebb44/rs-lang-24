export const SET_LEARN_CARD_SETTINGS = 'SET_LEARN_CARD_SETTINGS';
export const actionSetLearnCardSettings = (learnCardSettings) => ({
  type: SET_LEARN_CARD_SETTINGS,
  payload: learnCardSettings,
});

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

export const SET_LEARN_SETTINGS = 'SET_LEARN_SETTINGS';
export const actionSetLearnSetting = (settings) => ({
  type: SET_LEARN_SETTINGS,
  payload: settings,
});

// export const SET_CURRENT_WORDS_PAGE = 'SET_CURRENT_WORDS_PAGE';
// export const actionSetCurrentPage = (page) => ({
//   type: SET_CURRENT_WORDS_PAGE,
//   page,
// });

// export const SET_CURRENT_WORDS_GROUP = 'SET_CURRENT_WORDS_GROUP';
// export const actionSetCurrentGroup = (group) => ({
//   type: SET_CURRENT_WORDS_GROUP,
//   group,
// });

// export const SET_CURRENT_WORD_ON_PAGE = 'SET_CURRENT_WORD_ON_PAGE';
// export const actionSetCurrentWordOnPage = (wordNumber) => ({
//   type: SET_CURRENT_WORD_ON_PAGE,
//   wordNumber,
// });

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
export const actionClearAnswerAccuracy = () => ({
  type: CLEAR_ANSWER_ACCURACY,
});

export const UPDATE_LEARNING_FLAG = 'UPDATE_LEARNING_FLAG';
export const actionUpdateLearningFlag = (flag) => ({
  type: UPDATE_LEARNING_FLAG,
  payload: flag,
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
