function frhis() {
  //데이터베이스 새로고침

  setTimeout(() => {
    $.ajax({
      url: "frdbs",
      dataType: "json",
    }).done(function (result) {
      d3.selectAll("#frtable>*").remove(); //ifa초기화//ifa에 리뷰 넣겠습니다.
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
function frtablemaker(rusername, rdate, rreviewin) {
  var adiv = document.createElement("div");
  adiv.setAttribute("class", "adiv");
  adiv.setAttribute("id", "adiv");

  for (let i = rusername.length - 1; i >= 0; i--) {
    //최신순
    let uuser = document.createElement("tr");
    //게시글 번호
    let num = document.createElement("th");
    num.setAttribute("scope", "row");
    num.innerHTML = rusername.length - i;
    //게시글
    let frin = document.createElement("td");
    frin.innerHTML = rreviewin[i];
    //게시자
    let uusername = document.createElement("td");
    uusername.innerHTML = rusername[i];
    //날짜
    let uudate = document.createElement("td");
    uudate.innerHTML = rdate[i];

    uuser.appendChild(num);
    uuser.appendChild(frin);
    uuser.appendChild(uusername);
    uuser.appendChild(uudate);
    document.getElementById("frtable").appendChild(uuser);
  }
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
