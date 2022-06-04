import type { RefObject } from 'react';
import ScoreChart from 'components/common/ScoreChart';
import styles from './binaryChart.module.scss';

interface CompareChartProps {
  data: ChartData[];
  appRef: RefObject<HTMLElement>;
}

export default function BinaryChart({ data, appRef }: CompareChartProps) {
  return (
    <ScoreChart
      className={styles.chart}
      data={data}
      highlightOn={0}
      secondaryHighlightOn={1}
      highlightPoint
      barScale={0.9}
      padding={50}
      appRef={appRef}
    />
  );
}
