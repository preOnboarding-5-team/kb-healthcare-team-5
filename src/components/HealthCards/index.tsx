import { colors, keyList, nameList, normalVal } from './dataLists';
import styles from './healthCards.module.scss';

import data from './response.json';

type ObjType = {
  [key: string]: string;
};

function HealthCards() {
  const bojData: ObjType = data.wxcResultMap.boj;

  const list = keyList.map((item, idx) => {
    const tag = data.healthTagList[idx];
    const infoArr = bojData[item].split(' - ');
    const color = colors[idx];

    return (
      <div key={item} className={styles.healthCards}>
        <div className={styles.topContent}>
          <p>0{idx + 1}</p>
          <img
            // eslint-disable-next-line global-require,  import/no-dynamic-require
            src={require(`assets/svgs/health/ic-icon-mission-h-${idx + 1}.svg`)}
            className={styles.icon}
            alt={`${idx + 1}`}
          />
        </div>

        <h1 style={{ color: `${color}` }} className={styles.title}>
          {nameList[idx]}
        </h1>

        <p className={styles.explain}>
          {normalVal[idx]}
          <br /> <mark>{infoArr[0]}</mark> 입니다.
        </p>
        <p className={styles.addExplain}>
          정상 : 이완 60~80 / 수축 90~120 mmHg
        </p>

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
