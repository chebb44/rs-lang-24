export const shuffleCards = ({ cards }) => {
  const lightCards = cards.map((card) => {
    return {
      _id: card['_id'],
      word: card.word,
      wordTranslate: card.wordTranslate,
      correct: true,
    };
  });
  const axis = Math.floor(lightCards.length / 2);
  const correctHalf = lightCards.slice(0, axis);
  let shuffleHalf = lightCards.slice(axis);
  shuffleHalf = shuffleTranslate(shuffleHalf);
  const shuffledCards = [...correctHalf, ...shuffleHalf].sort(
    () => Math.random() - 0.5,
  );
  return { shuffledCards };
};

const shuffleTranslate = (cards) => {
  const words = cards.map((card) => {
    return {
      _id: card['_id'],
      word: card.word,
      correct: false,
    };
  });
  const translate = cards.map((card) => {
    return {
      wordTranslate: card.wordTranslate,
    };
  });
  translate.sort(() => Math.random() - 0.5);
  const outArray = words.map((word, i) => {
    return {
      ...word,
      wordTranslate: translate[i].wordTranslate,
    };
  });
  return outArray;
};
