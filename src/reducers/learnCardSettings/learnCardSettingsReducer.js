import { UPDATE_LEARN_CARD_SETTINGS } from './learnCardSettingsActions';

const defaultData = {
  learnCardSettings: {
    isTranslationOn: true,
    isMeaningOn: true,
    isExampleOn: true,
    isTranscriptionOn: true,
    isImageOn: true,
  },
};

export const learnCardSettingsSelector = (state) => state.learnCardSettings;

export const learnCardSettings = (state = defaultData, action) => {
  switch (action.type) {
    case UPDATE_LEARN_CARD_SETTINGS:
      return {
        ...state,
        learnCardSettings: action.learnCardSettings,
      };
    default:
      return state;
  }
};
