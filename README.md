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
여기에는 현재 csv파일이 들어있지 않으므로
따로 csv 파일을 넣은 뒤

h3.js파일의 22번째줄 "./../GPS\_성의2/강서 분할/강서1.csv" 이 부분의 상대경로를 변경해야 합니다.

<실행방법>
터미널에서
node h3.js start
입력하면 local : 8756에서 실행 가능합니다.

---

<<<<<<< HEAD
05/02 업데이트

모바일 뷰를 위한 뷰포트 설정 완료

웹 > 데이터베이스로 전달 성공

발견한 문제 : 버튼 클릭 시 데이터베이스로 전달은 되지만 /test 페이지가 열리는 문제(이동하지 않는 방법 찾는 중)
=======
04/17 업데이트

기본 웹페이지 구성 변경
상단 버튼 클릭 시 태블로 화면 바뀌게 설정

----

현재 이슈  : node.js io.socket 연결이 안되는 상태

>이로인해 database에 데이터 넣기를 할 수가 없음.
>>>>>>> d5d62261c5cab6c7413f92c08777e055a219aa5d
