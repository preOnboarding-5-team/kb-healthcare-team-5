import { useMemo } from 'react';
import ScoreChart from 'components/common/ScoreChart';
import { getScoreTrendData } from 'components/ScoreAnalysis/_utils';
import { ResultBox } from './_shared/ResultBox';
import styles from '../scoreAnalysis.module.scss';

export default function ScoreTrend() {
  const scoreTrendData = getScoreTrendData();
  const numData = scoreTrendData.length;

  const thisYear = scoreTrendData[numData - 1].label;
  const scoreDiff =
    scoreTrendData[numData - 1].value - scoreTrendData[numData - 2].value;

  const object = useMemo(() => {
    if (numData < 2) return `${scoreTrendData[0].value}점 입니다.`;
    if (scoreDiff === 0) return '지난해와 같아요.';
    return '지난해보다';
  }, [numData, scoreDiff, scoreTrendData]);

  const worseOrBetter = useMemo(() => {
    if (scoreDiff > 0) return 'better';
    if (scoreDiff < 0) return 'worse';
    return '';
  }, [scoreDiff]);

  const commentOnScore = useMemo(() => {
    if (scoreDiff === 0) return '';
    return `${Math.abs(scoreDiff)}점 ${scoreDiff > 0 ? '높아' : '낮아'}졌어요.`;
  }, [scoreDiff]);

  return (
    <>
      <ResultBox
        subject={`${numData < 2 ? `${thisYear}년 ` : ''}건강 점수는`}
        object={object}
        worseOrBetter={worseOrBetter}
        commentOnScore={commentOnScore}
      />
      <ScoreChart
        className={styles.chart}
        data={scoreTrendData}
        highlightOn={scoreTrendData.length - 1}
        highlightPoint
        padding={25}
        barScale={1.1}
      />
    </>
  );
}
