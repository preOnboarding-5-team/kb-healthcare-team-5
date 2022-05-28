import { useRef } from 'react';
import type { Dispatch, SetStateAction, MouseEvent } from 'react';
import { HealthInfo } from 'data';
import styles from './detail.module.scss';

interface DetailProps {
  setDetail: Dispatch<SetStateAction<boolean>>;
}

function Detail({ setDetail }: DetailProps) {
  const outerRef = useRef<HTMLDivElement>(null);

  const handleClickOuterArea = (e: MouseEvent<HTMLDivElement>) => {
    if (outerRef.current && e.target === outerRef.current) {
      setDetail(false);
    }
  };

  const handleClickClose = () => {
    setDetail(false);
  };

  return (
    <div
      className={styles.wrapper}
      ref={outerRef}
      onClick={handleClickOuterArea}
      role="button"
      tabIndex={-1}
    >
      <article className={styles.contentWrapper}>
        <h1>건강 검진 결과</h1>
        <button
          type="button"
          className={styles.back}
          aria-label="뒤로 가기"
          onClick={handleClickClose}
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
      </article>
    </div>
  );
}

export default Detail;
