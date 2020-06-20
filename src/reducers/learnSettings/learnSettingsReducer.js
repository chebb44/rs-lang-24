import {
  UPDATE_LEARN_CARD_SETTINGS,
  SET_WORDS_PER_DAY,
  SET_LEARN_SETTINGS,
  SET_AUTO_AUDIO,
  SET_AUTO_TRANSLATE,
} from './learnSettingsActions';

const defaultData = {
  wordsPerDay: 50,
  learnCardSettings: {
    isTranslationOn: true,
    isMeaningOn: true,
    isExampleOn: true,
    isTranscriptionOn: true,
    isImageOn: true,
    isAudioOn: true,
  },
};

export const learnSettingsSelector = (state) => state.learnSettings;
export const learnCardSettingsSelector = (state) =>
  state.learnSettings.learnCardSettings;

export const learnSettings = (state = defaultData, action) => {
  switch (action.type) {
    case UPDATE_LEARN_CARD_SETTINGS:
      return {
        ...state,
        ...action.payload,
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
    default:
      return state;
  }
};
