//&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse

function poidlocmoim() {
  (async () => {
    const NodeList = document.getElementsByName("options");

    NodeList.forEach((node) => {
      if (node.checked) {
        if (node.id == "poi") {
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/1_16494840562800/1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>iframe").attr("src", src); //src를 바꿔버리겠다.
        } else if (node.id == "dloc") {
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/shared/WSQ9TPWMH?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>iframe").attr("src", src); //src를 바꿔버리겠다.
        } else if (node.id == "moim") {
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/shared/WSQ9TPWMH?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          d3.select("#vizContainer>iframe").attr("src", src); //src를 바꿔버리겠다.
        }
      }
    });
  })();
}
const inputreview = () => {
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
  let uplace = document.getElementById("username").value;
  let ureview = document.getElementById("innertext").value;
  let udate = year + "." + month + "." + date + " " + day;
  userinput.place = uplace;
  userinput.review = ureview;
  userinput.date = udate;
  userint(userinput);
};
function userint(userinputs) {
  //node로 보내서 데이터베이스에 post할 것임
  let socket = io();
  socket.emit("uinput", userinputs);
}
