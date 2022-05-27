import { HealthIcon } from 'assets/svgs';
import styles from './healthCards.module.scss';

import data from './response.json';

type ObjType = {
  [key: string]: string;
};

function HealthCards() {
  const bojData: ObjType = data.wxcResultMap.boj;
  const normal = [
    '정상 : 18.5 ~ 22.9 kg/㎡ ',
    '정상 : 이완 60~79 / 수축 90~119 mmHg',
    '정상 : 200 mg/dL 이하',
    '',
    '정상 : 69~99 mg/dL',
    '',
    '',
    '정상 : 60 mL/min 이상',
  ];

  const keyList = [
    'resBMI',
    'resBloodPressure',
    'resTotalCholesterol',
    'smkQty',
    'drnkQty',
    'resFastingBloodSuger',
    'resGFR',
    'exerciQty',
  ];
  const list = keyList.map((item, idx) => {
    const tag = data.healthTagList[idx];
    const infoArr = bojData[item].split(' - ');

    return (
      <div key={item} className={styles.healthCards}>
        <div className={styles.topContent}>
          <p>`0${idx}`</p>
          <HealthIcon className={styles.icon} />
        </div>

        <h1 className={styles.title}>{infoArr[0]}</h1>

        <p className={styles.explain}>
          {normal[idx]}
          <br /> <mark>정상</mark> 입니다.
        </p>
        <p className={styles.addExplain}>
          정상 : 이완 60~80 / 수축 90~120 mmHg
        </p>

        <div className={styles.hashtagWrap}>
          <div>
            <span className={styles.hashtag}>{tag.tag1}</span>
            <span className={styles.hashtag}>{tag.tag2}</span>
            <span className={styles.hashtag}>{tag.tag3}</span>
          </div>
        </div>

        <hr />

        <h2 className={styles.recommend}>이렇게 관리해 보세요!</h2>
        <ul>
          <li className={styles.explain}>{infoArr[1]}</li>
        </ul>
      </div>
    );
  });

  return <div>{list}</div>;
}

export default HealthCards;
