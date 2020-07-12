export const formatLearnCardText = (learnCard) => {
  const learnCardFormatted = {};
  for (let key in learnCard) {
    if (key === 'wordTranslate') {
      learnCardFormatted[key] =
        learnCard[key].slice(0, 1).toUpperCase() + learnCard[key].slice(1);
    } else if (
      key === 'textMeaning' ||
      key === 'textExample' ||
      key === 'textExampleTranslate' ||
      key === 'textMeaningTranslate'
    ) {
      learnCardFormatted[key] =
        learnCard[key][learnCard[key].length - 1] === '.'
          ? learnCard[key].slice(0, 1).toUpperCase() + learnCard[key].slice(1)
          : learnCard[key].slice(0, 1).toUpperCase() +
            learnCard[key].slice(1) +
            '.';
    } else {
      learnCardFormatted[key] = learnCard[key];
    }
  }
  return learnCardFormatted;
};
