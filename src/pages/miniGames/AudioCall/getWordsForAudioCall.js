import { getWordsByPageAndGroup } from '../../../utilities/network/wordsAPI';
import { shuffleArray, getArrayRandElement } from './utilities';

export const getWordsForAudioCall = async (group, page) => {
  let newWordsFromApi = await getWordsByPageAndGroup({ page, group });

  newWordsFromApi = shuffleArray(newWordsFromApi).slice(10);
  return getFalseWordsForAudioCall(page + 1, group, newWordsFromApi);
};

export const getFalseWordsForAudioCall = async (page, group, wordsForGame) => {
  let falseWords = [];
  const numberOfNeed = 100;

  let newFalseWordsFromApi = await getWordsByPageAndGroup({ page, group });
  for (let i = 0; i < numberOfNeed; i++) {
    if (newFalseWordsFromApi.length === 0) {
      if (group < 29) {
        page += 1;
      } else {
        group += 1;
        page = 0;
      }
      newFalseWordsFromApi = await getWordsByPageAndGroup({ page, group });
    }
    falseWords.push(newFalseWordsFromApi.shift());
  }
  falseWords = shuffleArray(falseWords);

  wordsForGame = wordsForGame.map((item) =>
    new Array(item).concat(getArrayRandElement(falseWords)),
  );

  return wordsForGame;
};
