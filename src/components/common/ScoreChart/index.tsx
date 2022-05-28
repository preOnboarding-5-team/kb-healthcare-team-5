import cx from 'classnames';
import { useRectBound } from './hooks';
import styles from './scoreChart.module.scss';

const DEFAULT_BAR_SCALE = 0.4;
const LABEL_TOP = 20;

interface ScoreChartProps {
  data: { label: string | number; value: number }[];
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
  const values = data.map((datum) => (datum.value > 0 ? datum.value : 0));
  const maxValue = Math.max(...values);
  const divider = maxValue > 0 ? maxValue : 1;
  const barHeights = values.map(
    (value) => Math.max(((boundHeight - 20) * value) / divider),
    20
  );
  const barSpacing =
    (boundWidth - padding * 2 - barWidth * data.length) / (data.length - 1);

  const bars = barHeights.map((height, idx) => {
    const key = `chart-${data[idx].label}-${idx}`;
    const highlight = highlightOn === idx || highlightOn === data[idx].label;
    // const backgroundColor = highlight ? barColors.highlight : barColors.normal;

    return (
      <div className={styles['bar-wrapper']} style={{ height }} key={key}>
        <div
          className={cx(styles.bar, { [styles['bar-highlight']]: highlight })}
          style={{ width: barWidth }}
        >
          <p
            className={cx(styles.label, {
              [styles['label-highlight']]: highlight,
            })}
          >
            {data[idx].value}
          </p>
          <div
            className={cx(styles.point, styles[pointStyle], {
              [styles['point-highlight']]: highlightPoint && highlight,
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

    return barHeights.slice(0, data.length - 1).map((barHeight, idx) => {
      x1 += barSpacing + barWidth;
      key = `line-${idx}`;

      return (
        <line
          key={key}
          x1={x1}
          y1={boundHeight - Math.max(0, barHeight - LABEL_TOP)}
          x2={x1 + barSpacing + barWidth}
          y2={boundHeight - Math.max(0, barHeights[idx + 1] - LABEL_TOP)}
        />
      );
    });
  })();

  const tickLabels = data.map(({ label }, idx) => {
    const key = `label-${label}-${idx}`;
    return (
      <p
        key={key}
        className={styles['tick-label']}
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
    <div className={cx(styles.wrapper, className)}>
      <div
        className={styles['inner-wrapper']}
        style={{ padding: `0 ${padding}px` }}
        ref={boundRef}
      >
        {bars}
      </div>
      <div
        className={cx(styles['tick-labels'])}
        style={{
          borderTop: `1px solid ${axisColor}`,
          padding: `0 ${padding}px`,
        }}
      >
        {tickLabels}
      </div>
      <svg className={styles.lines} width={boundWidth} height={boundHeight}>
        {lines}
      </svg>
    </div>
  );
}
