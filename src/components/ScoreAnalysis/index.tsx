import { useState } from 'react';
import type { RefObject } from 'react';
import { HealthInfo } from 'data';
import Detail from 'components/Detail';
import {
  AverageAnalysis,
  PredictAnalysis,
  PredictExpense,
  ScoreTrend,
} from './_components';
import styles from './scoreAnalysis.module.scss';

interface ScoreAnalyzeProps {
  appRef: RefObject<HTMLDivElement>;
}

function ScoreAnalyze({ appRef }: ScoreAnalyzeProps) {
  const [detail, setDetail] = useState(false);
  const handleClickButton = () => {
    setDetail(true);
  };
  return (
    <section className={styles.wrapper}>
      {detail && (
        <Detail title="건강 검진 결과" setDetail={setDetail}>
          {[...Object.entries(HealthInfo.wxcResultMap.boj)].map(
            ([key, value]) => (
              <div key={`${key}-${value}`}>
                <p className={styles.key}>{key}</p>
                <p className={styles.desc}>{value}</p>
              </div>
            )
          )}
        </Detail>
      )}

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
      <ScoreTrend appRef={appRef} />
      <AverageAnalysis appRef={appRef} />
      <h2 className={styles.resultTitle}>나의 10년 후 건강 예측</h2>
      <PredictAnalysis appRef={appRef} />
      <PredictExpense appRef={appRef} />
    </section>
  );
}

export default ScoreAnalyze;
