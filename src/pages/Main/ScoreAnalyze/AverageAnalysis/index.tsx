import { HealthInfo } from 'data';

import ScoreChart from 'components/common/ScoreChart';
import styles from './averageAnalysis.module.scss';

function AverageAnalysis(): JSX.Element {
  const percentData = 100 - Number(HealthInfo.wxcResultMap.hscorePercent);
  const commentPercentData =
    percentData > 50 ? `하위 ${percentData}%` : `상위 ${percentData}%`;

  const userSex = Number(HealthInfo.wxcResultMap.paramMap.sex);
  const commentUserSex = userSex === 1 ? '남성' : '여성';

  const userAge = Number(HealthInfo.wxcResultMap.paramMap.age);
  const commentUserAge = userAge.toString().split('');
  if (commentUserAge[commentUserAge.length - 1] !== '0')
    commentUserAge[commentUserAge.length - 1] = '0';
  const convertUserAge = commentUserAge.join('');

  const userHscore = Number(HealthInfo.wxcResultMap.wHscore);
  const peerHscore = Number(HealthInfo.wxcResultMap.hscore_peer);
  const HScoreGap =
    peerHscore - userHscore > 0
      ? peerHscore - userHscore
      : userHscore - peerHscore;

  const hScoreGapColor = peerHscore - userHscore > 0 ? '#d50000' : '#0026ca';
  const commentHScoreGap = peerHscore - userHscore > 0 ? '낮아요' : '높아요';

  const dataList = [
    {
      id: 1,
      value: userHscore,
      label: '나',
    },
    {
      id: 2,
      value: peerHscore,
      label: `${convertUserAge}대 ${commentUserSex}`,
    },
  ];

  return (
    <>
      <div className={styles.commentWrapper}>
        <ul className={styles.resultBox}>
          <li className={styles.sentenceBox}>
            <p className={styles.standardComment}>
              {convertUserAge}대 {commentUserSex} 평균점수보다
            </p>
            <p className={styles.gapComment} style={{ color: hScoreGapColor }}>
              {HScoreGap}점 {commentHScoreGap} <span className={styles.mark} />
            </p>
          </li>
          <li className={styles.percentage}>
            <p className={styles.percentComment}>
              {commentPercentData} <span className={styles.mark} />
            </p>
          </li>
        </ul>
      </div>

      <ScoreChart
        className={styles.chart2}
        data={dataList}
        highlightOn={dataList[0].id - 1}
        highlightPoint
        padding={50}
        pointStyle="circle"
      />
    </>
  );
}

export default AverageAnalysis;
