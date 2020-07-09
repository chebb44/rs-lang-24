import { months } from '../../components/StatisticLineChart/constants';
import { getDateByString } from '../getDateStringByDate';

export function groupChartDataForTooltip(learnedWords) {
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
