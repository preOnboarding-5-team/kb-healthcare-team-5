import cx from 'classnames';
import { HealthInfo } from 'data';

import ScoreChart from 'components/common/ScoreChart';
import styles from './predict.module.scss';

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

  let commentHScoreGap;
  let hScoreGapClassName;

  if (userMedi - lastPredictMedi > 0) {
    commentHScoreGap = `${HScoreGap.toLocaleString('en')}원 적어요.`;
    hScoreGapClassName = styles.higher;
  } else if (userMedi - lastPredictMedi < 0) {
    commentHScoreGap = `${HScoreGap.toLocaleString('en')}원 많아요.`;
    hScoreGapClassName = styles.lower;
  } else {
    commentHScoreGap = '같아요.';
    hScoreGapClassName = '';
  }

  const dataList: ChartData[] = [
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
            {predictMedi.length}년 후 예상 의료비는
          </p>
          <p className={styles.gapComment}>
            {`현재${userMedi - lastPredictMedi ? '보다' : '와'} `}
            <mark className={cx(styles.score, hScoreGapClassName)}>
              {commentHScoreGap}
              <span className={styles.mark} />
            </mark>
          </p>
        </div>
      </div>

      <ScoreChart
        className={styles.chart}
        data={dataList}
        highlightOn={dataList[0].id - 1}
        highlightPoint
        padding={50}
      />
    </>
  );
}

export default PredictExpense;
