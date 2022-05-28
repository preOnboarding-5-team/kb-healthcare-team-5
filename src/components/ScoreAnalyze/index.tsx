import ScoreChart from 'components/common/ScoreChart';
import styles from './scoreAnalyze.module.scss';
import { getScoreTrendData } from './utils';

export default function ScoreAnalyze() {
  const scoreTrendData = getScoreTrendData();

  return (
    <section className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <ScoreChart
          className={styles.chart}
          data={scoreTrendData}
          highlightOn={scoreTrendData.length - 1}
          highlightPoint
          padding={20}
        />
      </div>
    </section>
  );
}

// const dummy: ChartData[] = [
//   {
//     id: 0,
//     label: 2000,
//     value: 0,
//   },
//   {
//     id: 1,
//     label: 2001,
//     value: 100,
//   },
//   {
//     id: 2,
//     label: 2002,
//     value: 300,
//   },
//   {
//     id: 3,
//     label: 2003,
//     value: 1000,
//   },
//   {
//     id: 4,
//     label: 2004,
//     value: 600,
//   },
// ];
