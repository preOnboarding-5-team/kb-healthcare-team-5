import ScoreChart from 'components/common/ScoreChart';
import ScoreComment from 'components/common/ScoreComment';
import styles from './scoreAnalyze.module.scss';

const DUMMY = [
  {
    value: 585,
    label: 2018,
  },
  {
    value: 585,
    label: 2019,
  },
  {
    value: 100,
    label: 2020,
  },
  {
    value: 616,
    label: 2021,
  },
];

const DUMMY2 = [
  {
    value: 652,
    label: '나',
  },
  {
    value: 673,
    label: '30대 남성',
  },
];

const DUMMY4 = [
  {
    value: 93335,
    label: '나',
  },
  {
    value: 129455,
    label: '10년 후',
  },
];

export default function ScoreAnalyze() {
  return (
    <section className={styles.wrapper}>
      <ScoreChart
        className={styles.chart}
        data={DUMMY}
        highlightOn={DUMMY.length - 1}
        padding={20}
      />
      <ScoreChart
        className={styles.chart2}
        data={DUMMY2}
        highlightOn={DUMMY2.length - 1}
        highlightPoint
        pointStyle="circle"
        padding={50}
      />
      <ScoreComment
        data={DUMMY4}
        baseComment="10년 후 예상 의료비는|현재 "
        goodComment="원 많아요"
        badComment="원 적어요"
      />
      <ScoreChart
        className={styles.chart2}
        data={DUMMY4}
        highlightOn={0}
        highlightPoint
        pointStyle="circle"
        padding={50}
      />
    </section>
  );
}
