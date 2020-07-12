export function drawLine(
  context,
  data,
  scaleX,
  scaleY,
  mainLineWidth,
  mainLineColor,
  mainLineFillColor,
  x,
  y,
  height,
) {
  const totalWords = 3600;
  context.save();
  transformContext();
  context.lineWidth = mainLineWidth;
  context.strokeStyle = mainLineColor;
  context.fillStyle = mainLineFillColor;
  context.beginPath();
  context.moveTo(data[0][1] * scaleX, (data[0][1] / 3600) * 100 * scaleY);

  let totalLearnedWords = 0;

  for (let n = 0; n < data.length; n++) {
    const point = data[n];
    totalLearnedWords += point[1];

    // draw segment
    context.lineTo(
      totalLearnedWords * scaleX,
      (totalLearnedWords / totalWords) * 100 * scaleY,
    );
    context.stroke();
    context.closePath();

    //position for next segment
    context.beginPath();
    context.moveTo(
      totalLearnedWords * scaleX,
      (totalLearnedWords / totalWords) * 100 * scaleY,
    );
  }

  function transformContext() {
    context.translate(x, y + height);
    context.scale(1, -1);
  }
}
