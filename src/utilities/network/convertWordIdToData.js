import { getWordDataById } from './wordsAPI';

export const convertWordIdToData = async (words) => {
  const promiseWords = words.map((wordId) => getWordDataById({ wordId }));
  return Promise.all(promiseWords);
};
