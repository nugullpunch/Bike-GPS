//freenote에 대한 js

function frhis() {
  //데이터베이스 새로고침

  setTimeout(() => {
    $.ajax({
      url: "frdbs",
      dataType: "json",
    }).done(function (result) {
      d3.selectAll("#adiv>*").remove(); //ifa초기화//ifa에 리뷰 넣겠습니다.
      username = [];
      date = [];
      reviewin = [];
      jsonRepository = result;
      //console.log(result);
      for (var i = 0; i < jsonRepository.length; i++) {
        username.push(jsonRepository[i]["username"]);
        date.push(jsonRepository[i]["date"]);
        reviewin.push(jsonRepository[i]["reviewin"]);
      }
      frtablemaker(username, date, reviewin);
      //console.log(username);
    }, 0);
  }, 1000);
  //ifa
}
// $("#pagination-demo").twbsPagination({
//     totalPages: (username.length - 1) / 10 + 1,
//     visiblePages: 3,
//     onPageClick: function (event, page) {
//       //10개단위
//       for (let i = 0; i++; i < totalPages)
//         $("#page-content").text("Page " + page);
//     },
//   });
