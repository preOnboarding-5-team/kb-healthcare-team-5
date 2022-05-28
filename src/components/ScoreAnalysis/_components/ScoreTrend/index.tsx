import cx from 'classnames';
import ScoreChart from 'components/common/ScoreChart';
import { getScoreTrendData } from 'components/ScoreAnalysis/_utils';
import styles from './scoreTrend.module.scss';

export default function ScoreTrend() {
  const scoreTrendData = getScoreTrendData();
  const numData = scoreTrendData.length;

  const thisYear = scoreTrendData[numData - 1].label;
  const scoreDiff =
    scoreTrendData[numData - 1].value - scoreTrendData[numData - 2].value;

  const firstLine = `${numData < 2 ? `${thisYear}년 ` : ''}건강 점수는`;
  const secondLine = (() => {
    if (numData < 2) return `${scoreTrendData[0].value}점 입니다.`;
    if (scoreDiff === 0) return '지난해와 같아요.';

    const className = scoreDiff > 0 ? styles.higher : styles.lower;
    const absDiff = Math.abs(scoreDiff);
    const commentHScoreGap = `${scoreDiff > 0 ? '높아' : '낮아'}졌어요.`;

    return (
      <>
        <span>총점이 지난해보다 </span>
        <mark className={cx(styles.score, className)}>
          {`${absDiff}점 ${commentHScoreGap}`}
          <span className={styles.mark} />
        </mark>
      </>
    );
  })();

  return (
    <>
      <div className={styles.commentWrapper}>
        <p>{firstLine}</p>
        <p className={styles.gapComment}>{secondLine}</p>
      </div>

      <ScoreChart
        className={styles.chart}
        data={scoreTrendData}
        highlightOn={scoreTrendData.length - 1}
        highlightPoint
        padding={25}
        barScale={1.1}
      />
    </>
  );
}
