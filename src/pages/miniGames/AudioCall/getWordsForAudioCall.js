import { getWordsByPageAndGroup } from '../../../utilities/network/wordsAPI';
import {
  shuffleArray,
  getArrayRandElement,
  getRndIntegerPage,
  getRndIntegerDependencePage,
} from './utilities';

export const getWordsForAudioCall = async (pageGet, group, learnedWords) => {
  if (!learnedWords) {
    let page = getRndIntegerPage(pageGet);
    learnedWords = await getWordsByPageAndGroup({ page, group });
    learnedWords = shuffleArray(learnedWords).slice(10);
  }

  let falseWords = [];
  const numberOfNeed = 100;
  let page = getRndIntegerDependencePage(pageGet);
  let newFalseWordsFromApi = await getWordsByPageAndGroup({ page, group });
  for (let i = 0; i < numberOfNeed; i++) {
    if (newFalseWordsFromApi.length === 0) {
      page += 1;
      newFalseWordsFromApi = await getWordsByPageAndGroup({ page, group });
    }
    falseWords.push(newFalseWordsFromApi.shift());
  }
  falseWords = shuffleArray(falseWords);

  learnedWords = learnedWords.map((item) =>
    new Array(item).concat(getArrayRandElement(falseWords)),
  );

  return learnedWords;
};
