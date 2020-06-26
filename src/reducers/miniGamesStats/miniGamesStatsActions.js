export const SPRINT_SEND_GAME_RESULT = 'SPRINT_SEND_GAME_RESULT';
export const actionSprintSendGameResult = ({ date, result }) => ({
  type: SPRINT_SEND_GAME_RESULT,
  payload: { date, result },
});
