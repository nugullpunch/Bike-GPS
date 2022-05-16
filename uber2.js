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
      ioid = liinnertext; //ioid 할당
      console.log(ioid);
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
function tablemaker(rplace, rusername, rdate, rreviewin) {
  for (let i = rusername.length - 1; i >= 0; i--) {
    //최신순
    let row_2 = document.createElement("tr");
    let row_2_data_1 = document.createElement("td");
    row_2_data_1.innerHTML = rusername[i];
    let row_2_data_2 = document.createElement("td");
    row_2_data_2.innerHTML = rdate[i];
    let row_2_data_3 = document.createElement("td");
    row_2_data_3.innerHTML = rreviewin[i];

    // console.log(row_2_data_1);
    // console.log(row_2_data_2);
    // console.log(row_2_data_3);
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    document.getElementById("ifa").appendChild(row_2);
  }
}
function reviewing(rplace) {
  const reviewdiv = document.createElement("div"); //div생성
  reviewdiv.setAttribute("class", "col-lg-12"); //css
  reviewdiv.setAttribute("name", "reviewdiv");

  const reviewform = document.createElement("form"); //form 생성
  reviewform.setAttribute("action", "/addreview"); //css용
  reviewform.setAttribute("method", "POST"); //css용

  const reviewinput = document.createElement("input"); //input생성
  reviewinput.setAttribute("class", "reviewinput");
  reviewinput.setAttribute("type");
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
