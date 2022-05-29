import { useEffect } from 'react';

import { HealthInfo } from 'data';

import ScoreListItem from './ScoreListItem';

import styles from './myHealth.module.scss';

interface IScoreListProps {
  toggleModal: () => void;
}

function ScoreList({ toggleModal }: IScoreListProps) {
  const printScore = HealthInfo.healthScoreList.map((item) => {
    const key = item.SUBMIT_DATE;
    return (
      <ScoreListItem
        key={key}
        score={item.SCORE}
        submitDate={item.SUBMIT_DATE}
        cntns={item.CNTNS}
      />
    );
  });

  useEffect(() => {
    const app = document.querySelector('#app') as HTMLDivElement;
    app.style.overflow = 'hidden';
    return () => {
      app.style.overflow = '';
    };
  }, []);

  return (
    <section className={styles.scoreList}>
      <button
        className={styles.closeButton}
        type="button"
        onClick={toggleModal}
      >
        닫기
      </button>
      <p className={styles.title}>건강검진결과 가져오기</p>
      {printScore}
    </section>
  );
}

export default ScoreList;
