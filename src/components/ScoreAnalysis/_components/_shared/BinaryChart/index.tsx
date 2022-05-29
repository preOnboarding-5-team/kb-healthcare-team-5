import ScoreChart from 'components/common/ScoreChart';
import styles from './binaryChart.module.scss';

interface CompareChartProps {
  data: ChartData[];
}

export default function BinaryChart({ data }: CompareChartProps) {
  return (
    <ScoreChart
      className={styles.chart}
      data={data}
      highlightOn={data[0].id - 1}
      highlightPoint
      barScale={0.9}
      padding={50}
    />
  );
}
