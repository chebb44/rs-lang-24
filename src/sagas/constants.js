export const TOKEN = 'TOKEN';
export const USER_ID = 'USER_ID';
export const TOKEN_OUTDATED = 'TOKEN_OUTDATED';

// types of words on server
export const LEARNED_WORD = 'LEARNED_WORD';
export const NEXT_TRAIN_WORD = 'NEXT_TRAIN_WORD';
export const HARD_WORD = 'HARD_WORD';
export const GOOD_WORD = 'GOOD_WORD';
export const EASY_WORD = 'EASY_WORD';
export const DELETED_WORD = 'DELETED_WORD';

export const STEP_BASIS = 0.2;
export const STEP_WORDS = {
  LEARNED_WORD: 3,
  HARD_WORD: 1,
  GOOD_WORD: 3,
  EASY_WORD: 5,
};

export const WORDS_DIFFICULTY = {
  LEARNED_WORD: 'не указана',
  NEXT_TRAIN_WORD: 'не указана',
  HARD_WORD: 'сложное',
  GOOD_WORD: 'хорошее',
  EASY_WORD: 'легкое',
  DELETED_WORD: 'не указана',
};

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
    payload: { wordId: '5e9f5ee35eb9e72bc21af4f4', difficulty: 'EASY_WORD' },
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
