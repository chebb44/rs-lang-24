import { months } from '../../components/StatisticLineChart/constants';
import { getDateByString } from '../getDateStringByDate';

export function groupChartDataForTooltip(/* learnedWords */) {
  const learnedWords = {
    '2020,5,27': 10,
    '2020,5,30': 30,
    '2020,6,27': 50,
    '2020,6,28': 15,
    '2020,6,30': 1800,
    '2020,7,30': 157,
  };

  const learnedWordsArray = Object.entries(learnedWords);
  const tooltipData = [];
  for (let i = 0; i < months.length; i++) {
    tooltipData[i] = [];
  }

  learnedWordsArray.forEach((item) => {
    console.log(getDateByString(item[0]).getDate());



    const month = getDateByString(item[0]).getMonth();
    tooltipData[month].push(
      `${getDateByString(item[0]).getDate()} ${months[month]}: ${item[1]} слов`,
    );
  });
  return tooltipData;
}
