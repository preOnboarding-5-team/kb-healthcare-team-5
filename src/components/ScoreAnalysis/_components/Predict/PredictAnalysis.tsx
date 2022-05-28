import cx from 'classnames';
import { HealthInfo } from 'data';
import BinaryChart from '../_shared/BinaryChart';
import styles from './predict.module.scss';

function PredictAnalysis(): JSX.Element {
  const userHscore = Number(HealthInfo.wxcResultMap.wHscore);
  const predictHscore = HealthInfo.wxcResultMap.wHscoreDy
    .substring(1, HealthInfo.wxcResultMap.wHscoreDy.length - 1)
    .split(',');
  const futureUserHscore = Number(predictHscore[predictHscore.length - 1]);
  const HScoreGap = Math.abs(futureUserHscore - userHscore);

  let commentHScoreGap;
  let hScoreGapClassName;

  if (futureUserHscore - userHscore > 0) {
    commentHScoreGap = `${HScoreGap}점 높아요.`;
    hScoreGapClassName = styles.higher;
  } else if (futureUserHscore - userHscore < 0) {
    commentHScoreGap = `${HScoreGap}점 적어요.`;
    hScoreGapClassName = styles.lower;
  } else {
    commentHScoreGap = '같아요.';
    hScoreGapClassName = '';
  }

  const dataList: ChartData[] = [
    {
      id: 1,
      value: userHscore,
      label: '나',
    },
    {
      id: 2,
      value: futureUserHscore,
      label: `${predictHscore.length}년 후`,
    },
  ];

  return (
    <>
      <div className={styles.commentWrapper}>
        <div className={styles.resultBox}>
          <p className={styles.standardComment}>
            {predictHscore.length}년 후 예상 건강점수는
          </p>
          <p className={styles.gapComment}>
            {`현재${userHscore - futureUserHscore ? '보다' : '와'} `}
            <mark className={cx(styles.score, hScoreGapClassName)}>
              {commentHScoreGap}
              <span className={styles.mark} />
            </mark>
          </p>
        </div>
      </div>

      <BinaryChart className={styles.chart} dataList={dataList} />
    </>
  );
}

export default PredictAnalysis;
