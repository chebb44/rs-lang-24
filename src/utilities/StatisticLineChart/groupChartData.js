import { getDateByString } from '../getDateStringByDate';

export function groupChartData(/* learnedWords */) {
  const learnedWords = {
    '2020,5,27': 10,
    '2020,5,30': 30,
    '2020,6,27': 50,
    '2020,6,28': 15,
    '2020,6,30': 1800,
    '2020,7,30': 68,
    '2020,7,1': 21,
    '2020,7,2': 15,
    '2020,7,3': 35,
    '2020,7,4': 18,
    '2020,7,5': 45,
    '2020,7,6': 65,
    '2020,7,7': 22,
    '2020,7,8': 23,
    '2020,7,9': 46,
    '2020,7,10': 27,
    '2020,7,11': 32,
    '2020,7,12': 57,
    '2020,7,13': 60,
    '2020,7,14': 42,
    '2020,7,15': 31,
    '2020,7,16': 25,
    '2020,7,17': 25,
    '2020,7,18': 17,
    '2020,7,19': 10,
    '2020,7,20': 15,
    '2020,7,21': 13,
    '2020,7,22': 66,
    '2020,7,23': 70,
    '2020,7,24': 52,
    '2020,7,25': 36,
    '2020,7,26': 61,
    '2020,7,27': 16,
  };

  const dataPerMonth = {};
  const firstActiveMonth = getDateByString(
    Object.keys(learnedWords)[0],
  ).getMonth();
  for (let i = 0; i < firstActiveMonth; i++) {
    dataPerMonth[i] = 0;
  }

  for (let key in learnedWords) {
    const month = getDateByString(key).getMonth();
    if (dataPerMonth[month]) {
      dataPerMonth[month] += learnedWords[key];
    } else {
      dataPerMonth[month] = learnedWords[key];
    }
  }
  const data = Object.values(dataPerMonth);
  return data;
}
