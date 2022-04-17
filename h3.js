const express = require("express");
const socket = require("socket.io");
const http = require("http");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const io = socket(server);

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

  socket.on("uinput", (data) => {
    console.log(data); //입력받은 데이터 불러오기
    var places = data.place;
    var reviews = data.review;
    var dates = data.date;
    console.log(places);
    conn.query(
      "INSERT INTO test1(place,review,date) VALUES(?,?,?)",
      [places, reviews, dates],
      function (err, rows, fields) {
        if (err) {
          console.log(err);
        } else {
          console.log(rows.name);
        }
      }
    );
  });
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

server.listen(8756, function () {
  console.log("서버시작");
});
