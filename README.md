# Bike-GPS

bike gps capstone

npm install h3-js

install nodejs

npm init

npm i --save socket.io

npm install @googlemaps/google-maps-services-js

npm install mysql

vim DBCreate.js

진행하였고

<실행 전 코드 수정해야할 곳>
데이터베이스에 관한 부분은 지웠으므로
database.js 에서 데이터베이스 정보를 입력해야합니다.

<실행방법>
터미널에서
node h3.js start
입력하면 local : 8756에서 실행 가능합니다.

http://bikegps.gq
혹은 146.56.140.114에서 접속가능합니다.

---

05/11 업데이트

드롭다운박스 활성화(전체구,강서구,송파구)

현재 전체구에 대해 작업이 진행중입니다.

강서구 > 전체구 > 1.올림픽공원역 3번출구 클릭 시

주변 뷰와 모임장소를 추천해주는 기능을 추가했고

다른 구역에 대해서도 추가할 예정입니다.


---

05/16 업데이트

전체구, 강서구, 송파구 네이밍 입력 완료(활성은 아직)

이제 bikegps.ga 에서 업데이트 상태를 확인할 수 있습니다.

about페이지 추가(사진작업 필요)

자유게시판 페이지 추가(아직 작업x)

폰트추가

---

05/18 업데이트

버튼과 poi목록 연결 완료

리뷰기능 추가

---

05/20 업데이트

css수정
리뷰 실시간 업로드기능 추가(가끔 실시간 적용이 안되는 문제있음)
POI top 30, duration top 30, gps frequency top 30에 대한 캐러셀 적용을 위한 준비 완료

---
05/23 업데이트

검색창기능 활성화 준비완료
캐러셀 css수정

---

05/30 업데이트

검색창 활성화(키워드 힌트제공)
자유게시판 활성화 완료(css 작업 필요)
머문자리순위-송파 추가 (대여소 위치, 스트리트 뷰)
강서,전체 POI지점파악 - 대여소위치, 스트리트 뷰 추가
3D맵으로 보기 추가(어떤식으로 넣을 지 아직 고민 중)
캐러셀 - 머문자리- 전체,송파,강서 업데이트(전체 : top30, 송파 및 강서 : top 15)



해야할 일 : 
- POI지점파악에 대한 태블로 뷰들 뽑아내기(진행중)
- about뒤에 사진 추가하기 (미진행)
- 태블로 분석자료를 어떻게 보여줄 지에 대한 고찰필요 (진행중)
- 서버가 꺼지는 현상 해결 필요(db connection문제 - 해결불가)
- 3d맵 보여주기 (현재 맵핑 진행중)
