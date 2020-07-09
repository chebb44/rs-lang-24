export function calculateCorrectAnswersStatistic(answersAccuracyArray) {
  let correctAnswersSeries = 0;
  let correctAnswersAmount = 0;
  const correctSeriesArray = [];
  answersAccuracyArray.forEach((item, index) => {
    if (item === true) {
      correctAnswersAmount++;
      correctAnswersSeries++;
    }
    if (item === false || index === answersAccuracyArray.length - 1) {
      correctSeriesArray.push(correctAnswersSeries);
      correctAnswersSeries = 0;
    }
  });

  const longestCorrectAnswersSeries = Math.max(...correctSeriesArray);
  const correctAnswersPercent = Math.round(
    (correctAnswersAmount / answersAccuracyArray.length) * 100,
  );
  return [correctAnswersPercent, longestCorrectAnswersSeries];
}
