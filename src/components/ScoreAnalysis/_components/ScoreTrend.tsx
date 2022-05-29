import { useMemo } from 'react';
import ScoreChart from 'components/common/ScoreChart';
import { getScoreTrendData } from 'components/ScoreAnalysis/_utils';
import { ResultBox } from './_shared/ResultBox';
import styles from '../scoreAnalysis.module.scss';

export default function ScoreTrend() {
  const scoreTrendData = getScoreTrendData(4);
  const numData = scoreTrendData.length;

  const thisYear = +scoreTrendData[numData - 1].label;
  const scoreDiff = useMemo(() => {
    if (numData < 2) return 0;
    return (
      scoreTrendData[numData - 1].value - scoreTrendData[numData - 2].value
    );
  }, [numData, scoreTrendData]);

  const object = useMemo(() => {
    if (numData < 2) return `${scoreTrendData[0].value}점 입니다.`;

    const nearestYear = +scoreTrendData[numData - 2].label;

    if (thisYear - nearestYear > 1) {
      if (scoreDiff === 0) return `총점이 ${nearestYear}년과 동일해요.`;
      return `총점이 ${nearestYear}년 보다`;
    }
    if (scoreDiff === 0) return '총점이 지난해와 동일해요.';
    return '총점이 지난해 보다';
  }, [thisYear, numData, scoreDiff, scoreTrendData]);

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
        padding={20}
        barScale={1.1}
      />
    </>
  );
}
