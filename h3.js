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
app.get("/frdbs", (req, res) => {
  var db_config = require("./database.js");
  var conn = db_config.init();
  conn.query("SELECT * FROM `freereview`", function (error, results, fields) {
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

app.post("/rplaces", function (req, res) {
  //console.log(req.body.rplace);
  rplace = req.body.rplace;
  //console.log(rplace);
});
app.post("/freereview", function (req, res) {
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
    username: "",
    date: "",
    reviewin: "",
  };
  let uusername = req.body.username;
  let ureview = req.body.innertext;
  let udate = year + "." + month + "." + date + " " + day;
  userinput.username = uusername;
  userinput.reviewin = ureview;
  userinput.date = udate;
  //userint(userinput);
  //console.log(userinput); //유저 입력 저장(장소, 리뷰, 날짜까지)
  conn.query(
    "INSERT INTO freereview(username,date,reviewin) VALUES(?,?,?)",
    [uusername, udate, ureview],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        //console.log(rows.name);
      }
    }
  );
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
app.get("/gangseo1", (req, res) => {
  fs.readFile("./강서따릉이/강서1.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo2", (req, res) => {
  fs.readFile("./강서따릉이/강서2.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo3", (req, res) => {
  fs.readFile("./강서따릉이/강서3.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo4", (req, res) => {
  fs.readFile("./강서따릉이/강서4.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo5", (req, res) => {
  fs.readFile("./강서따릉이/강서5.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo6", (req, res) => {
  fs.readFile("./강서따릉이/강서6.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo7", (req, res) => {
  fs.readFile("./강서따릉이/강서7.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo8", (req, res) => {
  fs.readFile("./강서따릉이/강서8.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo9", (req, res) => {
  fs.readFile("./강서따릉이/강서9.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo10", (req, res) => {
  fs.readFile("./강서따릉이/강서10.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo11", (req, res) => {
  fs.readFile("./강서따릉이/강서11.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo12", (req, res) => {
  fs.readFile("./강서따릉이/강서12.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo13", (req, res) => {
  fs.readFile("./강서따릉이/강서13.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo14", (req, res) => {
  fs.readFile("./강서따릉이/강서14.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo15", (req, res) => {
  fs.readFile("./강서따릉이/강서15.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo16", (req, res) => {
  fs.readFile("./강서따릉이/강서16.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo17", (req, res) => {
  fs.readFile("./강서따릉이/강서17.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo18", (req, res) => {
  fs.readFile("./강서따릉이/강서18.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo19", (req, res) => {
  fs.readFile("./강서따릉이/강서19.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo20", (req, res) => {
  fs.readFile("./강서따릉이/강서20.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo21", (req, res) => {
  fs.readFile("./강서따릉이/강서21.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo22", (req, res) => {
  fs.readFile("./강서따릉이/강서22.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo23", (req, res) => {
  fs.readFile("./강서따릉이/강서23.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo24", (req, res) => {
  fs.readFile("./강서따릉이/강서24.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo25", (req, res) => {
  fs.readFile("./강서따릉이/강서25.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo26", (req, res) => {
  fs.readFile("./강서따릉이/강서26.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo27", (req, res) => {
  fs.readFile("./강서따릉이/강서27.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo28", (req, res) => {
  fs.readFile("./강서따릉이/강서28.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo29", (req, res) => {
  fs.readFile("./강서따릉이/강서29.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/gangseo30", (req, res) => {
  fs.readFile("./강서따릉이/강서30.png", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all1", (req, res) => {
  fs.readFile("./전체따릉이/전체1.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all2", (req, res) => {
  fs.readFile("./전체따릉이/전체2.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all3", (req, res) => {
  fs.readFile("./전체따릉이/전체3.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all4", (req, res) => {
  fs.readFile("./전체따릉이/전체4.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all5", (req, res) => {
  fs.readFile("./전체따릉이/전체5.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all6", (req, res) => {
  fs.readFile("./전체따릉이/전체6.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all7", (req, res) => {
  fs.readFile("./전체따릉이/전체7.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all8", (req, res) => {
  fs.readFile("./전체따릉이/전체8.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all9", (req, res) => {
  fs.readFile("./전체따릉이/전체9.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all10", (req, res) => {
  fs.readFile("./전체따릉이/전체10.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all11", (req, res) => {
  fs.readFile("./전체따릉이/전체11.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all12", (req, res) => {
  fs.readFile("./전체따릉이/전체12.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all13", (req, res) => {
  fs.readFile("./전체따릉이/전체13.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all14", (req, res) => {
  fs.readFile("./전체따릉이/전체14.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all15", (req, res) => {
  fs.readFile("./전체따릉이/전체15.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all16", (req, res) => {
  fs.readFile("./전체따릉이/전체16.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all17", (req, res) => {
  fs.readFile("./전체따릉이/전체17.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all18", (req, res) => {
  fs.readFile("./전체따릉이/전체18.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all19", (req, res) => {
  fs.readFile("./전체따릉이/전체19.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all20", (req, res) => {
  fs.readFile("./전체따릉이/전체20.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all21", (req, res) => {
  fs.readFile("./전체따릉이/전체21.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all22", (req, res) => {
  fs.readFile("./전체따릉이/전체22.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all23", (req, res) => {
  fs.readFile("./전체따릉이/전체23.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all24", (req, res) => {
  fs.readFile("./전체따릉이/전체24.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all25", (req, res) => {
  fs.readFile("./전체따릉이/전체25.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all26", (req, res) => {
  fs.readFile("./전체따릉이/전체26.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all27", (req, res) => {
  fs.readFile("./전체따릉이/전체27.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all28", (req, res) => {
  fs.readFile("./전체따릉이/전체28.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all29", (req, res) => {
  fs.readFile("./전체따릉이/전체29.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/all30", (req, res) => {
  fs.readFile("./전체따릉이/전체30.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa1", (req, res) => {
  fs.readFile("./머문자리송파/d-송파1.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa2", (req, res) => {
  fs.readFile("./머문자리송파/d-송파2.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa3", (req, res) => {
  fs.readFile("./머문자리송파/d-송파3.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa4", (req, res) => {
  fs.readFile("./머문자리송파/d-송파4.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa5", (req, res) => {
  fs.readFile("./머문자리송파/d-송파5.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa6", (req, res) => {
  fs.readFile("./머문자리송파/d-송파6.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa7", (req, res) => {
  fs.readFile("./머문자리송파/d-송파7.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa8", (req, res) => {
  fs.readFile("./머문자리송파/d-송파8.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa9", (req, res) => {
  fs.readFile("./머문자리송파/d-송파9.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa10", (req, res) => {
  fs.readFile("./머문자리송파/d-송파10.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa11", (req, res) => {
  fs.readFile("./머문자리송파/d-송파11.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa12", (req, res) => {
  fs.readFile("./머문자리송파/d-송파12.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa13", (req, res) => {
  fs.readFile("./머문자리송파/d-송파13.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa14", (req, res) => {
  fs.readFile("./머문자리송파/d-송파14.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/d-songpa15", (req, res) => {
  fs.readFile("./머문자리송파/d-송파15.JPG", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
app.get("/map3dmap", (req, res) => {
  fs.readFile("./seoul_bike_h3_11.html", (err, data) => {
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
