import { useEffect, useRef } from 'react';
import { HealthInfo } from 'data/indext';
import { setMaxListeners } from 'events';
import { InfoIcon } from 'assets';
import styles from './main.module.scss';

function Main() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { healthScore } = HealthInfo.userInfo;
  let { healthDate } = HealthInfo.userInfo;
  const { sex, age, resHeight } = HealthInfo.wxcResultMap.paramMap;

  healthDate = `${healthDate.substring(0, 4)}.${healthDate.substring(
    4,
    6
  )}.${healthDate.substring(6)}`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function drawCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#dcdcdc';

      ctx.arc(55, 55, 50, Math.PI * 0.7, Math.PI * 2.3);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#fdb913';

      ctx.arc(
        55,
        55,
        50,
        Math.PI * 0.7,
        (Math.PI * 2.3 * Number(healthScore)) / 1000
      );
      ctx.stroke();
    }
  }

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  return (
    <div className={styles.main}>
      <p className={styles.logo}>마이 헬스</p>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h1>김국민님의 건강점수</h1>
          <InfoIcon className={styles.icon} />
        </div>
        <div className={styles.canvas}>
          <canvas width="110px" height="100px" ref={canvasRef} />
          <h1 className={styles.score}>{healthScore}</h1>
        </div>
        <p className={styles.date}>{healthDate}</p>
        <a href="/" className={styles.link}>
          건강검진결과 가져오기
          <span className={styles.arrow} />
        </a>
        <div className={styles.info}>
          <p>기본정보</p>
          <div className={styles.detail}>
            <span>{sex === '1' ? '남' : '여'}</span>
            <span>{age}세 </span>
            <span>{resHeight}cm</span>
          </div>
        </div>
        <div className={styles.result}>
          <p className={styles.date}>건강점수 분석 결과</p>
          <a href="/" className={styles.link}>
            결과 자세히 보기
            <span className={styles.arrow} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
