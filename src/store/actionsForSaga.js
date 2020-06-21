export const INIT_APP = 'INIT_APP';
export const actionInitApp = () => ({
  type: INIT_APP,
});

export const INIT_CARD_SET = 'INIT_CARD_SET';
export const actionInitCardSet = () => ({
  type: INIT_CARD_SET,
});

export const MARK_WORD = 'MARK_WORD';
export const actionMarkWord = ({ wordId, wordType }) => ({
  type: MARK_WORD,
  payload: { wordId, wordType },
});
