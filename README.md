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


### 구현 설명
#### 차트 그리기
```ts
const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = 13;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#f3f4f6';

      ctx.arc(150, 80, 70, Math.PI * 0.8, Math.PI * 2.2);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#ffd300';

      ctx.arc(
        150,
        80,
        70,
        Math.PI * 0.8,
        (Math.PI * 2.2 * Number(healthScore)) / 1000
      );
      ctx.stroke();
    }
  }, [healthScore]);
```

* 차트의 배경을 그린후, 데이터에 맞게 색을 입혀 한번 더 그리는 방법으로 구현했습니다.


## 건강점수 분석 결과
<img src="https://user-images.githubusercontent.com/29668380/171987161-f7d29330-f33a-42f6-90ec-545f852408d8.gif" width="300" />

### 차트 그리기
- 하나의 컴포넌트(`ScoreChart`)로 네 개의 차트를 그릴 수 있게 하였습니다.
- `ScoreChart` 컴포넌트는 아래와 같은 props으로 설정할 수 있습니다.
	- `data: ChartData[]`: 차트에 표시할 데이터를 담은 배열입니다. 각각의 `ChartData` 타입 객체는 id, label, value 속성을 가집니다.
	- `highlightOn: number | string`: 강조할 막대의 인덱스 혹은 라벨을 지정합니다. 해당되는 막대는 `primary` 색으로 강조됩니다.
	- `secondaryHighlightOn?: number | string`: `highlightOn`과 비슷한 방식으로 두 번째 강조할 막대를 지정할 수 있습니다. `secondary` 색으로 강조됩니다.
	- `barScale?: number`: 0 이상의 숫자로 막대의 scale을 조절할 수 있습니다.
	- `axisColor?: string`: 축의 색을 나타냅니다. default는 `gray-900`입니다.
	- `pointStyle?: ‘circle’ | ‘square'`: 막대 위 점의 모양을 지정할 수 있습니다. 처음에 사각형 모양의 점도 고려하여 설정을 추가했지만, 최종 결과물에서 사용하지는 않습니다.
	- `padding?: number`: 가장 바깥 막대 좌우로 pixel 단위의 padding을 줄 수 있습니다.
	- `className?: string`: 차트 wrapper에 전달되는 CSS className입니다. 차트 크기 등을 지정할 수 있습니다.
	- `appRef?: RefObject<HTMLElement>`: app 전체를 감싸는 요소에 대한 ref 객체입니다. 만약 지정한다면 스크롤에 intersection이 일어나는 타이밍에 맞춰 차트가 나타납니다.
- 데이터 중 최댓값이 100%의 높이를 차지하고, 나머지 값들은 이에 대한 상대적인 높이를 표현하도록 했습니다.
- 차트를 사용할 때 CSS를 통해 너비와 높이를 지정하면 이에 맞춰 막대의 높이와 너비, 그리고 막대 사이의 간격을 계산하도록 했습니다.
	-  `useRectBound` 훅에서는 차트 전체를 감싸는 요소를 가리키는 ref 객체를 생성하고, `boundHeight`, `boundWidth` 두 state에 높이와 너비가 담기도록 했습니다.
	- 여기에 사용자가 지정한 barScale, padding을 고려해 막대 너비와 사이 간격을 결정했습니다.
- 차트의 최상단 가운데에 점이 고정되도록 하고, 이 점의 (x, y) 좌표를 계산하여 sag path로 선 그래프를 그렸습니다.
- 차트의 값을 나타내는 라벨은 `top: -20px`을 주어 막대 상단에 위치하도록 했습니다. 이 때, 차트의 전체 높이를 `max(calc(100% - 20px), 0px)`로 계산함으로써 사용자가 지정한 높이 이상으로 튀어나가지 않도록 했습니다.
- 차트의 전체 높이가 0부터 시작하며 아래서부터 위로 커지는 듯한 애니메이션을 주었습니다. 애니메이션은 CSS keyframes를 이용해 구현했습니다.
- Intersection Observer API를 활용하여 차트가 화면에 들어오는 타이밍에 차트 애니메이션이 시작하도록 했습니다. `useIntersectionObserver` 훅에 이를 위한 로직을 구현했습니다. 차트가 insersecting 상태일 때  `isVisible` state를 true로 변경하고, 이에 따라 차트가 나타나도록 했습니다. 
 
### 케이스별 문구 표시
* 과제에서 제시된 표시 정책에 맞게 여러 케이스를 구별하였습니다.
  
* 예시)
  
  - `기준(최근) 데이터가 올해이고 비교대상으로 작년 데이터가 있는 경우`
  
  - `기준(최근) 데이터가 올해이고 비교대상 데이터가 작년보다 오래된 경우` <br/>
    또는 `기준(최근) 데이터가 올해가 아닌 작년 이전이고 비교대상으로 그 이전 데이터가 있는 경우`

  - `기준(최근) 데이터 1개만 있고 비교할 만한 그 이전 데이터가 없는 경우`

## 맞춤 건강 관리

<img width="785" alt="스크린샷 2022-06-04 오후 7 03 01" src="https://user-images.githubusercontent.com/88325253/171994630-d3dfc5ba-0669-41b4-a504-cea8ce215553.png">


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

* `이렇게 관리해 보세요!` 같은 경우에는 항목이 2개 이상인 것들은 split을 이용해 항목별로 읽히게끔 구현하였습니다.
* 고관여 상위 요인 최대 5개를 표시하기 위해서 전체 키 값들 중에서 w_contribution에 포함되어있는 키들만 filter해서 가져오는 방식을 택했습니다.
* 내부 데이터만 바뀌고 구조는 그대로이므로 cardItem 컴포넌트로 따로 분리했습니다.
