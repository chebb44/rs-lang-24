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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination,
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
