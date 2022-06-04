# KB-Healthcare-team-5

## 개발자

곽태훈, 민지원, 박휘건, 이지정, 장재혁, 문재석, 이선아

## 개발기간

2022년 5월 27일 ~ 2022년 5월 29일 (총 3일)
(유지보수 기간 : 2022년 6월 2일 ~ 2022년 6월 4일)

## 배포 링크

- https://kb-healthcare-team-5.vercel.app/

## Dependencies

<span><img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/stylelint-263238?style=flat-square&logo=stylelint&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/classnames-000000?style=flat-square&logoColor=white"/></span>

## 폴더 구조

<details>
<summary>폴더 구조</summary>
<div markdown="1">
  
- 📁assets
  - 아이콘 및 이미지 등을 모아둔 폴더입니다.

- 📁components
  - 화면을 구성하는데에 있어 필요한 컴포넌트들을 모아둔 폴더입니다.
  - 페이지를 몇 개의 구역으로 나누어 해당 구역에 들어갈 컴포넌트들을 각각의 폴더에 모아두었습니다.

- 📁data
  - 프로젝트 구현에 사용될 데이터인 json 파일들이 들어가 있는 폴더입니다.

- 📁pages
  - 페이지에 따라 구분되는 폴더이나, 이 프로젝트는 단일 페이지이기 때문에 index.tsx만 존재합니다.

- 📁styles
  - 전역 스타일링, 변수, mixins 등 전역에서 사용되는 스타일링 관련 파일들을 모아둔 폴더입니다.

- 📁types
  - 전역적으로 사용되는 타입을 모아둔 폴더입니다.

- 📁utils
  - 앱 전반적으로 사용되는 변수, 함수, 서비스 등을 담아둔 폴더입니다.


</div>
</details>

## 마이헬스
<img src="https://user-images.githubusercontent.com/47405655/171990789-b4b24b8c-a810-4cc6-8977-29a10a6e87d9.png" width="300" />


* 구현 설명


## 건강점수 분석 결과
<img src="https://user-images.githubusercontent.com/29668380/171987161-f7d29330-f33a-42f6-90ec-545f852408d8.gif" width="300" />
* 구현 설명
* 
#### 건강점수 분석 결과 차트

* 과제에서 주어진 데이터에 맞게 차트가 그려집니다.
* 과제에서 제시된 표시 정책에 맞게 여러 케이스를 구별하였습니다.
  
  예시)
  
  기준(최근) 데이터가 올해이고 비교대상으로 작년 데이터가 있는 경우
  
  기준(최근) 데이터가 올해이고 비교대상 데이터가 작년보다 오래된 경우
  또는
  기준(최근) 데이터가 올해가 아닌 작년 이전이고 비교대상으로 그 이전 데이터가 있는 경우

  기준(최근) 데이터 1개만 있고 비교할 만한 그 이전 데이터가 없는 경우


  
 



## 맞춤 건강 관리
![image](https://user-images.githubusercontent.com/64529155/171986966-fecf7011-b04c-43d9-b69c-2dc91df92b8b.png)

### 구현 설명
* 태그에 대해서는 주어진 ppt내용과 똑같이 첫 번째 요소만 색깔을 넣어주었습니다.
* 아이콘의 경우 순서에 맞게 넣어주기 위해 객체의 키 값으로 옳바른 아이콘을 찾아주게끔 
객체의 키에 해당하는 아이콘을 연결해주는 작업을 행하였습니다.
```js
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
```

* 이렇게 관리해 보세요! 같은 경우에는 항목이 2개 이상인 것들은 split을 이용해 항목별로 읽히게끔 구현하였습니다.
* 고관여 상위 요인 최대 5개를 표시하기 위해서 전체 키 값들 중에서 w_contribution에 포함되어있는 키들만 filter해서 가져오는 방식을 택했습니다.
