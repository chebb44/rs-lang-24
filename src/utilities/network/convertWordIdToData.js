import { getAggregateUserWordById } from './wordsAPI';

export const convertWordIdToData = async ({ words, token, userId }) => {
  const promiseWords = words.map((wordId) =>
    getAggregateUserWordById({ wordId, userId, token }),
  );
  return Promise.all(promiseWords);
};

// export const convertWordIdToData = async (words) => {
//   const promiseWords = words.map((wordId) => getWordDataById({ wordId }));
//   return Promise.all(promiseWords);
// };
