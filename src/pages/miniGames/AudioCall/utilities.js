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
