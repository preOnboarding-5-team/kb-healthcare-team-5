import ScoreChart from 'components/common/ScoreChart';

interface CompareChartProps {
  className: string;
  dataList: ChartData[];
}

export default function BinaryChart({
  className,
  dataList,
}: CompareChartProps) {
  return (
    <ScoreChart
      className={className}
      data={dataList}
      highlightOn={dataList[0].id - 1}
      highlightPoint
      barScale={0.9}
      padding={50}
    />
  );
}
