import data from 'data/response.json';

const contribution = data.wxcResultMap.w_contribution;

export const keyList = Object.keys(contribution);

type ObjType = {
  [key: string]: string;
};

export const colors: ObjType = {
  resBMI: '#13BF13',
  resBloodPressure: '#AA3DD3',
  resTotalCholesterol: '#788CF4',
  smkQty: '#6A98E7',
  drnkQty: '#FE9602',
  resFastingBloodSuger: '#BA30DB',
  resGFR: '#F88484',
  exerciQty: '#45C9B9',
};

export const normalVal: ObjType = {
  resBMI: '정상 : 18.5 ~ 22.9 kg/㎡ ',
  resBloodPressure: '정상 : 이완 60~79 / 수축 90~119 mmHg',
  resTotalCholesterol: '정상 : 200 mg/dL 이하',
  smkQty: '',
  drnkQty: '',
  resFastingBloodSuger: '정상 : 69~99 mg/dL',
  resGFR: '정상 : 60 mL/min 이상',
  exerciQty: '',
};

export const nameList: ObjType = {
  resBMI: '체질량지수',
  resBloodPressure: '혈압',
  resTotalCholesterol: '총콜레스트롤',
  smkQty: '흡연',
  drnkQty: '음주',
  resFastingBloodSuger: '식전혈당',
  resGFR: '신사구체여과물',
  exerciQty: '운동량',
};

export const explainList: ObjType = {
  resBMI: '체질량지수는 -kg/m²로- 입니다.',
  resBloodPressure: '혈압은 -mmHg로- 입니다.',
  resTotalCholesterol: '총 콜레스트롤은 -mg/dL로- 입니다.',
  smkQty: '-- 중입니다.',
  drnkQty: '-- 입니다.',
  resFastingBloodSuger: '식전혈당은 -mg/dL로- 입니다.',
  resGFR: '신사구체여과율은 -mL/min로- 입니다.',
  exerciQty: '-- 을 하고 있습니다.',
};
