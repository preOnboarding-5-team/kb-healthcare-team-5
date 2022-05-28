import type { Dispatch, SetStateAction } from 'react';
import { HealthInfo } from 'data';
import styles from './detail.module.scss';

interface DetailProps {
  setDetail: Dispatch<SetStateAction<boolean>>;
}

function Detail({ setDetail }: DetailProps) {
  const handleClickButton = () => {
    setDetail(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h1>건강 검진 결과</h1>
        <button
          type="button"
          className={styles.back}
          aria-label="뒤로 가기"
          onClick={handleClickButton}
        >
          뒤로 가기
        </button>
        {[...Object.entries(HealthInfo.wxcResultMap.boj)].map(
          ([key, value]) => (
            <div key={`${key}-${value}`}>
              <p className={styles.key}>{key}</p>
              <p className={styles.desc}>{value}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Detail;
