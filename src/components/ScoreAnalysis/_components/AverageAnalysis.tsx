import { HealthInfo } from 'data';
import BinaryChart from './_shared/BinaryChart';
import { ResultBox } from './_shared/ResultBox';

function AverageAnalysis(): JSX.Element {
  const percentData = 100 - Number(HealthInfo.wxcResultMap.hscorePercent);
  const commentPercentData = `${
    percentData > 50 ? '하위' : '상위'
  } ${percentData}%`;

  const userSex = Number(HealthInfo.wxcResultMap.paramMap.sex);
  const commentUserSex = userSex === 1 ? '남성' : '여성';

  const userAge = Number(HealthInfo.wxcResultMap.paramMap.age);

  const commentUserAge = userAge.toString().split('');
  commentUserAge[commentUserAge.length - 1] = '0';

  const convertUserAge = commentUserAge.join('');

  const peerHScore = Number(HealthInfo.wxcResultMap.hscore_peer);
  const userHScore = Number(HealthInfo.wxcResultMap.wHscore);
  const hScoreDiff = userHScore - peerHScore;
  const HScoreGap = Math.abs(hScoreDiff);

  let commentHScoreGap = '같아요.';
  let hScoreGapClassName = '';

  if (hScoreDiff > 0) {
    commentHScoreGap = `${HScoreGap}점 높아요.`;
    hScoreGapClassName = 'better';
  } else if (hScoreDiff < 0) {
    commentHScoreGap = `${HScoreGap}점 낮아요.`;
    hScoreGapClassName = 'worse';
  }

  const dataList = [
    {
      id: 1,
      value: userHScore,
      label: '나',
    },
    {
      id: 2,
      value: peerHScore,
      label: `${convertUserAge}대 ${commentUserSex}`,
    },
  ];

  return (
    <>
      <ResultBox
        subject={`${convertUserAge}대 ${commentUserSex} 평균점수보다`}
        commentOnScore={commentHScoreGap}
        worseOrBetter={hScoreGapClassName}
        commentOnRank={commentPercentData}
      />
      <BinaryChart data={dataList} />
    </>
  );
}

export default AverageAnalysis;
