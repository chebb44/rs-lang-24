export const AUDIO_CALL_SAVE_GAME_LEVEL = 'AUDIO_CALL_SAVE_GAME_LEVEL';
export const actionAudioCallSaveGameLevel = (level) => ({
  type: AUDIO_CALL_SAVE_GAME_LEVEL,
  payload: level,
});

export const AUDIO_CALL_SAVE_GAME_ROUND = 'AUDIO_CALL_SAVE_GAME_ROUND';
export const actionAudioCallSaveGameRound = (round) => ({
  type: AUDIO_CALL_SAVE_GAME_ROUND,
  payload: round,
});

export const SET_ALL_MINI_GAMES_DIFFICULTY = 'SET_ALL_MINI_GAMES_DIFFICULTY';
export const actionSetAllMiniGamesDifficulty = ({ miniGamesDifficulty }) => ({
  type: SET_ALL_MINI_GAMES_DIFFICULTY,
  payload: { miniGamesDifficulty },
});
