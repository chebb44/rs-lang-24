import {
  AUDIO_CALL_SAVE_GAME_ROUND,
  AUDIO_CALL_SAVE_GAME_LEVEL,
  SET_ALL_MINI_GAMES_DIFFICULTY,
  QUIZ_SAVE_GAME_ROUND,
  QUIZ_SAVE_GAME_LEVEL,
} from './miniGamesDifficultyActions';
const defaultData = {
  sprint: {
    level: 0,
    round: 0,
  },
  speakIt: {
    level: 0,
    round: 0,
  },
  audioCall: {
    level: 0,
    round: 0,
  },
  quiz: {
    level: 0,
    round: 0,
  },
};

export const miniGamesDifficultySelector = (state) => state.miniGamesDifficulty;

export const miniGamesDifficulty = (state = defaultData, action) => {
  switch (action.type) {
    case AUDIO_CALL_SAVE_GAME_LEVEL:
      return {
        ...state,
        audioCall: {
          ...state.audioCall,
          level: action.payload,
        },
      };
    case AUDIO_CALL_SAVE_GAME_ROUND:
      return {
        ...state,
        audioCall: {
          ...state.audioCall,
          round: action.payload,
        },
      };
    case QUIZ_SAVE_GAME_LEVEL:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          level: action.payload,
        },
      };
    case QUIZ_SAVE_GAME_ROUND:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          round: action.payload,
        },
      };
    case SET_ALL_MINI_GAMES_DIFFICULTY: {
      return {
        ...state,
        ...action.payload.miniGamesDifficulty,
      };
    }
    default:
      return state;
  }
};
