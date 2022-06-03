import cx from 'classnames';
import HighlightingUnderline from './HighlightingUnderline';
import styles from './resultBox.module.scss';

interface ResultBoxProps {
  subject: string;
  object?: string;
  commentOnScore: string;
  commentOnRank?: string;
  worseOrBetter?: string;
}

export function ResultBox({
  subject,
  object = '',
  commentOnScore,
  commentOnRank = '',
  worseOrBetter = '',
}: ResultBoxProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.resultBox}>
        <li className={styles.sentenceBox}>
          <p>{subject}</p>
          <p className={styles.gapComment}>
            <span>{object} </span>
            <mark className={cx(styles.score, styles[worseOrBetter])}>
              {commentOnScore}
              <HighlightingUnderline />
            </mark>
          </p>
        </li>
        <li className={styles.percentage}>
          <p className={styles.percentComment}>
            {commentOnRank}
            <HighlightingUnderline />
          </p>
        </li>
      </ul>
    </div>
  );
}
