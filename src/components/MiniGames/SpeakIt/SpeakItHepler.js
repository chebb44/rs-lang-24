export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const searchCardIndexInArray = (cardId, cardsArray) => {
  return cardsArray.findIndex((card) => card._id === cardId);
};

export const setActiveCardInArray = (cardIdx, cardsArray) => {
  return cardsArray.map((card, idx) => {
    card.active = idx === cardIdx;
    return card;
  });
};

export const shuffleArray = (arr) => {
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

export const getRecognisedWordsArrayFromEvent = (event) => {
  let recognisedVars = [];
  for (let resultKey in event.results[0]) {
    recognisedVars.push(event.results[0][resultKey].transcript);
  }
  recognisedVars = recognisedVars
    .filter((val) => val)
    .map((val) => val.toLowerCase());
  console.log(recognisedVars);
  return recognisedVars;
};
