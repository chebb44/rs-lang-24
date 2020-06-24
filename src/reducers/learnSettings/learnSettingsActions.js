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

export const UPDATE_LEARNING_SET_FINISH_FLAG =
  'UPDATE_LEARNING_SET_FINISH_FLAG';
export const actionUpdateLearningSetFinishFlag = (flag) => ({
  type: UPDATE_LEARNING_SET_FINISH_FLAG,
  payload: flag,
});

export const UPDATE_LEARNING_FLAG = 'UPDATE_LEARNING_FLAG';
export const actionUpdateLearningFlag = (flag) => ({
  type: UPDATE_LEARNING_FLAG,
  payload: flag,
});
