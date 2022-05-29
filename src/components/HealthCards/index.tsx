import { HealthInfo } from 'data';
import CardItem from './CardItem';
import styles from './healthCards.module.scss';

function HealthCards() {
  return (
    <div>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>맞춤 건강 관리</h2>
        <p className={styles.subText}>
          오케어와 함께 건강을 관리해보세요.
          <br />
          건강점수를 최대{' '}
          <strong>{HealthInfo.wxcResultMap.wMymaxHscore}점</strong>까지 올릴 수
          있어요.
        </p>
      </div>
      {CardItem}
    </div>
  );
}

export default HealthCards;
