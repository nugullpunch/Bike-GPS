const express = require("express");
const socket = require("socket.io");
const http = require("http");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const io = socket(server);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// const path = require("path");
// const { parser } = require("csv");
// const parse = require("csv").parse;

// const h3 = require("h3-js");

const db_config = require("./database.js");
const conn = db_config.init();

// app.set("views", __dirname + "views");
// app.set("view engine", "ejs");

//var csvArray = []; //csv파일을 넣을 것임.
// const ddID = []; //id
// const ddseq = []; //sequence
// const ddlat = []; //lat 좌표
// const ddlon = []; //lon 좌표
let user = {};
io.sockets.on("connection", (socket) => {
  //현재 socket 연결이 안되는 문제 발생
  user[socket.id] = {
    id: "",
  };
  const req = socket.request;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log("새로운 클라이언트 접속", ip, socket.id, req.ip);
  //console.log(user);
  //console.log(user[socket.id]);
});
app.get("/dbs", (req, res) => {
  conn.query("SELECT * FROM `test1`", function (error, results, fields) {
    if (error) throw error;
    res.json(results);
    res.end();
  });
});
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
app.get("/loaddb", (req, res) => {
  fs.readFile("loaddb.js", (err, data) => {
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
app.get("/map", (req, res) => {
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
app.post("/test", function (req, res) {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = "";
  switch (today.getDay()) {
    case 0:
      day = "일";
      break;
    case 1:
      day = "월";
      break;
    case 2:
      day = "화";
      break;
    case 3:
      day = "수";
      break;
    case 4:
      day = "목";
      break;
    case 5:
      day = "금";
      break;
    case 6:
      day = "토";
      break;
    default:
      day = " ";
      break;
  }

  userinput = {
    place: "",
    review: "",
    date: "",
  };
  let uplace = req.body.username;
  let ureview = req.body.innertext;
  let udate = year + "." + month + "." + date + " " + day;
  userinput.place = uplace;
  userinput.review = ureview;
  userinput.date = udate;
  //userint(userinput);
  console.log(userinput); //유저 입력 저장(장소, 리뷰, 날짜까지)

  conn.query(
    "INSERT INTO test1(place,review,date) VALUES(?,?,?)",
    [uplace, ureview, udate],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log(rows.name);
      }
    }
  );
});

server.listen(8756, function () {
  console.log("서버시작");
});
