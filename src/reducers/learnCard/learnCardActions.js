export const UPDATE_CURRENT_CARD_INDEX = 'UPDATE_CURRENT_CARD_INDEX';
export const actionUpdateCurrentCardIndex = (index) => ({
  type: UPDATE_CURRENT_CARD_INDEX,
  index,
});

export const UPDATE_ENTERED_WORD = 'UPDATE_ENTERED_WORD';
export const actionUpdateEnteredWord = (word) => ({
  type: UPDATE_ENTERED_WORD,
  word,
});

export const UPDATE_CHECK_DISPLAYING = 'UPDATE_CHECK_DISPLAYING';
export const actionUpdateCheckDisplaying = (flag) => ({
  type: UPDATE_CHECK_DISPLAYING,
  flag,
});

export const UPDATE_WORD_CORRECT_FLAG = 'UPDATE_WORD_CORRECT_FLAG';
export const actionUpdateWordCorrectFlag = (flag) => ({
  type: UPDATE_WORD_CORRECT_FLAG,
  flag,
});

export const UPDATE_AUDIOS_TO_PLAY = 'UPDATE_AUDIOS_TO_PLAY';
export const actionUpdateAudiosToPlay = (audios) => ({
  type: UPDATE_AUDIOS_TO_PLAY,
  audios,
});

export const UPDATE_CURRENT_AUDIO = 'UPDATE_CURRENT_AUDIO';
export const actionUpdateCurrentAudio = (audio) => ({
  type: UPDATE_CURRENT_AUDIO,
  audio,
});

export const UPDATE_SUBMISSION_FLAG = 'UPDATE_SUBMISSION_FLAG';
export const actionUpdateSubmissionFlag = (flag) => ({
  type: UPDATE_SUBMISSION_FLAG,
  flag,
});

export const UPDATE_LAST_CORRECT_WORD_INDEX = 'UPDATE_LAST_CORRECT_WORD_INDEX';
export const actionUpdateLastCorrectWordIndex = (index) => ({
  type: UPDATE_LAST_CORRECT_WORD_INDEX,
  index,
});

export const UPDATE_ANSWER_SHOWN_FLAG = 'UPDATE_ANSWER_SHOWN_FLAG';
export const actionUpdateAnswerShownFlag = (flag) => ({
  type: UPDATE_ANSWER_SHOWN_FLAG,
  flag,
});
