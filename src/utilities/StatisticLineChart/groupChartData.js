import { getDateByString } from '../getDateStringByDate';

export function groupChartData(/* learnedWords */) {
  const learnedWords = {
    '2020,5,27': 10,
    '2020,5,30': 30,
    '2020,6,27': 50,
    '2020,6,28': 15,
    '2020,6,30': 1800,
    '2020,7,30': 157,
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
