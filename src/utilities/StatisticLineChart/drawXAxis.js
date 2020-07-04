export function drawXAxis(
  context,
  x,
  y,
  height,
  width,
  numXTicks,
  maxX,
  padding,
) {
  context.save();
  context.beginPath();
  context.moveTo(x, y + height);
  context.lineTo(x + width, y + height);
  context.stroke();

  for (let n = 0; n < numXTicks; n++) {
    context.beginPath();
    context.moveTo(((n + 1) * width) / numXTicks + x, y + height);
    context.lineTo(((n + 1) * width) / numXTicks + x, y);
    context.stroke();

    const label = Math.round(((n + 1) * maxX) / numXTicks);
    context.save();
    context.translate(((n + 1) * width) / numXTicks + x, y + height + padding);
    context.fillText(label, 0, 0);
    context.restore();
  }
  context.restore();
}
