export const TOKEN = 'TOKEN';
export const USER_ID = 'USER_ID';

// types of words on server
export const LEARNED_WORD = 'LEARNED_WORD';
export const HARD_WORD = 'HARD_WORD';
export const DELETED_WORD = 'DELETED_WORD';

//test actions for dictionary
export const act = [
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f9', wordType: 'LEARNED_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f1', wordType: 'LEARNED_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f4', wordType: 'HARD_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f5', wordType: 'HARD_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f7', wordType: 'DELETED_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f8', wordType: 'DELETED_WORD' },
  },
];
