export function groupChartData(/* learnedWords */) {
  const learnedWords = {
    1593378000000: 10,
    1593464400000: 30,
    1593550800000: 50,
    1593637200000: 15,
    1596142800000: 1800,
    1598821200000: 157,
  };

  const dataPerMonth = {};
  const firstActiveMonth = new Date(
    Number(Object.keys(learnedWords)[0]),
  ).getMonth();
  for (let i = 0; i < firstActiveMonth; i++) {
    dataPerMonth[i] = 0;
  }

  for (let key in learnedWords) {
    const month = new Date(Number(key)).getMonth();
    if (dataPerMonth[month]) {
      dataPerMonth[month] += learnedWords[key];
    } else {
      dataPerMonth[month] = learnedWords[key];
    }
  }
  const data = Object.values(dataPerMonth);
  return data;
}
