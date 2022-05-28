import ScoreChart from 'components/common/ScoreChart';
import AverageAnalysis from './AverageAnalysis';
import PredictAnalysis from './PredictAnalysis';
import PredictExpense from './PredictExpense';
import styles from './scoreAnalyze.module.scss';

const DUMMY = [
  {
    id: 1,
    value: 585,
    label: 2018,
  },
  {
    id: 2,
    value: 585,
    label: 2019,
  },
  {
    id: 3,
    value: 100,
    label: 2020,
  },
  {
    id: 4,
    value: 616,
    label: 2021,
  },
];

export default function ScoreAnalyze() {
  return (
    <section className={styles.wrapper}>
      <ScoreChart
        className={styles.chart}
        data={DUMMY}
        highlightOn={DUMMY.length - 1}
        highlightPoint
        padding={20}
        pointStyle="circle"
      />
      <AverageAnalysis />
      <PredictAnalysis />
      <PredictExpense />
    </section>
  );
}
