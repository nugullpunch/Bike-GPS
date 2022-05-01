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
