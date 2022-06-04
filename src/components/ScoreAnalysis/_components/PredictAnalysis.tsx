import type { RefObject } from 'react';
import { HealthInfo } from 'data';
import BinaryChart from './_shared/BinaryChart';
import { ResultBox } from './_shared/ResultBox';

interface PredictAnalysisProps {
  appRef: RefObject<HTMLDivElement>;
}

function PredictAnalysis({ appRef }: PredictAnalysisProps): JSX.Element {
  const userHscore = Number(HealthInfo.wxcResultMap.wHscore);
  const predictHscore = HealthInfo.wxcResultMap.wHscoreDy
    .substring(1, HealthInfo.wxcResultMap.wHscoreDy.length - 1)
    .split(',');
  const futureUserHScore = Number(predictHscore[predictHscore.length - 1]);
  const hScoreGap = Math.abs(futureUserHScore - userHscore);

  let hScoreGapComment = '같아요.';
  let hScoreGapClassName = '';

  if (futureUserHScore - userHscore > 0) {
    hScoreGapComment = `${hScoreGap}점 높아요.`;
    hScoreGapClassName = 'better';
  } else if (futureUserHScore - userHscore < 0) {
    hScoreGapComment = `${hScoreGap}점 적어요.`;
    hScoreGapClassName = 'worse';
  }

  const dataList: ChartData[] = [
    {
      id: 1,
      value: userHscore,
      label: '나',
    },
    {
      id: 2,
      value: futureUserHScore,
      label: `${predictHscore.length}년 후`,
    },
  ];

  return (
    <>
      <ResultBox
        subject={`${predictHscore.length}년 후 예상 건강점수는`}
        object={`현재${userHscore - futureUserHScore ? '보다' : '와'}`}
        commentOnScore={hScoreGapComment}
        worseOrBetter={hScoreGapClassName}
      />
      <BinaryChart data={dataList} appRef={appRef} />
    </>
  );
}

export default PredictAnalysis;
