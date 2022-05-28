import { useState } from 'react';
import Detail from 'components/Detail';
import AverageAnalysis from './_components/AverageAnalysis';
import PredictAnalysis from './_components/Predict/PredictAnalysis';
import PredictExpense from './_components/Predict/PredictExpense';
import ScoreTrend from './_components/ScoreTrend';
import styles from './scoreAnalysis.module.scss';

export default function ScoreAnalyze() {
  const [detail, setDetail] = useState(false);
  const handleClickButton = () => {
    setDetail(true);
  };
  return (
    <section className={styles.wrapper}>
      {detail && <Detail setDetail={setDetail} />}

      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>건강점수 분석 결과</h2>
        <button
          type="button"
          className={styles.detail}
          onClick={handleClickButton}
        >
          결과 자세히 보기
        </button>
      </div>
      <ScoreTrend />
      <AverageAnalysis />
      <h2 className={styles.resultTitle}>나의 10년 후 건강 예측</h2>
      <PredictAnalysis />
      <PredictExpense />
    </section>
  );
}
