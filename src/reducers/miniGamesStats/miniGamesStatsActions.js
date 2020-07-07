export const SPRINT_SEND_GAME_RESULT = 'SPRINT_SEND_GAME_RESULT';
export const actionSprintSendGameResult = ({ date, result }) => ({
  type: SPRINT_SEND_GAME_RESULT,
  payload: { date, result },
});

export const SPEAK_IT_SEND_GAME_RESULT = 'SPEAK_IT_SEND_GAME_RESULT';
export const actionSpeakItSendGameResult = ({ dates, results }) => ({
  type: SPEAK_IT_SEND_GAME_RESULT,
  payload: { dates, results },
});

export const SAVANNA_GET_GAME_RESULT = 'SAVANNA_GET_GAME_RESULT';
export const actionSavannaSendGameResult = ({ SavannaDate, SavannaResults }) => ({
  type: SAVANNA_GET_GAME_RESULT,
  payload: { SavannaDate, SavannaResults },
});

export const SET_ALL_MINI_GAMES_STATS = 'SET_ALL_MINI_GAMES_STATS';
export const actionSetAllMiniGamesStats = ({ miniGames }) => ({
  type: SET_ALL_MINI_GAMES_STATS,
  payload: { miniGames },
});
