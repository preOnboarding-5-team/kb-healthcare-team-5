import { useEffect, useState } from 'react';

import styles from './scoreComment.module.scss';

interface IProps {
  data: { label: string | number; value: number }[];
  baseComment: string;
  goodComment: string;
  badComment: string;
}

function ScoreComment({ data, baseComment, goodComment, badComment }: IProps) {
  const [comment, setComment] = useState<string>(baseComment);
  const [commentcolor, setCommentColor] = useState<string>('black');
  const diff = data.slice(-2)[0].value - data.slice(-2)[1].value;

  useEffect(() => {
    setComment(baseComment);
    if (diff > 0) {
      setComment(
        (prev) => `${prev}보다 |${diff.toLocaleString('en')}${badComment}`
      );
      setCommentColor('blue');
    }
    if (diff < 0) {
      setComment(
        (prev) =>
          `${prev}보다 |${Math.abs(diff).toLocaleString('en')}${goodComment}`
      );
      setCommentColor('red');
    }
    if (diff === 0) {
      setComment((prev) => `${prev}와 같아요`);
      setCommentColor('black');
    }
  }, [diff, baseComment, goodComment, badComment]);

  return (
    <p className={styles.comment}>
      {comment.split('|')[0]}
      <p>
        {comment.split('|')[1]}
        <mark className={styles.comment} style={{ color: commentcolor }}>
          {comment.split('|')[2]}
        </mark>
      </p>
    </p>
  );
}

export default ScoreComment;
