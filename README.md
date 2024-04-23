# TM004
## 2024.04.23 새로 진행한 웹 앱 입니다.
### 웹캠을 사용해서 화면에 출력되는 영상이 호랑이인지 사자인지 구분할 수 있게 TM을 훈련시켰고,
### 0.85점 이상이면 대상이 호랑이인지 사자인지 나오게끔 설정하였습니다.

사용한 기술
- javascript
- html
- css


#### 프로그램 설명
-html
  <div id="title">: 웹 페이지의 제목을 표시합니다.
  <button id="startButton">: 웹캠을 시작하는 버튼입니다. 클릭하면 startCamera() 함수가 호출됩니다.
  <button id="stopButton">: 웹캠을 정지하는 버튼입니다. 클릭하면 stopCamera() 함수가 호출되며, 초기에는 비활성화되어 있습니다.
  <div id="webcam-container">: 웹캠 화면이 표시되는 영역입니다.
  <div id="label-container">: 분류된 결과가 표시되는 영역입니다.

-javascript
  model, webcam, labelContainer, maxPredictions: 모델, 웹캠, 라벨 컨테이너 및 최대 예측 수를 저장하는 전역 변수입니다.
  init(): 웹캠 및 Teachable Machine 모델을 초기화하고, 웹캠 스트림을 시작하여 분석을 준비하는 함수입니다.
  loop(): 웹캠에서 프레임을 업데이트하고, predict() 함수를 호출하여 이미지 분석을 반복하는 루프 함수입니다.
  predict(): 웹캠에서 캡처한 이미지를 분석하여 예측된 라벨과 확률을 표시하는 함수입니다.
  startCamera(): 웹캠을 시작하는 함수로, init() 함수를 호출하여 웹캠 스트림을 시작합니다.
  stopCamera(): 웹캠을 정지하는 함수로, webcam.stop()을 호출하여 웹캠 스트림을 중지합니다.

-css
  body: 웹 페이지의 전체적인 레이아웃을 설정합니다. Flexbox를 사용하여 컨테이너를 수직으로 정렬하고, 가운데 정렬합니다. 또한 높이를 화면의 높이(100vh)로 설정하고, 페이지의 상단과 아래 여백을 없애기 위해 margin: 0을 지정합니다.
  button: 버튼 요소의 위쪽 여백을 조정하여 여백을 주도록 설정합니다.
  #webcam-container: 웹캠 영상을 표시하는 컨테이너의 스타일을 정의합니다. 컨테이너를 사각형으로 설정하고, 최대 너비와 높이를 지정하여 크기가 일정하게 유지되도록 합니다. 테두리와 테두리 반경, 그리고 내부 내용의 넘침을 숨기는 속성을 설정합니다.
  #label-container: 분류된 결과를 표시하는 라벨 컨테이너의 스타일을 정의합니다. 수직으로 아이템을 정렬하고 가운데 정렬합니다.
  #title: 페이지의 제목에 대한 스타일을 정의합니다. 글꼴을 'Chewy'로 설정하고, 글꼴 크기와 굵기를 조정합니다.






아래 링크를 클릭하시면 프로그램을 실행 할 수 있습니다.
[https://github.com/thsaudgh8/TM004/blob/main/index.html
](https://thsaudgh8.github.io/TM004/)
