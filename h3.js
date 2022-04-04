const express = require("express");
const socket = require("socket.io");
const http = require("http");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const io = socket(server);

const path = require("path");
const { parser } = require("csv");
const parse = require("csv").parse;

const h3 = require("h3-js");

//var csvArray = []; //csv파일을 넣을 것임.
const ddID = []; //id
const ddseq = []; //sequence
const ddlat = []; //lat 좌표
const ddlon = []; //lon 좌표
(async () => {
  const stream = fs.createReadStream(
    path.join(__dirname, "./../GPS_성의2/강서 분할/강서1.csv"),
    { encoding: "utf8" }
  );

  const parser = stream.pipe(
    //csv파일 불러오는 형식
    parse({
      columns: true,
      delimeter: ",",
      trim: true,
      skip_empty_lines: true,
    })
  );
  let count = 0;
  process.stdout.write("start\n");

  for await (const record of parser) {
    //console.log(record);
    //레코드 전부 저장하기
    // process.stdout.write(`${count++} ${Object.values(record).join(",")}\n`);
    //csvArray.push(record); //{'일련번호':'389','Rent ID':'47',Sequence:'13',lat_100m...}
    //splitData
    //ddseq.push(record["Sequence"]);
    //ddID.push(record["Rent ID"]);
    ddlat.push(record["Lat"]);
    ddlon.push(record["Lon"]);
  }

  //console.log(ddseq);
  //console.log(csvArray); //밖에서 하면 await를 받지 않고 먼저 실행됨.
  //console.log(ddseq);
  // console.log(ddID);
  // console.log(ddlat);
  // console.log(ddlon);//잘 나눠짐.

  //h3만들어봅시다.
  // var lv9 = h3.geoToH3(ddlat[1], ddlon[1], 9);
  // var a = h3.h3ToGeoBoundary(lv9);
  // console.log(a[0][1]);
  // [ 37.555444032429364, 126.82545814372733 ],
  // [ 37.556960161981074, 126.82470851724122 ],
  // [ 37.55717267505088, 126.82298420663084 ],
  // [ 37.55586909783418, 126.82200960258334 ],
  // [ 37.55435302136943, 126.82275924115098 ],
  // [ 37.5541404690353, 126.82448347168673 ]
  // var poly = [];
  // for (let i = 0; i < ddlat.length(); i++) {
  //   for (let j = 0; a.length(); j++) {
  //     var lv9 = h3.geoToH3(ddlat[i], ddlon[i], 9); //9에 대해 h3분할
  //     var a = h3.h3ToGeoBoundary(lv9); //a가 들어가는 h3좌표
  //     poly[i].push(a[j]); //poly[i]=[[37126],[37126],[2],[3],[4],[5]]
  //   }
  // }

  let user = {};
  io.sockets.on("connection", (socket) => {
    user[socket.id] = {
      id: "",
      // dlat: ddlat,
      // dlon: ddlon,
      // dID: ddID,
      // dseq: ddseq,
    };
    const req = socket.request;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("새로운 클라이언트 접속", ip, socket.id, req.ip);
    //console.log(user);
    //console.log(user[socket.id]);

    io.sockets.emit("input", {
      //lat 과 lon을 사용자에게 보내서 지도에 띄우는 방식
      dlat: ddlat,
      dlon: ddlon,
      dID: ddID,
      dseq: ddseq,
    });
  });
})();
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
  //console.log(lls); //육각형 내 몇개가 들어가는지 count한 걸 내놓음. (key:value방식)
  for (key in lls) {
    //key값 한개마다 접근하겠습니다.
    //console.log(key);//key값
    //console.log(lls[key]);//value값
    var hexBoundary = h3.h3ToGeoBoundary(key); //key값의 육각형 좌표를 가져옵니다.
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
      fillOpacity: 0.0001 * lls[key],
    }); //value값 만큼 곱한거만큼 진하기를 주겠다.
    polygonh3.setMap(map);
  }
}

//AIzaSyC_bEWvK62eVdN6DIAOyDTiWxsPBlk642w

app.get("/", (req, res) => {
  fs.readFile("main.html", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/main", (req, res) => {
  fs.readFile("main.html", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/uber", (req, res) => {
  fs.readFile("uber.js", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/uber2", (req, res) => {
  fs.readFile("uber2.js", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/socket.io/socket.io.js", (req, res) => {
  fs.readFile(
    "node_modules/socket.io/client-dist/socket.io.js",
    (err, data) => {
      if (err) {
        res.send("error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    }
  );
});
app.get("map", (req, res) => {
  fs.readFile(
    "node_modules/socket.io/client-dist/socket.io.js.map",
    (err, data) => {
      if (err) {
        res.send("error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    }
  );
});
server.listen(80, function () {
  console.log("서버시작");
});
