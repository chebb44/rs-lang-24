import {
  SPRINT_SEND_GAME_RESULT,
  SET_ALL_MINI_GAMES_STATS,
} from './miniGamesStatsActions';
const defaultData = {
  miniGames: {
    sprint: {},
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
    case SET_ALL_MINI_GAMES_STATS: {
      const { miniGames } = action.payload;
      return {
        miniGames,
      };
    }
    default:
      return state;
  }
};
