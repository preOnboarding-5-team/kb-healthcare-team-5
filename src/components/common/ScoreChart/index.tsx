import cx from 'classnames';
import { useRectBound } from './_hooks';
import styles from './scoreChart.module.scss';

const DEFAULT_BAR_SCALE = 0.4;
const LABEL_TOP = 20;
const CHART_HEIGHT_RATIO = 6 / 7;

interface ScoreChartProps {
  data: ChartData[];
  highlightOn: number | string;
  highlightPoint?: boolean;
  barScale?: number;
  axisColor?: string;
  pointStyle?: 'circle' | 'square';
  padding?: number;
  className?: string;
}

export default function ScoreChart({
  data,
  highlightOn,
  highlightPoint = false,
  barScale = 1,
  axisColor = '#000',
  pointStyle = 'circle',
  padding = 0,
  className,
}: ScoreChartProps) {
  const { boundRef, boundHeight, boundWidth } = useRectBound<HTMLDivElement>();

  const barWidth = ((boundWidth * DEFAULT_BAR_SCALE) / data.length) * barScale;
  const barSpacing =
    (boundWidth - padding * 2 - barWidth * data.length) / (data.length - 1);

  const values = data.map((datum) => (datum.value > 0 ? datum.value : 0));
  const maxValue = Math.max(...values);
  const divider = maxValue > 0 ? maxValue : 1;

  const barHeights = values.map(
    (value) => Math.max(((boundHeight - 20) * value) / divider),
    20
  );

  const bars = barHeights.map((height, idx) => {
    const key = `chart-${data[idx].label}-${idx}`;
    const highlight = highlightOn === idx || highlightOn === data[idx].label;

    return (
      <div className={styles.barWrapper} style={{ height }} key={key}>
        <div
          className={cx(styles.bar, { [styles.barHighlight]: highlight })}
          style={{ width: barWidth }}
        >
          <p
            className={cx(styles.label, {
              [styles.labelHighlight]: highlight,
            })}
          >
            {data[idx].value.toLocaleString('en')}
          </p>
          <div
            className={cx(styles.point, styles[pointStyle], {
              [styles.pointHighlight]: highlightPoint && highlight,
            })}
            style={{ left: barWidth / 2 }}
          />
        </div>
      </div>
    );
  });

  const lines = (() => {
    let x1 = padding - barWidth / 2 - barSpacing;
    let key;
    const svgHeight = CHART_HEIGHT_RATIO * boundHeight + LABEL_TOP;

    return barHeights.slice(0, data.length - 1).map((barHeight, idx) => {
      x1 += barSpacing + barWidth;
      key = `line-${idx}`;

      return (
        <line
          key={key}
          x1={x1}
          y1={svgHeight - Math.max(LABEL_TOP, barHeight)}
          x2={x1 + barSpacing + barWidth}
          y2={svgHeight - Math.max(LABEL_TOP, barHeights[idx + 1])}
        />
      );
    });
  })();

  const tickLabels = data.map(({ label }, idx) => {
    const key = `label-${label}-${idx}`;
    return (
      <p
        key={key}
        className={styles.tickLabel}
        style={{
          minWidth: barWidth,
          maxWidth: barWidth + barSpacing,
        }}
      >
        {label}
      </p>
    );
  });

  return (
    <div className={cx(styles.wrapper, className)} ref={boundRef}>
      <div
        className={styles.barsWrapper}
        style={{
          margin: `0 ${padding}px`,
          width: boundWidth - 2 * padding - barWidth,
          height: boundHeight - LABEL_TOP,
        }}
      >
        {bars}
      </div>
      <div
        className={cx(styles.tickLabels)}
        style={{
          borderTop: `1px solid ${axisColor}`,
          padding: `0 ${padding}px`,
        }}
      >
        {tickLabels}
      </div>
      <svg className={styles.lines} width={boundWidth}>
        {lines}
      </svg>
    </div>
  );
}
