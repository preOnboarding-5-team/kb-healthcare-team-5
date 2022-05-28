import { HealthInfo } from 'data';

import ScoreChart from 'components/common/ScoreChart';
import styles from './predictExpense.module.scss';

function PredictExpense(): JSX.Element {
  const userMedi = Number(HealthInfo.wxcResultMap.medi);
  const predictMedi = HealthInfo.wxcResultMap.mediDy
    .substring(1, HealthInfo.wxcResultMap.mediDy.length - 1)
    .split(',');
  const lastPredictMedi = Number(predictMedi[predictMedi.length - 1]);
  const HScoreGap =
    lastPredictMedi - userMedi > 0
      ? lastPredictMedi - userMedi
      : userMedi - lastPredictMedi;

  const hScoreGapColor = userMedi - lastPredictMedi > 0 ? '#0026ca' : '#d50000';
  const commentHScoreGap =
    userMedi - lastPredictMedi > 0 ? '많아요.' : '적어요.';
  const dataList = [
    {
      id: 1,
      value: userMedi,
      label: '나',
    },
    {
      id: 2,
      value: lastPredictMedi,
      label: `${predictMedi.length}년 후`,
    },
  ];

  return (
    <>
      <div className={styles.commentWrapper}>
        <div className={styles.resultBox}>
          <p className={styles.standardComment}>
            {predictMedi.length}년 후 예상 의료비는 <br />
            현재보다
            <p className={styles.gapComment} style={{ color: hScoreGapColor }}>
              {HScoreGap.toLocaleString('en')}원 {commentHScoreGap}
              <span className={styles.mark} />
            </p>
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

export default PredictExpense;
