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
export const actionSavannaSendGameResult = ({
  SavannaDate,
  SavannaResults,
}) => ({
  type: SAVANNA_GET_GAME_RESULT,
  payload: { SavannaDate, SavannaResults },
});

export const AUDIO_CALL_SEND_GAME_RESULT = 'AUDIO_CALL_SEND_GAME_RESULT';
export const actionAudioCallSendGameResult = ({
  audioCallDate,
  audioCallResult,
}) => ({
  type: AUDIO_CALL_SEND_GAME_RESULT,
  payload: { audioCallDate, audioCallResult },
});

export const QUIZ_SEND_GAME_RESULT = 'QUIZ_SEND_GAME_RESULT';
export const actionQuizSendGameResult = ({ quizDate, quizResult }) => ({
  type: QUIZ_SEND_GAME_RESULT,
  payload: { quizDate, quizResult },
});

export const ENGLISH_PUZZLE_SEND_GAME_RESULT =
  'ENGLISH_PUZZLE_SEND_GAME_RESULT';
export const actionEnglishPuzzleSendGameResult = ({
  englishPuzzleDate,
  englishPuzzleResult,
}) => ({
  type: ENGLISH_PUZZLE_SEND_GAME_RESULT,
  payload: { englishPuzzleDate, englishPuzzleResult },
});

export const SET_ALL_MINI_GAMES_STATS = 'SET_ALL_MINI_GAMES_STATS';
export const actionSetAllMiniGamesStats = ({ miniGames }) => ({
  type: SET_ALL_MINI_GAMES_STATS,
  payload: { miniGames },
});

export const RESET_ALL_MINI_GAMES_STATS = 'RESET_ALL_MINI_GAMES_STATS';
export const actionResetAllMiniGamesStats = () => ({
  type: RESET_ALL_MINI_GAMES_STATS,
});
