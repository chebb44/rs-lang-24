import { getWordsByPageAndGroup } from '../../../utilities/network/wordsAPI';

const shuffleArray = (arr) => {
  let j;
  let tmp;
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
  }
  return array;
};

function getArrayRandElement(array) {
  let arrRes = [];
  for (let i = 0; i < 4; i += 1) {
    var rand = Math.floor(Math.random() * array.length);
    arrRes.push(array[rand]);
  }
  return arrRes;
}

export const getWordsForAudioCall = async (group, page) => {
  let newWordsFromApi = await getWordsByPageAndGroup({ page, group });

  newWordsFromApi = shuffleArray(newWordsFromApi)
    .slice(10)
    .map((item) => new Array(item));
  return getFalseWordsForAudioCall(page + 1, group, newWordsFromApi);
};

export const getFalseWordsForAudioCall = async (page, group, wordsForGame) => {
  let falseWords = [];
  const numberOfNeed = 100;
  let wordInPage = 0;

  let newFalseWordsFromApi = await getWordsByPageAndGroup({ page, group });
  for (let i = 0; i < numberOfNeed; i++) {
    if (newFalseWordsFromApi.length === 0) {
      if (group < 29) {
        page += 1;
        wordInPage = 0;
      } else {
        group += 1;
        page = 0;
        wordInPage = 0;
      }
      newFalseWordsFromApi = await getWordsByPageAndGroup({ page, group });
    }
    falseWords.push(newFalseWordsFromApi.shift());
    wordInPage += 1;
  }
  falseWords = shuffleArray(falseWords);

  wordsForGame = wordsForGame.map((item) =>
    item.concat(getArrayRandElement(falseWords)),
  );
  console.log('after wordsForGame', wordsForGame);

  return wordsForGame;
};
