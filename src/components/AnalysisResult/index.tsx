import { useRef } from 'react';

import { HealthInfo } from 'data';

import styles from './analysisResult.module.scss';

function AnalysisResult(): JSX.Element {
  const percentData = 100 - Number(HealthInfo.wxcResultMap.hscorePercent);
  const commentPercentData =
    percentData > 50 ? `하위 ${percentData}` : `상위 ${percentData}`;

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

  const SCORE_MAX = 1000;
  const SCORE_STANDARD = SCORE_MAX / 8;
  const USER_SCORE_VIEW = Math.floor(
    SCORE_STANDARD * (Number(userHscore) / SCORE_MAX)
  );
  const PEER_SCORE_VIEW = Math.floor(
    SCORE_STANDARD * (Number(peerHscore) / SCORE_MAX)
  );

  const graphArr = [
    {
      id: 1,

      rectName: 'mineRect',
      rectHeight: USER_SCORE_VIEW,
      pointName: 'minePoint',
      scoreName: 'mineScore',
      score: userHscore,
    },
    {
      id: 2,
      rectName: 'peerRect',
      rectHeight: PEER_SCORE_VIEW,
      pointName: 'peerPoint',
      scoreName: 'peerScore',
      score: peerHscore,
    },
  ];

  const graphList = graphArr.map((data) => {
    const key = `graph-${data.id}`;
    return (
      <div className={styles.graph} key={key}>
        <div
          className={`${styles.rect} ${styles[data.rectName]}`}
          style={{ height: data.rectHeight }}
        >
          <div className={`${styles.point} ${styles[data.pointName]}`} />
          <p className={`${styles.score} ${styles[data.scoreName]}`}>
            {data.score}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.chartWrapper}>
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

      <ul className={styles.chartBox}>
        <li className={styles.graphBox}>
          {graphList}
          <div className={styles.line} />
        </li>
        <li className={styles.textBox}>
          <p className={styles.text}>나</p>
          <p className={styles.text}>30대 남성</p>
        </li>
      </ul>
    </div>
  );
}

export default AnalysisResult;
