var jsonRepository = {};

var id = [];
var pw = [];

$.ajax({
  url: "dbs",
  dataType: "json",
}).done(function (result) {
  jsonRepository = result;
  splitData();
});

function splitData() {
  for (var i = 0; i < jsonRepository.length; i++) {
    id.push(jsonRepository[i]["ID"]);
    pw.push(jsonRepository[i]["PW"]);
    console.log(id);
  }
}
