export const SPRINT_SEND_GAME_RESULT = 'SPRINT_SEND_GAME_RESULT';
export const actionSprintSendGameResult = ({ date, result }) => ({
  type: SPRINT_SEND_GAME_RESULT,
  payload: { date, result },
});

export const SET_ALL_MINI_GAMES_STATS = 'SET_ALL_MINI_GAMES_STATS';
export const actionSetAllMiniGamesStats = ({ miniGames }) => ({
  type: SET_ALL_MINI_GAMES_STATS,
  payload: { miniGames },
});
