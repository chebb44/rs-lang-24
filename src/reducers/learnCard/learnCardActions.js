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

export const UPDATE_ANSWER_SHOWN_FLAG = 'UPDATE_ANSWER_SHOWN_FLAG';
export const actionUpdateAnswerShownFlag = (flag) => ({
  type: UPDATE_ANSWER_SHOWN_FLAG,
  flag,
});

export const UPDATE_TRANSLATION_SHOWN_FLAG = 'UPDATE_TRANSLATION_SHOWN_FLAG';
export const actionUpdateTranslationShownFlag = (flag) => ({
  type: UPDATE_TRANSLATION_SHOWN_FLAG,
  flag,
});

export const RESET_LEARN_CARD = 'RESET_LEARN_CARD';
export const actionResetLearnCard = () => ({
  type: RESET_LEARN_CARD,
});

export const RESET_NEXT_PREV_LEARN_CARD = 'RESET_NEXT_PREV_LEARN_CARD';
export const actionResetNextPrevLearnCard = () => ({
  type: RESET_NEXT_PREV_LEARN_CARD,
});

export const SET_PROPERTIES_FOR_SUBMITTED_CARD =
  'SET_PROPERTIES_FOR_SUBMITTED_CARD';
export const actionSetPropertiesForSubmittedCard = ({
  correctFlag,
  audios,
}) => ({
  type: SET_PROPERTIES_FOR_SUBMITTED_CARD,
  payload: { correctFlag, audios },
});
