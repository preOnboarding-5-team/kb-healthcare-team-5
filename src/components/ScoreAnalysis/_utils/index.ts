import rawData from 'data/response.json';

export const getScoreTrendData = () => {
  const { healthScoreList } = rawData;

  healthScoreList.sort(
    (a, b) =>
      Number(a.SUBMIT_DATE.substring(0, 4)) -
      Number(b.SUBMIT_DATE.substring(0, 4))
  );

  return healthScoreList.slice(-4).map(({ SCORE, SUBMIT_DATE }, idx) => ({
    id: idx,
    label: SUBMIT_DATE.substring(0, 4),
    value: Number(SCORE),
  }));
};
