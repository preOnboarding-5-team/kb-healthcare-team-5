import { useEffect, useRef } from 'react';

import { HealthInfo } from 'data';

import styles from './analysisResult.module.scss';

function AnalysisResult() {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // const canvas = canvasRef.current as HTMLCanvasElement;
  // const ctx = canvas.getContext('2d');
  // if (context) {
  //   // 여기서 캔버스 사용
  // }
  const lineRef = useRef<HTMLDivElement>(null);
  const pointMineRef = useRef<HTMLDivElement>(null);
  const pointAverageRef = useRef<HTMLDivElement>(null);
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

  const commentHScoreGap = peerHscore - userHscore > 0 ? '낮아요' : '높아요';

  // const [lineX, setLineX] = useState(null)
  // const [lineY, setLineY] = useState(null)

  // useEffect(() => {
  //   console.log(lineRef.current?.getBoundingClientRect());
  //   console.log(pointMineRef.current?.getBoundingClientRect());
  //   console.log(pointAverageRef.current?.getBoundingClientRect());
  //   point = pointMineRef.current?.getBoundingClientRect().x
  //   lineRef.current?.
  // }, []);

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.resultBox}>
        <p className={`${styles.sentence}`}>
          {convertUserAge}대 {commentUserSex} 평균점수보다
          <br />
          {HScoreGap}점 {commentHScoreGap}
        </p>
        <p className={styles.percentage}>
          {commentPercentData} <span className={styles.mark} />
        </p>
      </div>
      <div className={styles.chartBox}>
        <div
          // width={300}
          // height={200}
          className={styles.graphBox}
          // ref={canvasRef}
        >
          <div className={styles.graph}>
            <div className={`${styles.rect} ${styles.mineRect}`}>
              <div
                className={`${styles.point} ${styles.minePoint}`}
                ref={pointMineRef}
              />
              <p className={`${styles.score} ${styles.mineScore}`}>652</p>
            </div>
          </div>
          <div className={styles.graph}>
            <div className={`${styles.rect} ${styles.averageRect}`}>
              <div
                className={`${styles.point} ${styles.averagePoint}`}
                ref={pointAverageRef}
              />
              <p className={`${styles.score} ${styles.averageScore}`}>673</p>
            </div>
          </div>
          <div className={styles.line} ref={lineRef} />
        </div>
        <div className={styles.textBox}>
          <p className={styles.text}>나</p>
          <p className={styles.text}>30대 남성</p>
        </div>
      </div>
    </div>
  );
}

export default AnalysisResult;
