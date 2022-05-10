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
  } else if (gu == "송파구") {
    src =
      "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src); //송파구 뷰를 보여주겠다.
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
  //console.log(allrank);제대로 id뜨는거 확인 완료
  switch (allrank) {
    case "all-rank1": {
      d3.selectAll("#ifa>*").remove(); //ifa초기화
      var liinnertext = document.getElementById(allrank).innerText; //이름 가져오기
      //console.log(liinnertext);
      let ifatitle = document.createElement("h1");
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
      const addmapiframe = document.createElement("iframe");
      addmapiframe.setAttribute(
        "src",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.57897992661157!2d127.13009279879157!3d37.51660052679466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cafc468f8986f%3A0x70073282c3f4ccaf!2z7YyM66as7YGs65287IOBIOyYrOumvO2UveqzteybkO2CpOy5nOygkA!5e0!3m2!1sko!2skr!4v1652208227962!5m2!1sko!2skr"
      );
      addmapiframe.setAttribute("width", "45%");
      addmapiframe.setAttribute("height", "450");
      addmapiframe.setAttribute("style", "border:0");
      addmapiframe.setAttribute("allowfullscreen", "");
      addmapiframe.setAttribute("loading", "lazy");
      addmapiframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      document.getElementById("ifamap").appendChild(addmapiframe);
      const addmapiframe2 = document.createElement("iframe");
      addmapiframe2.setAttribute(
        "src",
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d791.1587348460205!2d127.12999675644573!3d37.51652742694793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf8b8a2f5b23%3A0xe1222cb0d8f0deb1!2z7Jis66a87ZS96rO17JuQ!5e0!3m2!1sko!2skr!4v1652208752061!5m2!1sko!2skr"
      );
      addmapiframe2.setAttribute("width", "45%");
      addmapiframe2.setAttribute("height", "450");
      addmapiframe2.setAttribute("style", "border:0; margin-left:5%");
      addmapiframe2.setAttribute("allowfullscreen", "");
      addmapiframe2.setAttribute("loading", "lazy");
      addmapiframe2.setAttribute(
        "referrerpolicy",
        "no-referrer-when-downgrade"
      );
      document.getElementById("ifamap").appendChild(addmapiframe2);

      break;
    }
    case "all-rank2": {
      d3.selectAll("#ifa>*").remove(); //랭킹목록 초기화
      const addiframe = document.createElement("iframe");
      addiframe.setAttribute(
        "src",
        "https://www.google.com/maps/embed?pb=!4v1652155559140!6m8!1m7!1sCAoSLEFGMVFpcE02czN4WXYycG55TnhPTUNGOHlnUGNhNWhrYXFUYmpFakNMdHE1!2m2!1d37.5183667!2d127.0787167!3f316.59109195209817!4f-1.1039310801823063!5f0.7820865974627469"
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
