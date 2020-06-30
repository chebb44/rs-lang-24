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
    '2020,7,1': 157,
    '2020,7,2': 157,
    '2020,7,3': 157,
    '2020,7,4': 157,
    '2020,7,5': 157,
    '2020,7,6': 157,
    '2020,7,7': 157,
    '2020,7,8': 157,
    '2020,7,9': 157,
    '2020,7,10': 157,
    '2020,7,11': 157,
    '2020,7,12': 157,
    '2020,7,13': 157,
    '2020,7,14': 157,
    '2020,7,15': 157,
    '2020,7,16': 157,
    '2020,7,17': 157,
    '2020,7,18': 157,
    '2020,7,19': 157,
    '2020,7,20': 157,
    '2020,7,21': 157,
    '2020,7,22': 157,
    '2020,7,23': 157,
    '2020,7,24': 157,
    '2020,7,25': 157,
    '2020,7,26': 157,
    '2020,7,27': 157,
  };

  const learnedWordsArray = Object.entries(learnedWords);
  const tooltipData = [];
  for (let i = 0; i < months.length; i++) {
    tooltipData[i] = [];
  }

  learnedWordsArray.forEach((item) => {
    const month = getDateByString(item[0]).getMonth();
    tooltipData[month].push(
      `${getDateByString(item[0]).getDate()} ${months[month]}: ${item[1]} слов`,
    );
  });
  return tooltipData;
}
