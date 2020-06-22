import { defaultLearnSettings } from './../../store/defaultAppSettings';
import {
  // SET_CURRENT_WORDS_PAGE,
  // SET_CURRENT_WORDS_GROUP,
  // SET_CURRENT_WORD_ON_PAGE,
  SET_PAGE_GROUP_WORD_NUMBER,
  SET_LEARN_MODE,
  UPDATE_PREV_PAGE_GROUP_WORD_NUMBER,
  SET_MEANING_WORD,
  SET_EXAMPLE_WORD,
  SET_TRANSCRIPTION_WORD,
  SET_IMAGE,
} from './learnSettingsActions';
import {
  SET_WORDS_PER_DAY,
  SET_LEARN_SETTINGS,
  SET_LEARN_CARD_SETTINGS,
  SET_AUTO_AUDIO,
  SET_AUTO_TRANSLATE,
} from './learnSettingsActions';

export const learnSettingsSelector = (state) => state.learnSettings;
export const learnCardSettingsSelector = (state) =>
  state.learnSettings.learnCardSettings;

export const learnSettings = (state = defaultLearnSettings, action) => {
  switch (action.type) {
    case SET_LEARN_CARD_SETTINGS:
      return {
        ...state,
        learnCardSettings: action.payload,
      };
    case SET_WORDS_PER_DAY:
      return {
        ...state,
        wordsPerDay: action.payload,
      };
    case SET_LEARN_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    // case SET_CURRENT_WORDS_PAGE:
    //   return {
    //     ...state,
    //     currentWordsPage: action.page,
    //   };
    // case SET_CURRENT_WORDS_GROUP:
    //   return {
    //     ...state,
    //     currentWordsGroup: action.group,
    //   };
    // case SET_CURRENT_WORD_ON_PAGE:
    //   return {
    //     ...state,
    //     currentWordOnPage: action.wordNumber,
    //   };
    case SET_PAGE_GROUP_WORD_NUMBER:
      const { page, group, wordInPage } = action.data;
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          currentWordsGroup: group,
          currentWordsPage: page,
          currentWordOnPage: wordInPage,
        },
      };
    case UPDATE_PREV_PAGE_GROUP_WORD_NUMBER:
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          prevWordsGroup: state.learnCardSettings.currentWordsGroup,
          prevWordsPage: state.learnCardSettings.currentWordsPage,
          prevWordOnPage: state.learnCardSettings.currentWordOnPage,
        },
      };
    case SET_AUTO_AUDIO:
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          isAudioOn: action.payload,
        },
      };
    case SET_AUTO_TRANSLATE:
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          isTranslationOn: action.payload,
        },
      };
    case SET_LEARN_MODE:
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          learnMode: action.payload,
        },
      };
    case SET_MEANING_WORD:
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          isMeaningOn: action.payload,
        },
      };
    case SET_EXAMPLE_WORD:
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          isExampleOn: action.payload,
        },
      };
    case SET_TRANSCRIPTION_WORD:
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          isTranscriptionOn: action.payload,
        },
      };
    case SET_IMAGE:
      return {
        ...state,
        learnCardSettings: {
          ...state.learnCardSettings,
          isImageOn: action.payload,
        },
      };
    default:
      return state;
  }
};
