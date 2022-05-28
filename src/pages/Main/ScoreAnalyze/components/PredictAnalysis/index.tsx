import { HealthInfo } from 'data';

import ScoreChart from 'components/common/ScoreChart';
import styles from './predictAnalysis.module.scss';

function PredictAnalysis(): JSX.Element {
  const userHscore = Number(HealthInfo.wxcResultMap.wHscore);
  const predictHscore = HealthInfo.wxcResultMap.wHscoreDy
    .substring(1, HealthInfo.wxcResultMap.wHscoreDy.length - 1)
    .split(',');
  const lastPredictHscore = Number(predictHscore[predictHscore.length - 1]);
  const HScoreGap =
    lastPredictHscore - userHscore > 0
      ? lastPredictHscore - userHscore
      : userHscore - lastPredictHscore;

  const hScoreGapColor =
    userHscore - lastPredictHscore > 0 ? '#d50000' : '#0026ca';
  const commentHScoreGap =
    userHscore - lastPredictHscore > 0 ? '낮아요' : '높아요';
  const dataList = [
    {
      id: 1,
      value: userHscore,
      label: '나',
    },
    {
      id: 2,
      value: lastPredictHscore,
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
          <p className={styles.gapComment} style={{ color: hScoreGapColor }}>
            현재보다 {HScoreGap}점 {commentHScoreGap}{' '}
            <span className={styles.mark} />
          </p>
        </div>
      </div>

      <ScoreChart
        className={styles.chart3}
        data={dataList}
        highlightOn={dataList[0].id - 1}
        highlightPoint
        padding={50}
        pointStyle="circle"
      />
    </>
  );
}

export default PredictAnalysis;
