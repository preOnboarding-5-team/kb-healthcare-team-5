import rawData from 'data/response.json';

export const getScoreTrendData = (numYears: number) => {
  const { healthScoreList: data } = rawData;

  if (data.length === 0) return [];

  data.sort(
    (a, b) =>
      Number(a.SUBMIT_DATE.substring(0, 4)) -
      Number(b.SUBMIT_DATE.substring(0, 4))
  );

  return data.slice(-numYears).map(({ SCORE, SUBMIT_DATE }, idx) => ({
    id: idx,
    label: SUBMIT_DATE.substring(0, 4),
    value: Number(SCORE),
  }));
};
