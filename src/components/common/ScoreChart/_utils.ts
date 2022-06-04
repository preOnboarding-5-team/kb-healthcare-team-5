const BAR_SCLAE_FACTOR = 0.4;

interface BarDimensionOptions {
  boundWidth: number;
  boundHeight: number;
  barScale: number;
  padding: number;
}

export const cutoutBar = (
  data: ChartData[],
  { boundWidth, boundHeight, barScale, padding }: BarDimensionOptions
) => {
  const barWidth =
    ((boundWidth * BAR_SCLAE_FACTOR) /
      (data.length > 1 ? 1 : 2) /
      data.length) *
    barScale;

  const barSpacing =
    data.length >= 2
      ? (boundWidth - padding * 2 - barWidth * data.length) / (data.length - 1)
      : 0;

  const values = data.map((datum) => (datum.value > 0 ? datum.value : 0));
  const maxValue = Math.max(...values);
  const divider = maxValue > 0 ? maxValue : 1;

  const barHeights = values.map(
    (value) => Math.max(((boundHeight - 20) * value) / divider),
    20
  );

  return { barWidth, barSpacing, barHeights };
};
