import { months } from '../../components/StatisticLineChart/constants';

export function groupChartDataForTooltip(/* learnedWords */) {
  const learnedWords = {
    1593378000000: 10,
    1593464400000: 30,
    1593550800000: 50,
    1593637200000: 15,
    1596142800000: 1800,
    1598821200000: 157,
  };

  const learnedWordsArray = Object.entries(learnedWords);
  const tooltipData = [];
  for (let i = 0; i < months.length; i++) {
    tooltipData[i] = [];
  }

  learnedWordsArray.forEach((item) => {
    const month = new Date(Number(item[0])).getMonth();
    tooltipData[month].push(
      `${new Date(Number(item[0])).getDay()} ${months[month]}: ${item[1]} слов`,
    );
  });
  return tooltipData;
}
