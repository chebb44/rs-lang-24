import { drawXAxis } from './drawXAxis';
import { drawYAxis } from './drawYAxis';
import { drawLine } from './drawLine';

export function drawGraph(canvas, context, learnedWords) {
  // constants
  const strokeColor = '#BEE3DB';
  const fontColor = '#7ca09f';
  const mainLineWidth = 2.5;
  const mainLineColor = '#7ca09f';
  const mainLineFillColor = '#BEE3DB';
  const fontHeight = 17;
  const padding = 20;
  const minX = 0;
  const minY = 0;
  const maxX = 3600;
  const maxY = 100;
  const unitsPerTickX = 600;
  const unitsPerTickY = 20;
  const data = Object.entries(learnedWords);
  console.log(data);

  // context default properties
  context.strokeStyle = strokeColor;
  context.fillStyle = fontColor;
  context.font = '300 17px Calibri';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.lineWidth = 1;

  // relationships
  const rangeX = maxX - minX;
  const rangeY = maxY - minY;
  const numXTicks = Math.round(rangeX / unitsPerTickX);
  const numYTicks = Math.round(rangeY / unitsPerTickY);
  const x = padding * 2;
  const y = padding * 2;
  const width = canvas.width - x - padding * 2;
  const height = canvas.height - y - padding - fontHeight;
  const scaleX = width / rangeX;
  const scaleY = height / rangeY;

  drawXAxis(context, x, y, height, width, numXTicks, maxX, padding);
  drawYAxis(context, x, y, height, width, numYTicks, maxY, padding);
  drawLine(
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
  );

  context.restore();
}
