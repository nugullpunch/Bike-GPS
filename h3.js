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

let user = {};
var rplace = "";
io.sockets.on("connection", (socket) => {
  //현재 socket 연결이 안되는 문제 발생 > 쓸 필요가 없어짐
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
  var db_config = require("./database.js");
  var conn = db_config.init();
  conn.query("SELECT * FROM `review`", function (error, results, fields) {
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
app.get("/freenote", (req, res) => {
  fs.readFile("./freenote.html", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/about", (req, res) => {
  fs.readFile("./about.html", (err, data) => {
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
  var db_config = require("./database.js");
  var conn = db_config.init();
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
app.post("/rplaces", function (req, res) {
  //console.log(req.body.rplace);
  rplace = req.body.rplace;
  //console.log(rplace);
});
app.post("/addreview", function (req, res) {
  var db_config = require("./database.js");
  var conn = db_config.init();
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
  //uber2.js에서 rplace를 받아와야함

  userinput = {
    place: "",
    username: "",
    date: "",
    reviewin: "",
  };
  let uusername = req.body.username;
  let uplace = rplace;
  let ureview = req.body.innertext;
  let udate = year + "." + month + "." + date + " " + day;
  userinput.username = uusername;
  userinput.place = uplace;
  userinput.reviewin = ureview;
  userinput.date = udate;
  //userint(userinput);
  //console.log(userinput); //유저 입력 저장(장소, 리뷰, 날짜까지)
  conn.query(
    "INSERT INTO review(place,username,date,reviewin) VALUES(?,?,?,?)",
    [uplace, uusername, udate, ureview],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        //console.log(rows.name);
      }
    }
  );
});
app.get("/bikegps", (req, res) => {
  fs.readFile("BIKEGPS.PNG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/pariscroissant", (req, res) => {
  fs.readFile("./poirec/pariscroissant.jpg", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa1", (req, res) => {
  fs.readFile("./송파따릉이/송파1.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa1", (req, res) => {
  fs.readFile("./송파따릉이/송파1.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa2", (req, res) => {
  fs.readFile("./송파따릉이/송파2.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa3", (req, res) => {
  fs.readFile("./송파따릉이/송파3.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa4", (req, res) => {
  fs.readFile("./송파따릉이/송파4.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa5", (req, res) => {
  fs.readFile("./송파따릉이/송파5.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa6", (req, res) => {
  fs.readFile("./송파따릉이/송파6.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa7", (req, res) => {
  fs.readFile("./송파따릉이/송파7.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa8", (req, res) => {
  fs.readFile("./송파따릉이/송파8.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa9", (req, res) => {
  fs.readFile("./송파따릉이/송파9.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa10", (req, res) => {
  fs.readFile("./송파따릉이/송파10.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa11", (req, res) => {
  fs.readFile("./송파따릉이/송파11.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa12", (req, res) => {
  fs.readFile("./송파따릉이/송파12.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa13", (req, res) => {
  fs.readFile("./송파따릉이/송파13.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa14", (req, res) => {
  fs.readFile("./송파따릉이/송파14.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa15", (req, res) => {
  fs.readFile("./송파따릉이/송파15.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa16", (req, res) => {
  fs.readFile("./송파따릉이/송파16.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa17", (req, res) => {
  fs.readFile("./송파따릉이/송파17.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa18", (req, res) => {
  fs.readFile("./송파따릉이/송파18.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa19", (req, res) => {
  fs.readFile("./송파따릉이/송파19.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa20", (req, res) => {
  fs.readFile("./송파따릉이/송파20.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa21", (req, res) => {
  fs.readFile("./송파따릉이/송파21.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa22", (req, res) => {
  fs.readFile("./송파따릉이/송파22.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa23", (req, res) => {
  fs.readFile("./송파따릉이/송파23.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa24", (req, res) => {
  fs.readFile("./송파따릉이/송파24.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa25", (req, res) => {
  fs.readFile("./송파따릉이/송파25.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa26", (req, res) => {
  fs.readFile("./송파따릉이/송파26.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa27", (req, res) => {
  fs.readFile("./송파따릉이/송파27.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa28", (req, res) => {
  fs.readFile("./송파따릉이/송파28.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa29", (req, res) => {
  fs.readFile("./송파따릉이/송파29.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/songpa30", (req, res) => {
  fs.readFile("./송파따릉이/송파30.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(80, function () {
  console.log("서버시작");
});
