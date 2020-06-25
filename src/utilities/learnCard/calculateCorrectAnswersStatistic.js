export function calculateCorrectAnswersStatistic(answersAccuracyArray) {
  let correctAnswersSeries = 0;
  let correctAnswersAmount = 0;
  const correctSeriesArray = [];
  answersAccuracyArray.forEach((item) => {
    if (item === true) {
      correctAnswersAmount++;
      correctAnswersSeries++;
    } else if (item === false) {
      correctSeriesArray.push(correctAnswersSeries);
      correctAnswersSeries = 0;
    }
  });
  console.log(answersAccuracyArray, correctSeriesArray);
  const longestCorrectAnswersSeries = Math.max(...correctSeriesArray);
  const correctAnswersPercent = Math.round(
    (correctAnswersAmount / answersAccuracyArray.length) * 100,
  );
  return [correctAnswersPercent, longestCorrectAnswersSeries];
}
