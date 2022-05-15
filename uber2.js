//&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse
function poidlocmoim() {
  (async () => {
    const NodeList = document.getElementsByName("options");
    const Node2 = document.getElementsByName("gus");

    NodeList.forEach((node) => {
      if (node.checked) {
        if (node.id == "poi") {
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>iframe").attr("src", src); //POI순위를 보여주겠다.
        } else if (node.id == "dloc") {
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/shared/WSQ9TPWMH?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>iframe").attr("src", src); //대여소위치를 알려주겠다.
        } else if (node.id == "moim") {
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>iframe").attr("src", src); //머문시간 top15에 대해 보여주겠다.
        }
      }
    });
  })();
}
function guselect(gu) {
  //tableau뷰 바꿔주겠습니다.
  if (gu == "전체구") {
    src =
      "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src);

    allgu();
  } else if (gu == "강서구") {
    src =
      "https://public.tableau.com/shared/WSQ9TPWMH?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src); //강서구 뷰를 보여주겠다.
    gangseo();
  } else if (gu == "송파구") {
    src =
      "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src); //송파구 뷰를 보여주겠다.
    songpa();
  }
}
function allgu() {
  //순위 랭킹 바꾸기
  d3.selectAll("#ranking>*").remove(); //랭킹목록 초기화
  //dt추가
  innername = [
    "올림픽공원역 3번출구",
    "GS25 한강잠실4호점 자전거도로",
    "안양천합수부 길목",
    "여름캠핑장 자전거도로",
    "안양천합수부 중앙",
    "발산역 6,7번출구",
    "수상관장 콜택시승간장 자전거도로",
    "잠실마루쉼터 자전거도로",
    "GS25 한강잠실2호점 자전거도로",
    "올림픽공원 평화의 광장",
    "한강공원 잠실제1주차장 자전거도로",
    "잠실역 2번출구",
    "안양천합수부 자전거도로",
    "화곡역 7번 출구",
    "올림픽공원프라자",
    "올림픽공원 세계평화의문",
    "가양역 9번 출구",
    "마곡역 교차로",
    "올림픽공원 국기광장",
    "잠실역 7,8번 출구",
    "석촌역 교차로",
    "NC백화점 강서점 버스정류장",
    "NC백화점 강서점 정문",
    "홈플러스 가양점",
    "구암근린공원 근처 자전거도로",
    "공암나루공원 근처 자전거도로",
    "발산역 1번출구",
    "안양천코스",
    "잠실역 교차로",
    "잠실역 10번출구",
  ];
  const adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("전체구 POI순위"));
  document.getElementById("ranking").appendChild(adddt);
  //ol설정
  const addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < innername.length; i++) {
    let addli = document.createElement("li");
    aid = "all-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "allpoiselect");
    adda.setAttribute("onclick", "javascript:poiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
  }
  //li추가한 ol추가
  document.getElementById("ranking").appendChild(addol);
}
function poiselect(allrank) {
  //poi가 선택됐을 때 아래에 추가하는 부분
  switch (allrank) {
    case "all-rank1": {
      //태블로 뷰 갱신
      src =
        "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
      d3.select("#vizContainer>iframe").attr("src", src); //POI순위를 보여주겠다.
      d3.selectAll("#ifa>*").remove(); //ifa초기화
      var liinnertext = document.getElementById(allrank).innerText; //이름 가져오기
      //console.log(liinnertext);
      let ifatitle = document.createElement("h1");
      ifatitle.setAttribute("style", "text-align:left");
      ifatitle.innerText = liinnertext + "의 주변 뷰입니다.";
      document.getElementById("ifa").appendChild(ifatitle);
      const addiframe = document.createElement("iframe");
      addiframe.setAttribute(
        "src",
        "https://www.google.com/maps/embed?pb=!4v1652155452732!6m8!1m7!1sCAoSLEFGMVFpcE9yLVNfdFROTkdsUzFGNDAtYmQtenc2MmZDNUdfOVJ5aVd5bVoy!2m2!1d37.51667286888663!2d127.1304336190224!3f327.1603003870117!4f-14.357186019412126!5f0.7820865974627469"
      );
      addiframe.setAttribute("width", "80%");
      addiframe.setAttribute("height", "450");
      addiframe.setAttribute("style", "border:0");
      addiframe.setAttribute("allowfullscreen", "");
      addiframe.setAttribute("loading", "lazy");
      addiframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      document.getElementById("ifa").appendChild(addiframe);

      d3.selectAll("#ifamap>*").remove(); //ifamap초기화
      let ifamaptitle = document.createElement("h1");
      ifamaptitle.innerText = "주변 모임 장소 추천";
      document.getElementById("ifamap").appendChild(ifamaptitle);
      //추천장소 1번
      //a태그먼저
      const poirecdiv = document.createElement("div");
      const poirecatag = document.createElement("a");
      poirecatag.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecatag.setAttribute("target", "_blank");
      //이미지
      const poirec = document.createElement("img");
      poirec.setAttribute("src", "pariscroissant");
      poirec.setAttribute("width", "450px");
      poirec.setAttribute("height", "auto");
      poirecatag.appendChild(poirec);
      document.getElementById("ifamap").appendChild(poirecatag);
      //한줄 띄우기
      const brtag = document.createElement("br");
      document.getElementById("ifamap").appendChild(brtag);
      //추천장소 1번 제목
      const poirecname = document.createElement("a");
      poirecname.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecname.innerText = "파리크라상 올림픽공원점";
      document.getElementById("ifamap").appendChild(poirecname);

      //2번 추천장소
      const poirecatag2 = document.createElement("a");
      poirecatag.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/20662279?c=14152017.1199809,4511423.9272744,19,0,0,0,dh"
      );
      poirecatag2.setAttribute("target", "_blank");
      //이미지
      const poirec2 = document.createElement("img");
      poirec2.setAttribute(
        "src",
        "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f180_180&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjNfMjM0%2FMDAxNjM3NjQ0OTM4NzYz.b1EHV1M22cc-9wDNSdsxiNASzvquUUFxfx5UX1rlcRAg.sshRzhwGwXdAKDBsS8UFE7wvsPcXiH8iz3-Jqhg8kqAg.JPEG.hyun68%2F20211112_124036.jpg%234032x2268"
      );
      poirec2.setAttribute("width", "450px");
      poirec2.setAttribute("height", "auto");
      poirecatag2.appendChild(poirec2);
      document.getElementById("ifamap").appendChild(poirecatag2);
      //한줄 띄우기
      const brtag2 = document.createElement("br");
      document.getElementById("ifamap").appendChild(brtag2);
      //추천장소 2번 제목
      const poirecname2 = document.createElement("a");
      poirecname2.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecname2.innerText = "올림픽공원 만남의광장";
      document.getElementById("ifamap").appendChild(poirecname2);
      break;
    }
    case "all-rank2": {
      d3.selectAll("#ifa>*").remove(); //랭킹목록 초기화
      const addiframe = document.createElement("iframe");
      addiframe.setAttribute(
        "src",
        "https://map.naver.com/v5/entry/place/20662279?c=14152017.1199809,4511423.9272744,19,0,0,0,dh"
      );
      addiframe.setAttribute("width", "600");
      addiframe.setAttribute("height", "450");
      addiframe.setAttribute("style", "border:0");
      addiframe.setAttribute("allowfullscreen", "");
      addiframe.setAttribute("loading", "lazy");
      addiframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      document.getElementById("ifa").appendChild(addiframe);

      break;
    }
    default: {
      console.log("ㄴㄴ");
      break;
    }
  }
}
function gangseo() {
  //순위 랭킹 바꾸기
  d3.selectAll("#ranking>*").remove(); //랭킹목록 초기화
  //dt추가
  innername = [
    "안양천합수부 길목",
    "안양천합수부 중앙",
    "발산역 6,7번출구",
    "안양천합수부 자전거도로",
    "화곡역 7번 출구",
    "가양역 9번 출구",
    "마곡역 교차로",
    "NC백화점 강서점 버스정류장",
    "NC백화점 강서점 정문",
    "홈플러스 가양점",
    "구암근린공원 근처 자전거도로",
    "공암나루공원 근처 자전거도로",
    "발산역 1번출구",
    "안양천코스",
    "LG유플러스 마곡사옥 앞",
    "증미역 3번출구",
    "염창나들목",
    "염창교 자전거도로",
    "황금내근린공원 근처 자전거도로",
    "등촌역 중앙",
    "스타벅스 발산역점",
    "우장산역 2번출구",
    "발산근린공원 교차로",
    "개화나들목 근처 자전거도로",
    "마곡나루역 1번출구",
    "미니스톱 발산역점",
    "양천향교역 6번출구",
    "버거킹 마곡점",
    "한국가스기술공사(발산역방면)",
    "명덕고교입구교차로",
  ];
  const adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("강서구 POI순위"));
  document.getElementById("ranking").appendChild(adddt);
  //ol설정
  const addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < innername.length; i++) {
    let addli = document.createElement("li");
    aid = "gangseo-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "gangseopoiselect");
    adda.setAttribute("onclick", "javascript:gangseopoiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
  }
  //li추가한 ol추가
  document.getElementById("ranking").appendChild(addol);
}
function gangseopoiselect(gangseorank) {
  //poi가 선택됐을 때 아래에 추가하는 부분
  switch (gangseorank) {
    case "gangseo-rank1": {
      //태블로 뷰 갱신
      src =
        "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
      d3.select("#vizContainer>iframe").attr("src", src); //POI순위를 보여주겠다.
      d3.selectAll("#ifa>*").remove(); //ifa초기화
      var liinnertext = document.getElementById(gangseorank).innerText; //이름 가져오기
      //console.log(liinnertext);
      let ifatitle = document.createElement("h1");
      ifatitle.setAttribute("style", "text-align:left");
      ifatitle.innerText = liinnertext + "의 주변 뷰입니다.";
      document.getElementById("ifa").appendChild(ifatitle);
      const addiframe = document.createElement("iframe");
      addiframe.setAttribute(
        "src",
        "https://www.google.com/maps/embed?pb=!4v1652075234391!6m8!1m7!1sCAoSK0FGMVFpcE5DLXotRjh5eHBHV20yZ2lFYVN4WU9rRUVnRWVIQ2hraG5aSW8.!2m2!1d37.5538853!2d126.8779857!3f221.8432973831338!4f-0.23894997855377653!5f0.7820865974627469"
      );
      addiframe.setAttribute("width", "80%");
      addiframe.setAttribute("height", "450");
      addiframe.setAttribute("style", "border:0");
      addiframe.setAttribute("allowfullscreen", "");
      addiframe.setAttribute("loading", "lazy");
      addiframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      document.getElementById("ifa").appendChild(addiframe);

      d3.selectAll("#ifamap>*").remove(); //ifamap초기화
      let ifamaptitle = document.createElement("h1");
      ifamaptitle.innerText = "주변 모임 장소 추천";
      document.getElementById("ifamap").appendChild(ifamaptitle);
      //추천장소 1번
      //a태그먼저
      const poirecdiv = document.createElement("div");
      const poirecatag = document.createElement("a");
      poirecatag.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecatag.setAttribute("target", "_blank");
      //이미지
      const poirec = document.createElement("img");
      poirec.setAttribute("src", "pariscroissant");
      poirec.setAttribute("width", "450px");
      poirec.setAttribute("height", "auto");
      poirecatag.appendChild(poirec);
      document.getElementById("ifamap").appendChild(poirecatag);
      //한줄 띄우기
      const brtag = document.createElement("br");
      document.getElementById("ifamap").appendChild(brtag);
      //추천장소 1번 제목
      const poirecname = document.createElement("a");
      poirecname.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecname.innerText = "파리크라상 올림픽공원점";
      document.getElementById("ifamap").appendChild(poirecname);

      //2번 추천장소
      const poirecatag2 = document.createElement("a");
      poirecatag.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/20662279?c=14152017.1199809,4511423.9272744,19,0,0,0,dh"
      );
      poirecatag2.setAttribute("target", "_blank");
      //이미지
      const poirec2 = document.createElement("img");
      poirec2.setAttribute(
        "src",
        "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f180_180&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjNfMjM0%2FMDAxNjM3NjQ0OTM4NzYz.b1EHV1M22cc-9wDNSdsxiNASzvquUUFxfx5UX1rlcRAg.sshRzhwGwXdAKDBsS8UFE7wvsPcXiH8iz3-Jqhg8kqAg.JPEG.hyun68%2F20211112_124036.jpg%234032x2268"
      );
      poirec2.setAttribute("width", "450px");
      poirec2.setAttribute("height", "auto");
      poirecatag2.appendChild(poirec2);
      document.getElementById("ifamap").appendChild(poirecatag2);
      //한줄 띄우기
      const brtag2 = document.createElement("br");
      document.getElementById("ifamap").appendChild(brtag2);
      //추천장소 2번 제목
      const poirecname2 = document.createElement("a");
      poirecname2.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecname2.innerText = "올림픽공원 만남의광장";
      document.getElementById("ifamap").appendChild(poirecname2);
      break;
    }
    case "gangseo-rank2": {
      d3.selectAll("#ifa>*").remove(); //랭킹목록 초기화
      const addiframe = document.createElement("iframe");
      addiframe.setAttribute(
        "src",
        "https://map.naver.com/v5/entry/place/20662279?c=14152017.1199809,4511423.9272744,19,0,0,0,dh"
      );
      addiframe.setAttribute("width", "600");
      addiframe.setAttribute("height", "450");
      addiframe.setAttribute("style", "border:0");
      addiframe.setAttribute("allowfullscreen", "");
      addiframe.setAttribute("loading", "lazy");
      addiframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      document.getElementById("ifa").appendChild(addiframe);

      break;
    }
    default: {
      console.log("ㄴㄴ");
      break;
    }
  }
}
function songpa() {
  //순위 랭킹 바꾸기
  d3.selectAll("#ranking>*").remove(); //랭킹목록 초기화
  //dt추가
  innername = [
    "올림픽공원역 3번출구",
    "GS25 한강잠실4호점 자전거도로",
    "여름캠핑장 자전거도로",
    "수상관장 콜택시승간장 자전거도로",
    "잠실마루쉼터 자전거도로",
    "GS25 한강잠실2호점 자전거도로",
    "올림픽공원 평화의 광장",
    "한강공원 잠실제1주차장 자전거도로",
    "잠실역 2번출구",
    "올림픽공원프라자",
    "올림픽공원 세계평화의문",
    "올림픽공원 국기광장",
    "잠실역 7,8번 출구",
    "석촌역 교차로",
    "잠실역 교차로",
    "잠실역 10번출구",
    "더컨벤션 잠실점 교차로",
    "잠실한강공원앞 교차로",
    "정국숲3호 자전거도로",
    "올림픽공원 한얼광장",
    "올림픽공원 북2문입구",
    "방이맛골",
    "몽촌토성역 1번출구",
    "방이삼거리",
    "종합운동장사거리",
    "한성백제역 2번출구",
    "GS25 한강잠실1호점 자전거도로",
    "석촌호수 (남쪽)",
    "송파근린공원 교차로",
    "잠실새내역 2번출구",
  ];
  const adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("송파구 POI순위"));
  document.getElementById("ranking").appendChild(adddt);
  //ol설정
  const addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < innername.length; i++) {
    let addli = document.createElement("li");
    aid = "songpa-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "songpapoiselect");
    adda.setAttribute("onclick", "javascript:songpapoiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
  }
  //li추가한 ol추가
  document.getElementById("ranking").appendChild(addol);
}
function songpapoiselect(songparank) {
  //poi가 선택됐을 때 아래에 추가하는 부분
  switch (songparank) {
    case "songpa-rank1": {
      //태블로 뷰 갱신
      src =
        "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
      d3.select("#vizContainer>iframe").attr("src", src); //POI순위를 보여주겠다.
      d3.selectAll("#ifa>*").remove(); //ifa초기화
      var liinnertext = document.getElementById(songparank).innerText; //이름 가져오기
      //console.log(liinnertext);
      let ifatitle = document.createElement("h1");
      ifatitle.setAttribute("style", "text-align:left");
      ifatitle.innerText = liinnertext + "의 주변 뷰입니다.";
      document.getElementById("ifa").appendChild(ifatitle);
      const addiframe = document.createElement("iframe");
      addiframe.setAttribute(
        "src",
        "https://www.google.com/maps/embed?pb=!4v1652155452732!6m8!1m7!1sCAoSLEFGMVFpcE9yLVNfdFROTkdsUzFGNDAtYmQtenc2MmZDNUdfOVJ5aVd5bVoy!2m2!1d37.51667286888663!2d127.1304336190224!3f327.1603003870117!4f-14.357186019412126!5f0.7820865974627469"
      );
      addiframe.setAttribute("width", "80%");
      addiframe.setAttribute("height", "450");
      addiframe.setAttribute("style", "border:0");
      addiframe.setAttribute("allowfullscreen", "");
      addiframe.setAttribute("loading", "lazy");
      addiframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      document.getElementById("ifa").appendChild(addiframe);

      d3.selectAll("#ifamap>*").remove(); //ifamap초기화
      let ifamaptitle = document.createElement("h1");
      ifamaptitle.innerText = "주변 모임 장소 추천";
      document.getElementById("ifamap").appendChild(ifamaptitle);
      //추천장소 1번
      //a태그먼저
      const poirecdiv = document.createElement("div");
      const poirecatag = document.createElement("a");
      poirecatag.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecatag.setAttribute("target", "_blank");
      //이미지
      const poirec = document.createElement("img");
      poirec.setAttribute("src", "pariscroissant");
      poirec.setAttribute("width", "450px");
      poirec.setAttribute("height", "auto");
      poirecatag.appendChild(poirec);
      document.getElementById("ifamap").appendChild(poirecatag);
      //한줄 띄우기
      const brtag = document.createElement("br");
      document.getElementById("ifamap").appendChild(brtag);
      //추천장소 1번 제목
      const poirecname = document.createElement("a");
      poirecname.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecname.innerText = "파리크라상 올림픽공원점";
      document.getElementById("ifamap").appendChild(poirecname);

      //2번 추천장소
      const poirecatag2 = document.createElement("a");
      poirecatag.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/20662279?c=14152017.1199809,4511423.9272744,19,0,0,0,dh"
      );
      poirecatag2.setAttribute("target", "_blank");
      //이미지
      const poirec2 = document.createElement("img");
      poirec2.setAttribute(
        "src",
        "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f180_180&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjNfMjM0%2FMDAxNjM3NjQ0OTM4NzYz.b1EHV1M22cc-9wDNSdsxiNASzvquUUFxfx5UX1rlcRAg.sshRzhwGwXdAKDBsS8UFE7wvsPcXiH8iz3-Jqhg8kqAg.JPEG.hyun68%2F20211112_124036.jpg%234032x2268"
      );
      poirec2.setAttribute("width", "450px");
      poirec2.setAttribute("height", "auto");
      poirecatag2.appendChild(poirec2);
      document.getElementById("ifamap").appendChild(poirecatag2);
      //한줄 띄우기
      const brtag2 = document.createElement("br");
      document.getElementById("ifamap").appendChild(brtag2);
      //추천장소 2번 제목
      const poirecname2 = document.createElement("a");
      poirecname2.setAttribute(
        "href",
        "https://map.naver.com/v5/entry/place/36547252?c=14151574.4691577,4511322.4146374,15,0,0,0,dh"
      );
      poirecname2.innerText = "올림픽공원 만남의광장";
      document.getElementById("ifamap").appendChild(poirecname2);
      break;
    }
    case "songpa-rank2": {
      d3.selectAll("#ifa>*").remove(); //랭킹목록 초기화
      const addiframe = document.createElement("iframe");
      addiframe.setAttribute(
        "src",
        "https://map.naver.com/v5/entry/place/20662279?c=14152017.1199809,4511423.9272744,19,0,0,0,dh"
      );
      addiframe.setAttribute("width", "600");
      addiframe.setAttribute("height", "450");
      addiframe.setAttribute("style", "border:0");
      addiframe.setAttribute("allowfullscreen", "");
      addiframe.setAttribute("loading", "lazy");
      addiframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      document.getElementById("ifa").appendChild(addiframe);

      break;
    }
    default: {
      console.log("ㄴㄴ");
      break;
    }
  }
}
