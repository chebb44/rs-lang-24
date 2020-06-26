import { SPRINT_SEND_GAME_RESULT } from './miniGamesStatsActions';
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
        console.log('date in');
        dayStat = [...state.miniGames.sprint[date], result];
      } else {
        console.log('date out');
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
    default:
      return state;
  }
};
