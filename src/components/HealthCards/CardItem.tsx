import { HealthInfo } from 'data';
import { colors, keyList, nameList, normalVal, explainList } from './dataLists';
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
import styles from './healthCards.module.scss';

type ObjType = {
  [key: string]: string;
};
const BOJ_DATA: ObjType = HealthInfo.wxcResultMap.boj;
const PARAM_MAP_DATA: ObjType = HealthInfo.wxcResultMap.paramMap;

const CardItem = keyList.map((item, idx) => {
  const tag = HealthInfo.healthTagList;
  const infoArr = BOJ_DATA[item].split(' - ');
  const color = colors[item];
  const explain = explainList[item].split('-');

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

  const tagList = tag.filter((t) => t.tagId === item);

  return (
    <div key={item} className={styles.healthCards}>
      <div className={styles.topContent}>
        <p>0{idx + 1}</p>
        {healthIcon}
      </div>

      <h1 style={{ color: `${color}` }} className={styles.title}>
        {nameList[item]}
      </h1>
      {normalVal[item] && (
        <p className={styles.explain}>
          {explain[0]}
          {PARAM_MAP_DATA[item]}
          {explain[1]}
        </p>
      )}
      <p className={styles.explain}>
        <mark>{infoArr[0]}</mark>
        {explain[2]}
      </p>
      <p className={styles.normalValue}>{normalVal[item]}</p>

      <div className={styles.hashtagWrap}>
        {tagList[0].tag1 && (
          <span className={styles.hashtag}>#{tagList[0].tag1}</span>
        )}
        {tagList[0].tag2 && (
          <span className={styles.hashtag}>#{tagList[0].tag2}</span>
        )}
        {tagList[0].tag3 && (
          <span className={styles.hashtag}>#{tagList[0].tag3}</span>
        )}
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

export default CardItem;
