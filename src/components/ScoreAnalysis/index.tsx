import AverageAnalysis from './_components/AverageAnalysis';
import PredictAnalysis from './_components/Predict/PredictAnalysis';
import PredictExpense from './_components/Predict/PredictExpense';
import ScoreTrend from './_components/ScoreTrend';
import styles from './scoreAnalysis.module.scss';

export default function ScoreAnalyze() {
  return (
    <section className={styles.wrapper}>
      <ScoreTrend />
      <AverageAnalysis />
      <PredictAnalysis />
      <PredictExpense />
    </section>
  );
}
