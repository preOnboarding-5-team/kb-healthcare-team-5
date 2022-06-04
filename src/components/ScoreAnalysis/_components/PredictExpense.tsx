import type { RefObject } from 'react';
import { HealthInfo } from 'data';
import BinaryChart from './_shared/BinaryChart';
import { ResultBox } from './_shared/ResultBox';

interface PredictExpenseProps {
  appRef: RefObject<HTMLDivElement>;
}

function PredictExpense({ appRef }: PredictExpenseProps): JSX.Element {
  const userMedi = Number(HealthInfo.wxcResultMap.medi);
  const predictMedi = HealthInfo.wxcResultMap.mediDy
    .substring(1, HealthInfo.wxcResultMap.mediDy.length - 1)
    .split(',');
  const lastPredictMedi = Number(predictMedi[predictMedi.length - 1]);
  const hScoreGap = Math.abs(lastPredictMedi - userMedi);

  let hScoreGapComment = '같아요.';
  let hScoreGapClassName = '';

  if (userMedi - lastPredictMedi > 0) {
    hScoreGapComment = `${hScoreGap.toLocaleString('en')}원 적어요.`;
    hScoreGapClassName = 'better';
  } else if (userMedi - lastPredictMedi < 0) {
    hScoreGapComment = `${hScoreGap.toLocaleString('en')}원 많아요.`;
    hScoreGapClassName = 'worse';
  }

  const dataList: ChartData[] = [
    {
      id: 1,
      value: userMedi,
      label: '나',
    },
    {
      id: 2,
      value: lastPredictMedi,
      label: `${predictMedi.length}년 후`,
    },
  ];

  return (
    <>
      <ResultBox
        subject={`${predictMedi.length}년 후 예상 의료비는`}
        object={`현재${userMedi - lastPredictMedi ? '보다' : '와'}`}
        commentOnScore={hScoreGapComment}
        worseOrBetter={hScoreGapClassName}
      />
      <BinaryChart data={dataList} appRef={appRef} />
    </>
  );
}

export default PredictExpense;
