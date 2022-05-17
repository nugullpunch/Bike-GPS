//&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse
var ioid = "전체구"; //어떤 id에 접근했었는지 표시하기위한 ioid, 아래에서 값 선언될 것임.
function poidlocmoim() {
  (async () => {
    const NodeList = document.getElementsByName("options");
    const Node2 = document.getElementsByName("gus");

    NodeList.forEach((node) => {
      if (node.checked && ioid == "전체구") {
        //ioid가 전체구일 때
        if (node.id == "poi") {
          //poi지점 파악
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/source_16527093881440/Source?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("iframe");
          tableaucontainer.setAttribute("frameborder", "0");
          tableaucontainer.setAttribute("allowtransparency", "true");
          tableaucontainer.setAttribute("allowfullscreen", "true");
          tableaucontainer.setAttribute("title", "데이터 비주얼리제이션");
          tableaucontainer.setAttribute("marginheight", "0");
          tableaucontainer.setAttribute("marginwidth", "0");
          tableaucontainer.setAttribute("scrolling", "no");
          tableaucontainer.setAttribute(
            "style",
            "display:block;width:100%;height:700px"
          );
          tableaucontainer.setAttribute("visibility", "visible");
          tableaucontainer.setAttribute("src", src);
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "dloc") {
          //대여소위치파악
          console.log(ioid);
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("iframe");
          tableaucontainer.setAttribute("frameborder", "0");
          tableaucontainer.setAttribute("allowtransparency", "true");
          tableaucontainer.setAttribute("allowfullscreen", "true");
          tableaucontainer.setAttribute("title", "데이터 비주얼리제이션");
          tableaucontainer.setAttribute("marginheight", "0");
          tableaucontainer.setAttribute("marginwidth", "0");
          tableaucontainer.setAttribute("scrolling", "no");
          tableaucontainer.setAttribute(
            "style",
            "display:block;width:100%;height:700px"
          );
          tableaucontainer.setAttribute("visibility", "visible");
          tableaucontainer.setAttribute("src", src);
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //전체구 스트리트뷰는 없습니다.
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("전체구에는 스트리트뷰가 없습니다.");
          moim = document.getElementById("moim");
          moim.checked = false;
        }
      }

      if (node.checked && ioid == "강서구") {
        //ioid가 강서구일 때
        if (node.id == "poi") {
          //poi지점 파악
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/source_16527093881440/Source?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("iframe");
          tableaucontainer.setAttribute("frameborder", "0");
          tableaucontainer.setAttribute("allowtransparency", "true");
          tableaucontainer.setAttribute("allowfullscreen", "true");
          tableaucontainer.setAttribute("title", "데이터 비주얼리제이션");
          tableaucontainer.setAttribute("marginheight", "0");
          tableaucontainer.setAttribute("marginwidth", "0");
          tableaucontainer.setAttribute("scrolling", "no");
          tableaucontainer.setAttribute(
            "style",
            "display:block;width:100%;height:700px"
          );
          tableaucontainer.setAttribute("visibility", "visible");
          tableaucontainer.setAttribute("src", src);
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "dloc") {
          //대여소위치파악
          console.log(ioid);
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("iframe");
          tableaucontainer.setAttribute("frameborder", "0");
          tableaucontainer.setAttribute("allowtransparency", "true");
          tableaucontainer.setAttribute("allowfullscreen", "true");
          tableaucontainer.setAttribute("title", "데이터 비주얼리제이션");
          tableaucontainer.setAttribute("marginheight", "0");
          tableaucontainer.setAttribute("marginwidth", "0");
          tableaucontainer.setAttribute("scrolling", "no");
          tableaucontainer.setAttribute(
            "style",
            "display:block;width:100%;height:700px"
          );
          tableaucontainer.setAttribute("visibility", "visible");
          tableaucontainer.setAttribute("src", src);
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //강서구 전체 스트리트뷰는 없습니다.
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("강서구 전체는 스트리트뷰가 없습니다.");
          moim = document.getElementById("moim");
          moim.checked = false;
        }
      }

      if (node.checked && ioid == "송파구") {
        //ioid가 송파구일 때
        if (node.id == "poi") {
          //poi지점 파악
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/source_16527093881440/Source?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("iframe");
          tableaucontainer.setAttribute("frameborder", "0");
          tableaucontainer.setAttribute("allowtransparency", "true");
          tableaucontainer.setAttribute("allowfullscreen", "true");
          tableaucontainer.setAttribute("title", "데이터 비주얼리제이션");
          tableaucontainer.setAttribute("marginheight", "0");
          tableaucontainer.setAttribute("marginwidth", "0");
          tableaucontainer.setAttribute("scrolling", "no");
          tableaucontainer.setAttribute(
            "style",
            "display:block;width:100%;height:700px"
          );
          tableaucontainer.setAttribute("visibility", "visible");
          tableaucontainer.setAttribute("src", src);
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "dloc") {
          //대여소위치파악
          console.log(ioid);
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("iframe");
          tableaucontainer.setAttribute("frameborder", "0");
          tableaucontainer.setAttribute("allowtransparency", "true");
          tableaucontainer.setAttribute("allowfullscreen", "true");
          tableaucontainer.setAttribute("title", "데이터 비주얼리제이션");
          tableaucontainer.setAttribute("marginheight", "0");
          tableaucontainer.setAttribute("marginwidth", "0");
          tableaucontainer.setAttribute("scrolling", "no");
          tableaucontainer.setAttribute(
            "style",
            "display:block;width:100%;height:700px"
          );
          tableaucontainer.setAttribute("visibility", "visible");
          tableaucontainer.setAttribute("src", src);
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //송파구 전체 스트리트뷰는 없습니다.
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("송파구 전체는 스트리트뷰가 없습니다.");
          moim = document.getElementById("moim");
          moim.checked = false;
        }
      }

      if (node.checked && ioid == "all-rank1") {
        //ioid가 all-rank1일 때(전체 POI1위)(버튼작업)
        if (node.id == "poi") {
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/source_16527093881440/Source?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("iframe");
          tableaucontainer.setAttribute("frameborder", "0");
          tableaucontainer.setAttribute("allowtransparency", "true");
          tableaucontainer.setAttribute("allowfullscreen", "true");
          tableaucontainer.setAttribute("title", "데이터 비주얼리제이션");
          tableaucontainer.setAttribute("marginheight", "0");
          tableaucontainer.setAttribute("marginwidth", "0");
          tableaucontainer.setAttribute("scrolling", "no");
          tableaucontainer.setAttribute(
            "style",
            "display:block;width:100%;height:700px"
          );
          tableaucontainer.setAttribute("visibility", "visible");
          tableaucontainer.setAttribute("src", src);
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "dloc") {
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //all-rank1에 대한 스트리트뷰
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155452732!6m8!1m7!1sCAoSLEFGMVFpcE9yLVNfdFROTkdsUzFGNDAtYmQtenc2MmZDNUdfOVJ5aVd5bVoy!2m2!1d37.51667286888663!2d127.1304336190224!3f327.1603003870117!4f-14.357186019412126!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }
    });
  })();
}
function guselect(gu) {
  //tableau뷰 바꿔주겠습니다.
  if (gu == "전체구") {
    ioid = "전체구";
    src =
      "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src);
    allgu();
  } else if (gu == "강서구") {
    ioid = "강서구";
    src =
      "https://public.tableau.com/shared/WSQ9TPWMH?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src); //강서구 뷰를 보여주겠다.
    gangseo();
  } else if (gu == "송파구") {
    ioid = "송파구";
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
      buttontableaureview(allrank);

      break;
    }
    case "all-rank2": {
      buttontableaureview(allrank);
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

function tablemaker(rplace, rusername, rdate, rreviewin) {
  for (let i = rusername.length - 1; i >= 0; i--) {
    //최신순
    //유저,날짜부분
    let uuser = document.createElement("div");
    uuser.setAttribute("class", "ss");
    uuser.setAttribute("style", "display:flex");
    //유저
    let uusername = document.createElement("div");
    uusername.setAttribute("class", "uusername");
    uusername.innerHTML = rusername[i];
    //날짜
    let uudate = document.createElement("div");
    uudate.setAttribute("class", "uudate");
    uudate.innerHTML = rdate[i];

    uuser.appendChild(uusername);
    uuser.appendChild(uudate);
    document.getElementById("ifa").appendChild(uuser);
    //리뷰부분
    let uureview = document.createElement("div");
    uureview.innerHTML = rreviewin[i];
    document.getElementById("ifa").appendChild(uureview);
    //한줄 추가
    const brtag = document.createElement("hr");
    document.getElementById("ifa").appendChild(brtag);
  }
}
function reviewing(rplace) {
  const reviewdiv = document.createElement("div"); //div생성
  reviewdiv.setAttribute("class", "col-lg-12"); //css
  reviewdiv.setAttribute("name", "reviewdiv");

  const reviewform = document.createElement("form"); //form 생성
  reviewform.setAttribute("action", "/addreview"); //css용
  reviewform.setAttribute("method", "POST"); //css용
  //reviewdiv.appendChild(reviewform);
  //닉네임
  const nickinput = document.createElement("input"); //input생성
  nickinput.setAttribute("class", "reviewinput");
  nickinput.setAttribute("type", "text");
  nickinput.setAttribute("name", "username");
  nickinput.setAttribute("placeholder", "닉네임");
  nickinput.setAttribute("required", "");
  nickinput.setAttribute("style", "height:50px");
  reviewform.appendChild(nickinput);
  //한줄 띄우기
  const brtag = document.createElement("br");
  reviewform.appendChild(brtag);
  document.getElementById("ifa").appendChild(reviewdiv);
  //리뷰 + 버튼그룹을 위한 div 생성
  const reviewgroup = document.createElement("div");
  reviewgroup.setAttribute("id", "rplace"); //
  reviewgroup.setAttribute("name", rplace); //

  //리뷰
  const reviewinput = document.createElement("input"); //input생성
  reviewinput.setAttribute("class", "reviewinput");
  reviewinput.setAttribute("type", "text");
  reviewinput.setAttribute("name", "innertext");
  reviewinput.setAttribute(
    "placeholder",
    rplace + "에 대한 리뷰를 남겨주세요."
  );
  reviewinput.setAttribute("required", "");
  reviewinput.setAttribute("style", "height:200px;width:70%");
  reviewgroup.appendChild(reviewinput); //group에 input삽입
  //버튼
  const reviewbutton = document.createElement("button");
  reviewbutton.setAttribute("class", "searchbtn");
  reviewbutton.setAttribute(
    "style",
    "width:15%;height:50px;max-width:200px;min-width:100px"
  );
  reviewbutton.innerHTML = "등록";
  reviewgroup.appendChild(reviewbutton); //group에 button삽입

  reviewform.appendChild(reviewgroup); //input과 button 그룹을 form에 붙이기
  reviewdiv.appendChild(reviewform); //form을 최종 div에 붙이기
  document.getElementById("ifa").appendChild(reviewdiv); //div 최종게시
  //rplace를 넘길 필요가 있음(h3.js로)
  var formr = document.createElement("form");
  formr.setAttribute("method", "post");
  formr.setAttribute("action", "/rplaces");
  var hF = document.createElement("input");
  hF.setAttribute("type", "hidden");
  hF.setAttribute("name", "rplace");
  hF.setAttribute("value", rplace);
  formr.appendChild(hF);
  document.body.appendChild(formr);
  formr.submit();
}
function buttontableaureview(allrank) {
  //버튼 바꾸기
  poi = document.getElementById("poi");
  poi.checked = true;
  //태블로 뷰 갱신
  ioid = allrank; //위에 버튼그룹 연결을 위한 ioid설정
  poidlocmoim(); //위에 버튼그룹 연결
  d3.selectAll("#ifa>*").remove(); //ifa초기화//ifa에 리뷰 넣겠습니다.
  var liinnertext = document.getElementById(allrank).innerText; //이름 가져오기
  //console.log(liinnertext);
  let ifatitle = document.createElement("h1");
  ifatitle.setAttribute("style", "text-align:left");
  ifatitle.innerText = liinnertext + " 방문자들의 리뷰"; //올림픽공원 방문자들의 리뷰
  document.getElementById("ifa").appendChild(ifatitle);
  //한줄 추가
  const brtag = document.createElement("hr");
  document.getElementById("ifa").appendChild(brtag);
  //달린 리뷰 추가하기
  //console.log(username);//리뷰를 위해 loaddb.js에서 변수를 가져올 수 있음을 확인(완료)
  var rvusername = []; //유저이름배열
  var rvdate = []; //날짜들배열
  var rvreviewin = []; //리뷰들배열
  for (let i = 0; i < place.length; i++) {
    //이름이 일치하는 동안 리뷰들을 불러오겠다.
    if (liinnertext == place[i]) {
      rvusername.push(username[i]);
      rvdate.push(date[i]);
      rvreviewin.push(reviewin[i]);
    }
    //리뷰테이블 만들기 - 장소,이름배열,날짜배열,리뷰배열 보내기
  }
  tablemaker(liinnertext, rvusername, rvdate, rvreviewin);
  //리뷰 달 수 있는 부분추가하기
  reviewing(liinnertext);
}
