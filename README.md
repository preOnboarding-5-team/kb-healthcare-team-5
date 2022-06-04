# KB-Healthcare-team-5

## 개발자

## 개발기간

## 개발 스택

### React.js, TypeScript

## 폴더 구조


## 마이헬스
* 사진?
* 구현 설명

## 건강점수 분석 결과!
[Uploading test-Animated Image (Large).gif…]()
* 구현 설명


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
