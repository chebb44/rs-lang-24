export const TOKEN = 'TOKEN';
export const USER_ID = 'USER_ID';

// types of words on server
export const LEARNED_WORD = 'LEARNED_WORD';
export const NEXT_TRAIN_WORD = 'NEXT_TRAIN_WORD';
export const HARD_WORD = 'HARD_WORD';
export const GOOD_WORD = 'GOOD_WORD';
export const EASY_WORD = 'EASY_WORD';
export const DELETED_WORD = 'DELETED_WORD';

//test actions for dictionary
export const act = [
  {
    type: 'MARK_WORD',
    payload: {
      wordId: '5e9f5ee35eb9e72bc21af4f2',
      difficulty: 'NEXT_TRAIN_WORD',
    },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f1', difficulty: 'GOOD_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f4', difficulty: 'HARD_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f5', difficulty: 'GOOD_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f7', difficulty: 'EASY_WORD' },
  },
  {
    type: 'MARK_WORD',
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f8', difficulty: 'DELETED_WORD' },
  },
];
