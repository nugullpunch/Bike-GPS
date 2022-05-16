var jsonRepository = {};

var place = [];
var username = [];
var date = [];
var reviewin = [];
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
    place.push(jsonRepository[i]["place"]);
    username.push(jsonRepository[i]["username"]);
    date.push(jsonRepository[i]["date"]);
    reviewin.push(jsonRepository[i]["reviewin"]);
  }
  // console.log(place);
  // console.log(username);
  // console.log(date);
  // console.log(reviewin);
}
