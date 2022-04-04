//<script type="text/javascript">
//구글지도
var map;
var dlat = [];
var dlon = [];
var dID = [];
var dseq = [];
let socket = io();
var buttonis = () => {
  //버튼 이름만 가져온 상태.
  poi = document.getElementById("poi");
  dloc = document.getElementByID("dloc");
  moim = document.getElementByID("moim");
};
socket.on("input", function (data) {
  var dlat = `${data.dlat}`;
  var dlon = `${data.dlon}`;
  var dID = `${data.dID}`;
  var dseq = `${data.dseq}`;
  //console.log(dlat); //dlat좌표가 오는지 확인 완료. 근데 문자열로 오게됨. 분할 필요
  var ddlat = dlat.split(","); //문자로 와서 다시 분리해야함.
  var ddlon = dlon.split(",");
});
(async () => {
  socket.on("input", function (data) {
    var dlat = `${data.dlat}`;
    var dlon = `${data.dlon}`;
    var dID = `${data.dID}`;
    var dseq = `${data.dseq}`;
    //console.log(dlat); //dlat좌표가 오는지 확인 완료. 근데 문자열로 오게됨. 분할 필요
    var ddlat = dlat.split(",").map(function (item) {
      return parseFloat(item, 10);
    }); //문자로 와서 float형식으로 다시 분할
    var ddlon = dlon.split(",").map(function (item) {
      return parseFloat(item, 10);
    });
    var ddID = dID.split(","); //문자로 와서 다시 분리해야함.
    var ddseq = dseq.split(",");

    //console.log(ddlat[0]);
    initMap(ddlat, ddlon); //지도 시작
  });

  function initMap(drlat, drlon) {
    //매개변수 두개 = lat과 lon
    //console.log(drlat[0]);
    var ll = { lat: drlat[0], lng: drlon[0] };
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: ll,
    });
    //for (let i = 0; i < drlat.length; i++) {
    //  var marker = new google.maps.Marker({
    //    map: map,
    //    position: { lat: drlat[i], lng: drlon[i] },
    //  });
    //}

    // const idd = [];
    // for (let i = 0; i < drseq.length; i++) {
    //   // if (drID[i] == 726144) {
    //   //   console.log(drseq[i]);
    //   // }//한개만 골라서 seq값 가져오는 것임.
    //   idd.push(drID[i]);
    // }
    // const idds = {};
    // idd.forEach((x) => {
    //   idds[x] = (idds[x] || 0) + 1;
    // });
    // //console.log(idds);
    // var wd = [];
    // for (key in idds) {
    //   if (idds[key] == 1) {
    //     wd.push(key);
    //   }
    // }
    // console.log(wd);//

    //console.log(wd);//1개의 sequence를 가진 ID는 19개가 나옴.

    //h3적용
    const poly = Array.from(Array(drlat.length), () => new Array(2));
    //const ls = new Set(); //중복제거를 위해 new Set을 함
    const ld = [];
    for (let i = 0; i < drlat.length; i++) {
      const h3Index = h3.geoToH3(drlat[i], drlon[i], 9);
      //ls.add(h3Index);
      ld.push(h3Index);
    }
    //console.log(ls); //100만개 9index에서 466개의 결과가 나옴
    //console.log(ld);
    const lls = {};
    ld.forEach((x) => {
      lls[x] = (lls[x] || 0) + 1;
    });
    var sortkey = [];
    for (let number in lls) {
      //크기에 따라 오름차순 정렬
      sortkey.push([number, lls[number]]);
    }
    sortkey.sort(function (a, b) {
      return b[1] - a[1];
    });
    //console.log(lls); //육각형 내 몇개가 들어가는지 count한 걸 내놓음. (key:value방식)
    for (let i = 0; i < 200; i++) {
      //poi 상위 200개만 표시해보겠습니다.
      //key값 한개마다 접근하겠습니다.
      //console.log(h3.h3ToGeo(key));
      //console.log(key);//key값
      //console.log(lls[key]);//value값
      var hexBoundary = h3.h3ToGeoBoundary(sortkey[i][0]); //key값의 육각형 좌표를 가져옵니다.
      //console.log(hexBoundary[0][0]);
      var polycoords = [
        new google.maps.LatLng(hexBoundary[0][0], hexBoundary[0][1]),
        new google.maps.LatLng(hexBoundary[1][0], hexBoundary[1][1]),
        new google.maps.LatLng(hexBoundary[2][0], hexBoundary[2][1]),
        new google.maps.LatLng(hexBoundary[3][0], hexBoundary[3][1]),
        new google.maps.LatLng(hexBoundary[4][0], hexBoundary[4][1]),
        new google.maps.LatLng(hexBoundary[5][0], hexBoundary[5][1]),
      ]; //총 466개의 육각형을 가져와서
      polygonh3 = new google.maps.Polygon({
        paths: polycoords,
        stroke: "#FF0000",
        strokeOpacity: 0.3,
        strokeWeight: 0.5,
        fillcolor: "#5dba83",
        fillOpacity: 0.0001 * sortkey[i][1],
      }); //value값 만큼 곱한거만큼 진하기를 주겠다.
      circleh3 = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: {
          lat: h3.h3ToGeo(sortkey[i][0])[0],
          lng: h3.h3ToGeo(sortkey[i][0])[1],
        },
        radius: Math.sqrt(sortkey[i][1]) / 3,
      });
      var mapLabel2 = new MapLabel({
        text: sortkey[i][1],
        position: {
          lat: h3.h3ToGeo(sortkey[i][0])[0],
          lng: h3.h3ToGeo(sortkey[i][0])[1],
        },
        map: map,
        fontSize: 10,
        align: "center",
      });
    }
  }
})();
//</script>
