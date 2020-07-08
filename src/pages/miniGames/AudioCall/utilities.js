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

export function getArrayRandElement(array) {
  let arrRes = [];
  for (let i = 0; i < 4; i += 1) {
    var rand = Math.floor(Math.random() * array.length);
    arrRes.push(array[rand]);
  }
  return arrRes;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRndIntegerDependencePage(page) {
  if (page < 4) {
    return 0;
  } else if (page >= 4 && page < 9) {
    return 4;
  } else if (page >= 9 && page < 14) {
    return 9;
  } else if (page >= 14 && page < 19) {
    return 14;
  } else if (page >= 19 && page < 24) {
    return 19;
  } else if (page >= 24) {
    return 24;
  }
}

export function getRndIntegerPage(page) {
  if (page < 4) {
    return getRndInteger(0, 3);
  } else if (page >= 4 && page < 9) {
    return getRndInteger(4, 8);
  } else if (page >= 9 && page < 14) {
    return getRndInteger(9, 13);
  } else if (page >= 14 && page < 19) {
    return getRndInteger(14, 18);
  } else if (page >= 19 && page < 24) {
    return getRndInteger(19, 23);
  } else if (page >= 24) {
    return getRndInteger(24, 29);
  }
}

export const getDateStringByDate = (date) => {
  return `${date.getFullYear()},${date.getMonth()},${date.getDate()}`;
};

export const getDateByString = (string) => {
  const [year, month, day] = string.split(',');
  return new Date(year, month, day);
};
