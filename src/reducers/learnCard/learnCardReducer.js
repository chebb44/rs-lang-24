import {
  UPDATE_CURRENT_CARD_INDEX,
  UPDATE_ENTERED_WORD,
  UPDATE_CHECK_DISPLAYING,
  UPDATE_WORD_CORRECT_FLAG,
  UPDATE_AUDIOS_TO_PLAY,
  UPDATE_CURRENT_AUDIO,
  UPDATE_SUBMISSION_FLAG,
  UPDATE_LAST_CORRECT_WORD_INDEX,
  UPDATE_ANSWER_SHOWN_FLAG,
} from './learnCardActions';

const defaultData = {
  currentLearnCardIndex: 0,
  //lastCorrectWordIndex: -1,
  enteredWord: '',
  isWordSubmitted: false,
  isWordCorrect: false,
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
    case UPDATE_SUBMISSION_FLAG:
      return {
        ...state,
        isWordSubmitted: action.flag,
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
    default:
      return state;
  }
};
