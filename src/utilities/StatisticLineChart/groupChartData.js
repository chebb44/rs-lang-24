import { getDateByString } from '../getDateStringByDate';

export function groupChartData(learnedWords) {
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
