import { formatFlatDate } from 'utils';
import styles from './myHealth.module.scss';

interface IScoreListItem {
  score: string;
  submitDate: string;
  cntns: string;
}
function ScoreListItem({ score, submitDate, cntns }: IScoreListItem) {
  return (
    <dl className={styles.scoreListItem}>
      <div>
        <dt>점수</dt>
        <dd>{score}</dd>
      </div>
      <div>
        <dt>날짜</dt>
        <dd>{formatFlatDate(submitDate)}</dd>
      </div>
      <div>
        <dt>검진 기관</dt>
        <dd>{cntns}</dd>
      </div>
    </dl>
  );
}

export default ScoreListItem;
