import {
  UPDATE_CURRENT_CARD_INDEX,
  UPDATE_ENTERED_WORD,
  UPDATE_CHECK_DISPLAYING,
  UPDATE_WORD_CORRECT_FLAG,
  UPDATE_AUDIOS_TO_PLAY,
  UPDATE_CURRENT_AUDIO,
  UPDATE_ANSWER_SHOWN_FLAG,
  UPDATE_TRANSLATION_SHOWN_FLAG,
  RESET_LEARN_CARD,
  RESET_NEW_LEARN_CARD,
} from './learnCardActions';

const defaultData = {
  currentLearnCardIndex: 0,
  enteredWord: '',
  isWordCorrect: false,
  isTranslationShown: false,
  isCheckDisplayed: false,
  isAnswerShown: false,
  audiosToPlay: [],
  currentAudio: null,
};

export const learnCardParametersSelector = (state) => state.learnCard;

export const learnCard = (state = defaultData, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CARD_INDEX:
      return {
        ...state,
        currentLearnCardIndex: action.index,
      };
    case UPDATE_ENTERED_WORD:
      return {
        ...state,
        enteredWord: action.word,
      };
    case UPDATE_CHECK_DISPLAYING:
      return {
        ...state,
        isCheckDisplayed: action.flag,
      };
    case UPDATE_WORD_CORRECT_FLAG:
      return {
        ...state,
        isWordCorrect: action.flag,
      };
    case UPDATE_AUDIOS_TO_PLAY:
      return {
        ...state,
        audiosToPlay: action.audios,
      };
    case UPDATE_CURRENT_AUDIO:
      return {
        ...state,
        currentAudio: action.audio,
      };
    case UPDATE_ANSWER_SHOWN_FLAG:
      return {
        ...state,
        isAnswerShown: action.flag,
      };
    case UPDATE_TRANSLATION_SHOWN_FLAG:
      return {
        ...state,
        isTranslationShown: action.flag,
      };
    case RESET_LEARN_CARD:
      return {
        ...state,
        currentLearnCardIndex: 0,
        enteredWord: '',
        isWordCorrect: false,
        isTranslationShown: false,
        isCheckDisplayed: false,
        isAnswerShown: false,
        audiosToPlay: [],
        currentAudio: null,
      };
    case RESET_NEW_LEARN_CARD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
