export function drawYAxis(
  context,
  x,
  y,
  height,
  width,
  numYTicks,
  maxY,
  padding,
) {
  context.save();
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x, y + height);
  context.stroke();
  context.restore();

  for (let n = 0; n < numYTicks; n++) {
    context.beginPath();
    context.moveTo(x, (n * height) / numYTicks + y);
    context.lineTo(x + width, (n * height) / numYTicks + y);
    context.stroke();

    const label = Math.round(maxY - (n * maxY) / numYTicks);
    context.save();
    context.translate(x - padding, (n * height) / numYTicks + y);
    context.fillText(`${label}%`, 0, 0);
    context.restore();
  }
  context.restore();
}
