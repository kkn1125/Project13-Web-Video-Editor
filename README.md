<div>&nbsp;└┬ 📂 wave/　-----------> root directory</div>
<div>&emsp;├─ 📄 .github　-----------> git issue template</div>
<div>&emsp;├┬ 📂 client/　-----------> front-end</div>
<div>&emsp;│├┬ 📂 src/</div>
<div>&emsp;││├┬ 📂 api/　-----------> video 관련 RestAPI</div>
<div>&emsp;│││├─ 📄 index.ts　-----------> Rest API method별 정의</div>
<div>&emsp;│││└─ 📄 video.ts　-----------> video upload 및 서버에 저장된 목록 불러오기</div>
<div>&emsp;││├┬ 📂 componetns/</div>
<div>&emsp;│││├┬ 📂 atoms/　-----------> 원자 단위 컴포넌트</div>
<div>&emsp;││││├─ 📂 Button/</div>
<div>&emsp;││││├─ 📂 Encoding/　-----------> 완료된 영상 파일 인코딩 시 팝업되는 모달</div>
<div>&emsp;││││├─ 📂 Loading/　-----------> 초기화면, 영상 불러오기 등에 사용되는 로딩 모달</div>
<div>&emsp;││││├─ 📂 Logo/　-----------> 상단 바 로고</div>
<div>&emsp;││││├─ 📂 ModalComponent/　-----------> "완료"버튼 클릭 시 팝업 되는 모달</div>
<div>&emsp;││││├─ 📂 Range/　-----------> EffectSlider에 사용되는 기본 range bar</div>
<div>&emsp;││││├─ 📂 Slider/　-----------> 영상 섬네일 time slider 막대</div>
<div>&emsp;││││├─ 📂 TimeText/　-----------> 영상 섬네일 time slider 막대 위 or currentTime에 시간 표시</div>
<div>&emsp;││││└─ 📂 VolumeRange/　-----------> 음량 조절 range바</div>
<div>&emsp;│││├┬ 📂 molecules/</div>
<div>&emsp;││││├─ 📂 ButtonGroup/</div>
<div>&emsp;││││├─ 📂 CropLayer/　-----------> react-range를 사용, left, right slide bar를 통해 영상 자름</div>
<div>&emsp;││││├─ 📂 CurrentTime/　-----------> 섬네일 부분 좌상단 현재 재생 시간</div>
<div>&emsp;││││├─ 📂 EffectSliders/　-----------> 필터효과 slide bar</div>
<div>&emsp;││││├─ 📂 FileInput/　-----------> label을 이용한 불러오기 "로컬" 부분</div>
<div>&emsp;││││├─ 📂 HoverSlider/　-----------> 영상 섬네일 마우스 호버링 시 slider & timetext 표시</div>
<div>&emsp;││││├─ 📂 Modal/　-----------> TextInput 또는 Help컴포넌트를 받아 동적으로 팝업되는 모달</div>
<div>&emsp;││││├─ 📂 Thumbnail/　-----------> 섬네일 위에서 일어나는 동적인 timeline 제어</div>
<div>&emsp;││││├─ 📂 TimeZone/　-----------> 섬네일 상단 time zone 표기</div>
<div>&emsp;││││└─ 📂 UploadArea/　-----------> 작업 영상 파일 불러오기 버튼</div>
<div>&emsp;│││└┬ 📂 organisms/</div>
<div>&emsp;│││&emsp;├─ 📂 Header/　-----------> 로고, 히스토리, help/완료/취소</div>
<div>&emsp;│││&emsp;├─ 📂 TimeLine/　-----------> </div>
<div>&emsp;│││&emsp;├─ 📂 Tools/　-----------> 재생/10초전후/음량, 기타 툴, 업로드 존</div>
<div>&emsp;│││&emsp;└─ 📂 VideoContainer/　-----------> 비디오 preview</div>
<div>&emsp;││├┬ 📂 pages/</div>
<div>&emsp;│││└─ 📄 edit.tsx　-----------> 메인 페이지</div>
<div>&emsp;││├┬ 📂 store/　-----------> store구성은 action/reducer[/sagas] 로 구성</div>
<div>&emsp;│││├┬ 📂 crop/</div>
<div>&emsp;││││├─ 📄 actions.ts</div>
<div>&emsp;││││├─ 📄 reducer.ts</div>
<div>&emsp;││││└─ 📄 sagas.ts</div>
<div>&emsp;│││├┬ 📂 currentVideo/</div>
<div>&emsp;││││├─ 📄 actions.ts</div>
<div>&emsp;││││└─ 📄 reducer.ts</div>
<div>&emsp;│││├┬ 📂 history/</div>
<div>&emsp;││││├─ 📄 actions.ts</div>
<div>&emsp;││││├─ 📄 reducer.ts</div>
<div>&emsp;││││└─ 📄 sagas.ts</div>
<div>&emsp;│││├┬ 📂 originVideo/</div>
<div>&emsp;││││├─ 📄 actions.ts</div>
<div>&emsp;││││├─ 📄 reducer.ts</div>
<div>&emsp;││││└─ 📄 sagas.ts</div>
<div>&emsp;│││├┬ 📂 user/</div>
<div>&emsp;││││├─ 📄 actions.ts</div>
<div>&emsp;││││└─ 📄 reducer.ts</div>
<div>&emsp;│││├┬ 📂 video/</div>
<div>&emsp;││││├─ 📄 actions.ts</div>
<div>&emsp;││││├─ 📄 reducer.ts</div>
<div>&emsp;││││└─ 📄 sagas.ts</div>
<div>&emsp;│││├─ 📄 actionTypes.ts　-----------> 모든 액션 타입을 enum으로 구성</div>
<div>&emsp;│││├─ 📄 reducer.ts</div>
<div>&emsp;│││├─ 📄 sagas.ts</div>
<div>&emsp;│││└─ 📄 selectors.ts</div>
<div>&emsp;││├┬ 📂 theme/</div>
<div>&emsp;│││├─ 📄 colors.tsx</div>
<div>&emsp;│││├─ 📄 globalStyles.tsx</div>
<div>&emsp;│││└─ 📄 sizes.ts</div>
<div>&emsp;││├┬ 📂 utils/</div>
<div>&emsp;│││├─ 📄 convert.ts</div>
<div>&emsp;│││├─ 📄 error.ts</div>
<div>&emsp;│││└─ 📄 time.ts</div>
<div>&emsp;││├┬ 📂 video/</div>
<div>&emsp;│││├─ 📄 encoding.ts</div>
<div>&emsp;│││├─ 📄 index.tsx</div>
<div>&emsp;│││├─ 📄 metadata.ts</div>
<div>&emsp;│││├─ 📄 mux.ts</div>
<div>&emsp;│││└─ 📄 video.tsx</div>
<div>&emsp;││├┬ 📂 webgl/</div>
<div>&emsp;│││├─ 📄 fragmentShaderSource.ts</div>
<div>&emsp;│││├─ 📄 vertexShaderSource.ts</div>
<div>&emsp;│││├─ 📄 webglConfig.ts</div>
<div>&emsp;│││└─ 📄 webglController.ts</div>
<div>&emsp;││├─ 📄 App.tsx</div>
<div>&emsp;││├─ 📄 index.html</div>
<div>&emsp;││└─ 📄 index.tsx</div>
<div>&emsp;│├─ 📄 babel.config.js</div>
<div>&emsp;│├─ 📄 package-lock.json</div>
<div>&emsp;│├─ 📄 package.json</div>
<div>&emsp;│├─ 📄 webpack.common.js</div>
<div>&emsp;│├─ 📄 webpack.dev.ts</div>
<div>&emsp;│└─ 📄 webpack.prod.ts</div>
<div>&emsp;├┬ 📂 server/ - back-end</div>
<div>&emsp;│├─ 📂 bin/</div>
<div>&emsp;│├┬ 📂 src/main/</div>
<div>&emsp;││├─ 📂 controllers/</div>
<div>&emsp;││├─ 📂 loaders/</div>
<div>&emsp;││├─ 📂 middlewares/</div>
<div>&emsp;││├─ 📂 model/</div>
<div>&emsp;││├─ 📂 routes/</div>
<div>&emsp;││├─ 📂 services/</div>
<div>&emsp;││├─ 📂 utils/</div>
<div>&emsp;││└─ 📄 App.ts</div>
<div>&emsp;│├─ 📄 package-lock.json</div>
<div>&emsp;│├─ 📄 package.json</div>
<div>&emsp;│└─ 📄 webpack.config.js</div>
<div>&emsp;├─ 📄 .eslintignore</div>
<div>&emsp;├─ 📄 .eslintrc.js</div>
<div>&emsp;├─ 📄 .gitignore</div>
<div>&emsp;├─ 📄 .gitmessage</div>
<div>&emsp;├─ 📄 .prettierrc</div>
<div>&emsp;├─ 📄 package-lock.json</div>
<div>&emsp;├─ 📄 package.json</div>
<div>&emsp;├─ 📄 READEME.md</div>
<div>&emsp;└─ 📄 tsconfig.json</div>
