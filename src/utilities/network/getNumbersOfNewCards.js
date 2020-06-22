import { getWordsByPageAndGroup } from './wordsAPI';

export const getNumbersOfNewCards = async ({
  wordsGroup,
  wordsPage,
  wordOnPage,
  numberOfNeed,
}) => {
  let page = wordsPage;
  let group = wordsGroup;
  let wordInPage = wordOnPage;
  const cardsForLearn = [];
  let newCardsFromApi = await getWordsByPageAndGroup({ page, group });
  newCardsFromApi = newCardsFromApi.slice(wordInPage);

  for (let i = 0; i < numberOfNeed; i++) {
    if (newCardsFromApi.length === 0) {
      if (group < 29) {
        page += 1;
        wordInPage = 0;
      } else {
        group += 1;
        page = 0;
        wordInPage = 0;
      }
      newCardsFromApi = await getWordsByPageAndGroup({ page, group });
    }
    cardsForLearn.push(newCardsFromApi.shift());
    wordInPage += 1;
  }
  return { cardsForLearn, page, group, wordInPage };
};
