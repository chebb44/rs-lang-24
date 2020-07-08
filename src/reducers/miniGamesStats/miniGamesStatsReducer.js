import {
  SPRINT_SEND_GAME_RESULT,
  SET_ALL_MINI_GAMES_STATS,
  SPEAK_IT_SEND_GAME_RESULT,
  AUDIO_CALL_SEND_GAME_RESULT,
  RESET_ALL_MINI_GAMES_STATS,
  SAVANNA_GET_GAME_RESULT,
} from './miniGamesStatsActions';
const defaultData = {
  miniGames: {
    sprint: {},
    speakIt: {},
    audioCall: {},
    savanna: {},
  },
};

export const miniGamesStatsSelector = (state) => state.miniGamesStats;

export const miniGamesStats = (state = defaultData, action) => {
  switch (action.type) {
    case RESET_ALL_MINI_GAMES_STATS:
      return defaultData;
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

    case SAVANNA_GET_GAME_RESULT:
      const { SavannaDate, SavannaResults } = action.payload;
      let savannaDayStat = [];
      if (SavannaDate in state.miniGames.savanna) {
        savannaDayStat = [
          ...state.miniGames.savanna[SavannaDate],
          SavannaResults,
        ];
      } else {
        savannaDayStat = [SavannaResults];
      }
      return {
        ...state,
        miniGames: {
          ...state.miniGames,
          savanna: {
            ...state.miniGames.savanna,
            [SavannaDate]: savannaDayStat,

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
