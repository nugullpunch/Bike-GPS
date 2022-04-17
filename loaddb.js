var jsonRepository = {};

var id = [];
var pw = [];
//json으로 받아오기
$.ajax({
  url: "dbs",
  dataType: "json",
}).done(function (result) {
  jsonRepository = result;
  splitData();
});

function splitData() {
  for (var i = 0; i < jsonRepository.length; i++) {
    id.push(jsonRepository[i]["place"]);
    pw.push(jsonRepository[i]["PW"]);
  }
  console.log(id);
}
