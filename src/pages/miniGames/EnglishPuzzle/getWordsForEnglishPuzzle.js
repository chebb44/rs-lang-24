import { getWordsByPageAndGroup } from '../../../utilities/network/wordsAPI';
import { shuffleArray, getRndIntegerPage } from './utilities';
import { MAX_WORDS_FOR_GAME } from './constants';

export const getWordsForEnglishPuzzle = async (pageGet, group) => {
  let page = getRndIntegerPage(pageGet);
  let learnedWords = await getWordsByPageAndGroup({ page, group });
  learnedWords = shuffleArray(learnedWords).slice(0, MAX_WORDS_FOR_GAME);
  return learnedWords;
};

export const getLearnedWordsForEnglishPuzzle = (learnedWords) => {
  learnedWords = shuffleArray(learnedWords).slice(0, MAX_WORDS_FOR_GAME);
  return learnedWords;
};
