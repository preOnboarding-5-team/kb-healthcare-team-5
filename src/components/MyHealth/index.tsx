import { useCallback, useEffect, useRef, useState } from 'react';

import { ChevronRightIcon, InfoIcon } from 'assets/svgs';
import { HealthInfo } from 'data';
import { formatFlatDate } from 'utils';

import ScoreList from './ScoreList';

import styles from './myHealth.module.scss';

function MyHealth() {
  const [modalShown, setModalShown] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { healthScore } = HealthInfo.userInfo;
  const { sex, age, resHeight } = HealthInfo.wxcResultMap.paramMap;
  const healthDate = formatFlatDate(HealthInfo.userInfo.healthDate);

  const toggleModal = () => {
    setModalShown((prev) => !prev);
  };

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = 13;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#f3f4f6';

      ctx.arc(150, 80, 70, Math.PI * 0.8, Math.PI * 2.2);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#ffd300';

      ctx.arc(
        150,
        80,
        70,
        Math.PI * 0.8,
        (Math.PI * 2.2 * Number(healthScore)) / 1000
      );
      ctx.stroke();
    }
  }, [healthScore]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  return (
    <section className={styles.myHealth}>
      <p className={styles.logo}>마이헬스</p>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <p>김헬스님의 건강점수</p>
          <InfoIcon className={styles.icon} />
        </div>
        <div className={styles.canvasContainer}>
          <canvas className={styles.canvas} ref={canvasRef} />
          <h1 className={styles.score}>
            {healthScore}
            <span className={styles.text}>점</span>
          </h1>
        </div>
        <p className={styles.date}>{healthDate}</p>
        <button
          type="button"
          className={styles.getResultButton}
          onClick={toggleModal}
        >
          건강검진결과 가져오기
          <ChevronRightIcon fill="#4b5563" />
        </button>
        {modalShown && <ScoreList toggleModal={toggleModal} />}
        <div className={styles.infoContainer}>
          <p className={styles.info}>기본정보</p>
          <div className={styles.detail}>
            <span>{sex === '1' ? '남성' : '여성'}</span>
            <span>{age}세 </span>
            <span>{resHeight}cm</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyHealth;
