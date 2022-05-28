import { HealthInfo } from 'data';
import { colors, keyList, nameList, normalVal, explainList } from './dataLists';
import styles from './healthCards.module.scss';
import {
  BmiIcon,
  BloodPressureIcon,
  CholesterolIcon,
  DrinkIcon,
  SmokeIcon,
  GFRIcon,
  FastingBloodSugerIcon,
  ExerciseIcon,
} from '../../assets/svgs';

type ObjType = {
  [key: string]: string;
};

function HealthCards() {
  const bojData: ObjType = HealthInfo.wxcResultMap.boj;
  const paramMapData: ObjType = HealthInfo.wxcResultMap.paramMap;

  const list = keyList.map((item, idx) => {
    const tag = HealthInfo.healthTagList[idx];
    const infoArr = bojData[item].split(' - ');
    const color = colors[idx];
    const explain = explainList[idx].split('-');

    const healthIcon = {
      resBMI: <BmiIcon />,
      resBloodPressure: <BloodPressureIcon />,
      resTotalCholesterol: <CholesterolIcon />,
      smkQty: <SmokeIcon />,
      drnkQty: <DrinkIcon />,
      resFastingBloodSuger: <FastingBloodSugerIcon />,
      resGFR: <GFRIcon />,
      exerciQty: <ExerciseIcon />,
    }[item];

    return (
      <div key={item} className={styles.healthCards}>
        <div className={styles.topContent}>
          <p>0{idx + 1}</p>
          {healthIcon}
        </div>

        <h1 style={{ color: `${color}` }} className={styles.title}>
          {nameList[idx]}
        </h1>
        {normalVal[idx] && (
          <p className={styles.explain}>
            {explain[0]}
            {paramMapData[item]}
            {explain[1]}
          </p>
        )}
        <p className={styles.explain}>
          <mark>{infoArr[0]}</mark>
          {explain[2]}
        </p>
        <p className={styles.normalValue}>{normalVal[idx]}</p>

        <div className={styles.hashtagWrap}>
          {tag.tag1 && <span className={styles.hashtag}>#{tag.tag1}</span>}
          {tag.tag2 && <span className={styles.hashtag}>#{tag.tag2}</span>}
          {tag.tag3 && <span className={styles.hashtag}>#{tag.tag3}</span>}
        </div>

        <hr />

        <h2 style={{ color: `${color}` }} className={styles.recommend}>
          이렇게 관리해 보세요!
        </h2>
        <ul>
          <li className={styles.explain}>{infoArr[1]}</li>
          {infoArr[2] && <li className={styles.explain}>{infoArr[2]}</li>}
        </ul>
      </div>
    );
  });

  return <div>{list}</div>;
}

export default HealthCards;
