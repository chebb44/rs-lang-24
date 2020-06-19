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
