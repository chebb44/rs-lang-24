import {
  SPRINT_SEND_GAME_RESULT,
  SET_ALL_MINI_GAMES_STATS,
  SPEAK_IT_SEND_GAME_RESULT,
  AUDIO_CALL_SEND_GAME_RESULT,
  QUIZ_SEND_GAME_RESULT,
} from './miniGamesStatsActions';
const defaultData = {
  miniGames: {
    sprint: {},
    speakIt: {},
    audioCall: {},
    quiz: {},
  },
};

export const miniGamesStatsSelector = (state) => state.miniGamesStats;

export const miniGamesStats = (state = defaultData, action) => {
  switch (action.type) {
    case SPRINT_SEND_GAME_RESULT:
      const { date, result } = action.payload;
      let dayStat = [];
      if (date in state.miniGames.sprint) {
        dayStat = [...state.miniGames.sprint[date], result];
      } else {
        dayStat = [result];
      }
      return {
        ...state,
        miniGames: {
          ...state.miniGames,
          sprint: {
            ...state.miniGames.sprint,
            [date]: dayStat,
          },
        },
      };
    case SPEAK_IT_SEND_GAME_RESULT:
      const { dates, results } = action.payload;
      let speakItDayStat = [];
      if (dates in state.miniGames.speakIt) {
        speakItDayStat = [...state.miniGames.speakIt[dates], results];
      } else {
        speakItDayStat = [results];
      }
      return {
        ...state,
        miniGames: {
          ...state.miniGames,
          speakIt: {
            ...state.miniGames.speakIt,
            [dates]: speakItDayStat,
          },
        },
      };
    case AUDIO_CALL_SEND_GAME_RESULT:
      const { audioCallDate, audioCallResult } = action.payload;
      let audioCallDayStat = [];
      if (audioCallDate in state.miniGames.audioCall) {
        audioCallDayStat = [
          ...state.miniGames.audioCall[audioCallDate],
          audioCallResult,
        ];
      } else {
        audioCallDayStat = [audioCallResult];
      }
      return {
        ...state,
        miniGames: {
          ...state.miniGames,
          audioCall: {
            ...state.miniGames.audioCall,
            [audioCallDate]: audioCallDayStat,
          },
        },
      };
    case QUIZ_SEND_GAME_RESULT:
      const { quizDate, quizResult } = action.payload;
      let quizDayStat = [];
      if (quizDate in state.miniGames.quiz) {
        quizDayStat = [...state.miniGames.quiz[quizDate], quizResult];
      } else {
        quizDayStat = [quizResult];
      }
      return {
        ...state,
        miniGames: {
          ...state.miniGames,
          quiz: {
            ...state.miniGames.quiz,
            [quizDate]: quizDayStat,
          },
        },
      };
    case SET_ALL_MINI_GAMES_STATS: {
      return {
        ...state,
        miniGames: {
          ...state.miniGames,
          ...action.payload.miniGames,
        },
      };
    }
    default:
      return state;
  }
};
