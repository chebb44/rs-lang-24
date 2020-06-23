import {
  SET_CHECK_BUTTON_FLAG,
  SET_SHOW_ANSWER_BUTTON_FLAG,
} from './learnCardButtonsActions';

const defaultData = {
  checkButton: false,
  showAnswerButton: false,
};

export const buttonsFlagsSelector = (state) => state.learnCardButtons;

export const learnCardButtons = (state = defaultData, action) => {
  switch (action.type) {
    case SET_CHECK_BUTTON_FLAG:
      return {
        ...state,
        checkButton: action.flag,
      };
    case SET_SHOW_ANSWER_BUTTON_FLAG:
      return {
        ...state,
        showAnswerButton: action.flag,
      };
    default:
      return state;
  }
};
