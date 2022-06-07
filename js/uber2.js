//&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse
var ioid = "전체구"; //어떤 id에 접근했었는지 표시하기위한 ioid, 아래에서 값 선언될 것임.
function poidlocmoim() {
  (async () => {
    const NodeList = document.getElementsByName("options");

    NodeList.forEach((node) => {
      if (node.checked && ioid == "전체구") {
        //ioid가 전체구일 때
        if (node.id == "poi") {
          //poi지점 파악
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/200_16538982504110/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
          d3.select("dirbutton").style("visibility", "visible");
        } else if (node.id == "dloc") {
          //대여소위치파악
          console.log(ioid);
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("장소를 선택해주십시오.");
          dloc = document.getElementById("dloc");
          dloc.checked = false;
        } else if (node.id == "moim") {
          //전체구 스트리트뷰는 없습니다.
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("전체구에는 스트리트뷰가 없습니다.");
          moim = document.getElementById("moim");
          moim.checked = false;
        }
      }

      if (node.checked && ioid == "강서구") {
        //ioid가 강서구일 때
        if (node.id == "poi") {
          //poi지점 파악
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/gangseo/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
          d3.select("dirbutton").style("visibility", "visible");
        } else if (node.id == "dloc") {
          //대여소위치파악
          console.log(ioid);
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/gangseo/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("장소를 선택해주십시오.");
          dloc = document.getElementById("dloc");
          dloc.checked = false;
        } else if (node.id == "moim") {
          //강서구 전체 스트리트뷰는 없습니다.
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/gangseo/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("강서구 전체는 스트리트뷰가 없습니다.");
          moim = document.getElementById("moim");
          moim.checked = false;
        }
      }

      if (node.checked && ioid == "송파구") {
        //ioid가 송파구일 때
        if (node.id == "poi") {
          //poi지점 파악
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/songpa/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
          d3.select("dirbutton").style("visibility", "visible");
        } else if (node.id == "dloc") {
          //대여소위치파악
          console.log(ioid);
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/songpa/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("장소를 선택해주십시오.");
          dloc = document.getElementById("dloc");
          dloc.checked = false;
        } else if (node.id == "moim") {
          //송파구 전체 스트리트뷰는 없습니다.
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/songpa/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("송파구 전체는 스트리트뷰가 없습니다.");
          moim = document.getElementById("moim");
          moim.checked = false;
        }
      }

      if (node.checked && ioid == "all-rank1") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          src =
            " https://public.tableau.com/views/3_16540483623260/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
          d3.select("dirbutton").style("visibility", "visible");
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
          d3.select("dirbutton").style("visibility", "hidden");
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155452732!6m8!1m7!1sCAoSLEFGMVFpcE9yLVNfdFROTkdsUzFGNDAtYmQtenc2MmZDNUdfOVJ5aVd5bVoy!2m2!1d37.51667286888663!2d127.1304336190224!3f327.1603003870117!4f-14.357186019412126!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
          d3.select("dirbutton").style("visibility", "hidden");
        }
      }

      if (node.checked && ioid == "all-rank2") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/GS254/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
          d3.select("dirbutton").style("visibility", "visible");
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all2"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155559140!6m8!1m7!1sCAoSLEFGMVFpcE02czN4WXYycG55TnhPTUNGOHlnUGNhNWhrYXFUYmpFakNMdHE1!2m2!1d37.5183667!2d127.0787167!3f316.59109195209817!4f-1.1039310801823063!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank3") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540166157120/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all3"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075234391!6m8!1m7!1sCAoSK0FGMVFpcE5DLXotRjh5eHBHV20yZ2lFYVN4WU9rRUVnRWVIQ2hraG5aSW8.!2m2!1d37.5538853!2d126.8779857!3f221.8432973831338!4f-0.23894997855377653!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank4") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540484199620/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all4"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155665501!6m8!1m7!1sCAoSLEFGMVFpcE4tTnB6VDlwZ1hqVXlxYkpvdlRYS21ONVFNa2tTWWNzRS1pYk5S!2m2!1d37.5201254!2d127.0928922!3f139.92273706067104!4f7.450771241416959!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank5") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540167545260/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all5"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652152791452!6m8!1m7!1sCAoSLEFGMVFpcE54ZnJVLVp1ZW1JZ01PRlNtR1BCMnpzcy1HNFJ4cHhEWDJzbTQ0!2m2!1d37.5537872!2d126.8784714!3f346.94741410789743!4f16.002057422034866!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank6") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/67_16540168524010/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all6"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075497320!6m8!1m7!1sUxAh7ZasX4WkCQ9RZZ7HIw!2m2!1d37.55834714693819!2d126.8382584549478!3f60.95520753567095!4f0!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank7") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540484467760/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all7"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155763975!6m8!1m7!1sCAoSLEFGMVFpcE80Y2VNbEhubmhkREhwMEZOeXN0dHJLenJXWl9RcWkzSEotTnBn!2m2!1d37.5182253!2d127.0825562!3f309.64882691791195!4f-9.27451172418644!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank8") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540484760320/200?:language=ko-KR&puGS25%202%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all8"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155848142!6m8!1m7!1sCAoSLEFGMVFpcFBaSmdfMDFuaHhhZWk5VUVRb052RC1nTkZPSkxId2pTVlNaTjRm!2m2!1d37.520147!2d127.095065!3f169.1727372259016!4f1.1775310793919402!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank9") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/GS252/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all9"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155913251!6m8!1m7!1sCAoSLEFGMVFpcFAyTUdFUzcwWlhWQWRObkVfajNSNDNJVXY3YUtreF95cjBGd3Y4!2m2!1d37.5189063!2d127.0901191!3f260.5902140979646!4f-1.0384962521020924!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank10") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540485343840/200?:language=ko-KR&pu%201%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all10"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156031618!6m8!1m7!1sCAoSLEFGMVFpcE5SaXlDa29VMHZyYS03cEtsQkp4M0N3MDdISTJESEJTTjRRdnpY!2m2!1d37.5185005!2d127.1160245!3f263.96126336634643!4f4.509021534106253!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank11") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/1_16540485617570/200?:language=ko-KR&p%202ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all11"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156097579!6m8!1m7!1sCAoSK0FGMVFpcE5tQ2Q5aUphaWpyR1hoc1JNZXpxbXBZRTJ3TV8wc2pCN1o1OVk.!2m2!1d37.5202364!2d127.093248!3f136.9991447369587!4f7.039622688159525!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank12") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/2_16540485900300/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all12"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156146139!6m8!1m7!1sCAoSLEFGMVFpcE1JTnl2TkxCVmU0ZFhQQzc2MmxmLURtUmFPenU2V1ZmTGQtOXlT!2m2!1d37.5131406!2d127.1009613!3f155.43369406434385!4f5.944437322553995!5f2.231829461644798"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank13") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540175631880/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all13"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075547556!6m8!1m7!1sCAoSLEFGMVFpcE54ZnJVLVp1ZW1JZ01PRlNtR1BCMnpzcy1HNFJ4cHhEWDJzbTQ0!2m2!1d37.5537872!2d126.8784714!3f232.9704386214857!4f11.935321121067474!5f0.4000000000000002"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank14") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/7_16540176878250/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all14"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075673647!6m8!1m7!1sCAoSLEFGMVFpcE04bUdVQlc3NzZMN3h0eVVQWDFJc2IwemFyLXVUQWtvRWZHaS1F!2m2!1d37.5416637!2d126.8401462!3f233.918848123798!4f-13.093935453385484!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank15") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540486202460/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all15"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156203850!6m8!1m7!1sCAoSLEFGMVFpcE5SaXlDa29VMHZyYS03cEtsQkp4M0N3MDdISTJESEJTTjRRdnpY!2m2!1d37.5185005!2d127.1160245!3f158.7093497908907!4f12.572223020145358!5f1.4641028750119456"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank16") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540486480310/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all16"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157445574!6m8!1m7!1sCAoSLEFGMVFpcE9yV3ZHY2xYTWlYSG13bGtnYTNyaVc2QTRJcXBzNUV5R1JxUUQ2!2m2!1d37.5178807!2d127.1138942!3f77.87278735561328!4f-16.403499626427575!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank17") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/9_16540177615100/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all17"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075767718!6m8!1m7!1sCAoSLEFGMVFpcE9tTnpqVEdrd3o3Y3R2RXVMTkNGS3NfemZ4Q2RlUllfLUF2Zldj!2m2!1d37.5611109!2d126.8548278!3f289.5282196851538!4f2.1517815805488993!5f2.8211304365564676"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank18") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540549357620/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all18"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075908654!6m8!1m7!1sMJ-q0q-SxcY7uhW5owO7Hg!2m2!1d37.55957302326951!2d126.8265787678977!3f67.44077263925323!4f-9.076495976433122!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank19") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540486759560/200?:language=ko-KR&pu%207,8%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all19"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156360440!6m8!1m7!1sCAoSLEFGMVFpcE5BbWgtQldBV2JKUlAtOTRzc0hsRTNaRFpwUTczT1N3eU1VUjRG!2m2!1d37.5186944!2d127.1168056!3f12.392319737382138!4f-3.6282875507770314!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank20") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/78_16540487057420/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all20"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156409763!6m8!1m7!1sqR8dVLomQabj4daxLC3Phg!2m2!1d37.51364403704354!2d127.1003325895722!3f7.271692057590924!4f9.020157888034078!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank21") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540487327900/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all21"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156681280!6m8!1m7!1sxjC-aJ5FjUtM6il0X1rVjQ!2m2!1d37.50504979022629!2d127.1072075280316!3f312.3564099849759!4f3.0908305149485216!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank22") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/NC_16540179172370/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all22"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076008141!6m8!1m7!1s4X5RnSn-fpCzwzZfe6T8tQ!2m2!1d37.56031276743067!2d126.8398303723659!3f115.52305027621088!4f20.30292136096709!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank23") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/NC_16540179172370/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all23"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076105113!6m8!1m7!1sXM3FNZid3WReZWITgSd5nA!2m2!1d37.55954181381908!2d126.8399129051112!3f92.90421613604627!4f2.743358925711078!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank24") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540217790770/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all24"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076250354!6m8!1m7!1s97kvPZdqpBq-xyiRA1C2_Q!2m2!1d37.56456855539368!2d126.8488435517748!3f88.23718881541137!4f0!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank25") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540218080230/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all25"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076320090!6m8!1m7!1sLbens3X0FnzdWYWY_DETdA!2m2!1d37.56864305362241!2d126.8539156902123!3f15.3821668870265!4f-3.7946945727414487!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank26") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540218372420/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all26"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076435761!6m8!1m7!1sCAoSLEFGMVFpcE9hblFuMVlsbTU4eXJNa3R1OTNVcG0zTDdmQTFkNWpQZHVMVVI3!2m2!1d37.56971559999999!2d126.8523693!3f218.01241959583228!4f2.2793801850619104!5f0.4000000000000002"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank27") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/1_16540218655130/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all27"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076549497!6m8!1m7!1seoWxpvvx0QSLcRNYUboJ9Q!2m2!1d37.5588772524362!2d126.8375714029341!3f258.57511870538787!4f-5.517410004400119!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank28") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540218938270/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all28"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652082457450!6m8!1m7!1sv3qQ2-MjCnP8A_t15CtdDQ!2m2!1d37.56219471645787!2d126.8648277363736!3f42.139799930384946!4f-16.208088602375568!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank29") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/_16540487625730/200?:language=ko-KR&pu%2010blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all29"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156711624!6m8!1m7!1sePVHuAWcxyb5lRaGCcc4qQ!2m2!1d37.51299972752673!2d127.1001528909275!3f56.28475365608291!4f3.5872884255941244!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "all-rank30") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/10_16540487908030/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "all30"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156767429!6m8!1m7!1sCAoSLEFGMVFpcFA4bEhNS1BiWFd3WU5QODVaMHNLZnJfRm5Lcm1qRWFQekVfREQ2!2m2!1d37.5147296!2d127.1049978!3f112.73765540247217!4f26.54743918417398!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank1") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540166157120/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155452732!6m8!1m7!1sCAoSLEFGMVFpcE9yLVNfdFROTkdsUzFGNDAtYmQtenc2MmZDNUdfOVJ5aVd5bVoy!2m2!1d37.51667286888663!2d127.1304336190224!3f327.1603003870117!4f-14.357186019412126!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank2") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540167545260/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo2"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155559140!6m8!1m7!1sCAoSLEFGMVFpcE02czN4WXYycG55TnhPTUNGOHlnUGNhNWhrYXFUYmpFakNMdHE1!2m2!1d37.5183667!2d127.0787167!3f316.59109195209817!4f-1.1039310801823063!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank3") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/67_16540168524010/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo3"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155665501!6m8!1m7!1sCAoSLEFGMVFpcE4tTnB6VDlwZ1hqVXlxYkpvdlRYS21ONVFNa2tTWWNzRS1pYk5S!2m2!1d37.5201254!2d127.0928922!3f139.92273706067104!4f7.450771241416959!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank4") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540175631880/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo4"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155763975!6m8!1m7!1sCAoSLEFGMVFpcE80Y2VNbEhubmhkREhwMEZOeXN0dHJLenJXWl9RcWkzSEotTnBn!2m2!1d37.5182253!2d127.0825562!3f309.64882691791195!4f-9.27451172418644!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank5") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/7_16540176878250/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo5"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155848142!6m8!1m7!1sCAoSLEFGMVFpcFBaSmdfMDFuaHhhZWk5VUVRb052RC1nTkZPSkxId2pTVlNaTjRm!2m2!1d37.520147!2d127.095065!3f169.1727372259016!4f1.1775310793919402!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank6") {
        if (node.id == "poi") {
          //public.tableau.com/views/9_16540177615100/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          https: maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo6"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155913251!6m8!1m7!1sCAoSLEFGMVFpcFAyTUdFUzcwWlhWQWRObkVfajNSNDNJVXY3YUtreF95cjBGd3Y4!2m2!1d37.5189063!2d127.0901191!3f260.5902140979646!4f-1.0384962521020924!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank7") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540549357620/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo7"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156031618!6m8!1m7!1sCAoSLEFGMVFpcE5SaXlDa29VMHZyYS03cEtsQkp4M0N3MDdISTJESEJTTjRRdnpY!2m2!1d37.5185005!2d127.1160245!3f263.96126336634643!4f4.509021534106253!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank8") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/NC_16540179172370/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo8"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156097579!6m8!1m7!1sCAoSK0FGMVFpcE5tQ2Q5aUphaWpyR1hoc1JNZXpxbXBZRTJ3TV8wc2pCN1o1OVk.!2m2!1d37.5202364!2d127.093248!3f136.9991447369587!4f7.039622688159525!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank9") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/NC_16540217492700/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo9"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156146139!6m8!1m7!1sCAoSLEFGMVFpcE1JTnl2TkxCVmU0ZFhQQzc2MmxmLURtUmFPenU2V1ZmTGQtOXlT!2m2!1d37.5131406!2d127.1009613!3f155.43369406434385!4f5.944437322553995!5f2.231829461644798"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank10") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540217790770/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo10"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156203850!6m8!1m7!1sCAoSLEFGMVFpcE5SaXlDa29VMHZyYS03cEtsQkp4M0N3MDdISTJESEJTTjRRdnpY!2m2!1d37.5185005!2d127.1160245!3f158.7093497908907!4f12.572223020145358!5f1.4641028750119456"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank11") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540218080230/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo11"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157445574!6m8!1m7!1sCAoSLEFGMVFpcE9yV3ZHY2xYTWlYSG13bGtnYTNyaVc2QTRJcXBzNUV5R1JxUUQ2!2m2!1d37.5178807!2d127.1138942!3f77.87278735561328!4f-16.403499626427575!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank12") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540218372420/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo12"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156360440!6m8!1m7!1sCAoSLEFGMVFpcE5BbWgtQldBV2JKUlAtOTRzc0hsRTNaRFpwUTczT1N3eU1VUjRG!2m2!1d37.5186944!2d127.1168056!3f12.392319737382138!4f-3.6282875507770314!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank13") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/1_16540218655130/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo13"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156409763!6m8!1m7!1sqR8dVLomQabj4daxLC3Phg!2m2!1d37.51364403704354!2d127.1003325895722!3f7.271692057590924!4f9.020157888034078!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank14") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540218938270/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo14"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156681280!6m8!1m7!1sxjC-aJ5FjUtM6il0X1rVjQ!2m2!1d37.50504979022629!2d127.1072075280316!3f312.3564099849759!4f3.0908305149485216!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank15") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/LG_16540219223590/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo15"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156711624!6m8!1m7!1sePVHuAWcxyb5lRaGCcc4qQ!2m2!1d37.51299972752673!2d127.1001528909275!3f56.28475365608291!4f3.5872884255941244!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank16") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/3_16540219517500/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo16"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156767429!6m8!1m7!1sCAoSLEFGMVFpcFA4bEhNS1BiWFd3WU5QODVaMHNLZnJfRm5Lcm1qRWFQekVfREQ2!2m2!1d37.5147296!2d127.1049978!3f112.73765540247217!4f26.54743918417398!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank17") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540219797520/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo17"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156839444!6m8!1m7!1sgyniRXn1S8T5Lm0R3cFZsg!2m2!1d37.51546707459184!2d127.1067940797205!3f128.69198365039313!4f21.509470300652964!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank18") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540220087340/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo18"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156969946!6m8!1m7!1suTys6Af3Oxk_IyF2yRo73A!2m2!1d37.51715848516792!2d127.0907602338484!3f328.4021760219041!4f-2.851289524199359!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank19") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540220373640/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo19"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157073542!6m8!1m7!1sCAoSLEFGMVFpcFAyTUdFUzcwWlhWQWRObkVfajNSNDNJVXY3YUtreF95cjBGd3Y4!2m2!1d37.5189063!2d127.0901191!3f28.60393197494667!4f2.956518037238638!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank20") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540220654850/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo20"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157150800!6m8!1m7!1sCAoSLEFGMVFpcE5JX19TbGRXLWI5QUxKcHNuUWt1S2g3VGpvSTRwTVkzZ2JWMkdW!2m2!1d37.5182735026312!2d127.1266087889671!3f123.3748425973687!4f11.771627774238809!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank21") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540220941170/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo21"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157189271!6m8!1m7!1sjHjBNE0y0lGAOnu8rhzMZw!2m2!1d37.5236841421766!2d127.1276711255565!3f304.2116549001576!4f-3.1108852106712988!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank22") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/2_16540221225840/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo22"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157341920!6m8!1m7!1s28ot_yVodVrUAdJ27YToMA!2m2!1d37.51422698281514!2d127.1073007233568!3f85.32893482017236!4f16.718794091753523!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank23") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540221519970/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo23"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156299857!6m8!1m7!1sCAoSLEFGMVFpcE1wbmdqY2tFcmtScjRIOVlFOWRnS0FBMVlESTBUeHNvbHRkLVpy!2m2!1d37.51784!2d127.1135108!3f262.29281744348305!4f-1.6728893012544006!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank24") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540221807180/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo24"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157546421!6m8!1m7!1sDYb-WdjYelOVX5mPT-8dVQ!2m2!1d37.51191585471826!2d127.1080336811777!3f64.8038864829905!4f5.688478060387922!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank25") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/1_16540222087740/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo25"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157600247!6m8!1m7!1ssdp6OUvLmnV4K71ntl5sgQ!2m2!1d37.51175305953766!2d127.0786034156057!3f346.39187719603376!4f3.470029698741797!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank26") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540222372560/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo26"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157673861!6m8!1m7!1sDAvI95Rj8w2fBFqUeMqLqA!2m2!1d37.51643540362866!2d127.1161462052624!3f6.399629809263789!4f-4.627083062479812!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank27") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/6_16540222653000/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo27"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157779886!6m8!1m7!1sCAoSLEFGMVFpcE9pSlJ3T0xqYk1HQVFiUEZNVzhnUHVLNkFMVlBsM2JwS2dqYTBU!2m2!1d37.5183314!2d127.0795382!3f329.39253738990374!4f-1.7107209498328473!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank28") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540222940490/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo28"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157844593!6m8!1m7!1s3Jmg8Zw9PWi0itiUpDkjhg!2m2!1d37.50869113459148!2d127.1042290600644!3f326.11830737715917!4f6.800813921813884!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank29") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540223227630/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo29"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157966267!6m8!1m7!1s4DkQvbHZrfsmbI-uirWXlA!2m2!1d37.50619382908882!2d127.1089622637657!3f14.484547233499377!4f-2.4287962023614966!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "gangseo-rank30") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540474415680/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "gangseo30"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652084313140!6m8!1m7!1s6ubf6nrHNQc3UkIjbsS8JA!2m2!1d37.51152577003203!2d127.0859773056641!3f192.65278558878884!4f-11.549048139179177!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank1") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/3_16540483623260/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155452732!6m8!1m7!1sCAoSLEFGMVFpcE9yLVNfdFROTkdsUzFGNDAtYmQtenc2MmZDNUdfOVJ5aVd5bVoy!2m2!1d37.51667286888663!2d127.1304336190224!3f327.1603003870117!4f-14.357186019412126!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank2") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/GS254/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa2"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155559140!6m8!1m7!1sCAoSLEFGMVFpcE02czN4WXYycG55TnhPTUNGOHlnUGNhNWhrYXFUYmpFakNMdHE1!2m2!1d37.5183667!2d127.0787167!3f316.59109195209817!4f-1.1039310801823063!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank3") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540484199620/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa3"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155665501!6m8!1m7!1sCAoSLEFGMVFpcE4tTnB6VDlwZ1hqVXlxYkpvdlRYS21ONVFNa2tTWWNzRS1pYk5S!2m2!1d37.5201254!2d127.0928922!3f139.92273706067104!4f7.450771241416959!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank4") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540484467760/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa4"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155763975!6m8!1m7!1sCAoSLEFGMVFpcE80Y2VNbEhubmhkREhwMEZOeXN0dHJLenJXWl9RcWkzSEotTnBn!2m2!1d37.5182253!2d127.0825562!3f309.64882691791195!4f-9.27451172418644!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank5") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540484760320/200?:language=ko-KR&puGS25%202%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa5"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155848142!6m8!1m7!1sCAoSLEFGMVFpcFBaSmdfMDFuaHhhZWk5VUVRb052RC1nTkZPSkxId2pTVlNaTjRm!2m2!1d37.520147!2d127.095065!3f169.1727372259016!4f1.1775310793919402!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank6") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/GS252/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa6"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652155913251!6m8!1m7!1sCAoSLEFGMVFpcFAyTUdFUzcwWlhWQWRObkVfajNSNDNJVXY3YUtreF95cjBGd3Y4!2m2!1d37.5189063!2d127.0901191!3f260.5902140979646!4f-1.0384962521020924!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank7") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540485343840/200?:language=ko-KR&pu%201%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa7"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156031618!6m8!1m7!1sCAoSLEFGMVFpcE5SaXlDa29VMHZyYS03cEtsQkp4M0N3MDdISTJESEJTTjRRdnpY!2m2!1d37.5185005!2d127.1160245!3f263.96126336634643!4f4.509021534106253!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank8") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/1_16540485617570/200?:language=ko-KR&p%202ublish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa8"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156097579!6m8!1m7!1sCAoSK0FGMVFpcE5tQ2Q5aUphaWpyR1hoc1JNZXpxbXBZRTJ3TV8wc2pCN1o1OVk.!2m2!1d37.5202364!2d127.093248!3f136.9991447369587!4f7.039622688159525!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank9") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/2_16540485900300/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa9"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156146139!6m8!1m7!1sCAoSLEFGMVFpcE1JTnl2TkxCVmU0ZFhQQzc2MmxmLURtUmFPenU2V1ZmTGQtOXlT!2m2!1d37.5131406!2d127.1009613!3f155.43369406434385!4f5.944437322553995!5f2.231829461644798"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank10") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540486202460/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa10"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156203850!6m8!1m7!1sCAoSLEFGMVFpcE5SaXlDa29VMHZyYS03cEtsQkp4M0N3MDdISTJESEJTTjRRdnpY!2m2!1d37.5185005!2d127.1160245!3f158.7093497908907!4f12.572223020145358!5f1.4641028750119456"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank11") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540486480310/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa11"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157445574!6m8!1m7!1sCAoSLEFGMVFpcE9yV3ZHY2xYTWlYSG13bGtnYTNyaVc2QTRJcXBzNUV5R1JxUUQ2!2m2!1d37.5178807!2d127.1138942!3f77.87278735561328!4f-16.403499626427575!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank12") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540486759560/200?:language=ko-KR&pu%207,8%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa12"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156360440!6m8!1m7!1sCAoSLEFGMVFpcE5BbWgtQldBV2JKUlAtOTRzc0hsRTNaRFpwUTczT1N3eU1VUjRG!2m2!1d37.5186944!2d127.1168056!3f12.392319737382138!4f-3.6282875507770314!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank13") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/78_16540487057420/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa13"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156409763!6m8!1m7!1sqR8dVLomQabj4daxLC3Phg!2m2!1d37.51364403704354!2d127.1003325895722!3f7.271692057590924!4f9.020157888034078!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank14") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540487327900/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa14"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156681280!6m8!1m7!1sxjC-aJ5FjUtM6il0X1rVjQ!2m2!1d37.50504979022629!2d127.1072075280316!3f312.3564099849759!4f3.0908305149485216!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank15") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540487625730/200?:language=ko-KR&pu%2010blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa15"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156711624!6m8!1m7!1sePVHuAWcxyb5lRaGCcc4qQ!2m2!1d37.51299972752673!2d127.1001528909275!3f56.28475365608291!4f3.5872884255941244!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank16") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/10_16540487908030/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa16"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156767429!6m8!1m7!1sCAoSLEFGMVFpcFA4bEhNS1BiWFd3WU5QODVaMHNLZnJfRm5Lcm1qRWFQekVfREQ2!2m2!1d37.5147296!2d127.1049978!3f112.73765540247217!4f26.54743918417398!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank17") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540488185330/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa17"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156839444!6m8!1m7!1sgyniRXn1S8T5Lm0R3cFZsg!2m2!1d37.51546707459184!2d127.1067940797205!3f128.69198365039313!4f21.509470300652964!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank18") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540488484960/200?:language=ko-KR&pu3%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa18"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156969946!6m8!1m7!1suTys6Af3Oxk_IyF2yRo73A!2m2!1d37.51715848516792!2d127.0907602338484!3f328.4021760219041!4f-2.851289524199359!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank19") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/3_16540488777470/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa19"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157073542!6m8!1m7!1sCAoSLEFGMVFpcFAyTUdFUzcwWlhWQWRObkVfajNSNDNJVXY3YUtreF95cjBGd3Y4!2m2!1d37.5189063!2d127.0901191!3f28.60393197494667!4f2.956518037238638!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank20") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540489064520/200?:language=ko-KR&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa20"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157150800!6m8!1m7!1sCAoSLEFGMVFpcE5JX19TbGRXLWI5QUxKcHNuUWt1S2g3VGpvSTRwTVkzZ2JWMkdW!2m2!1d37.5182735026312!2d127.1266087889671!3f123.3748425973687!4f11.771627774238809!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank21") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/2_16540494220700/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa21"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157189271!6m8!1m7!1sjHjBNE0y0lGAOnu8rhzMZw!2m2!1d37.5236841421766!2d127.1276711255565!3f304.2116549001576!4f-3.1108852106712988!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank22") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540494514320/200?:language=ko-KR&pu%201blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa22"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157341920!6m8!1m7!1s28ot_yVodVrUAdJ27YToMA!2m2!1d37.51422698281514!2d127.1073007233568!3f85.32893482017236!4f16.718794091753523!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank23") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/1_16540494780530/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa23"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652156299857!6m8!1m7!1sCAoSLEFGMVFpcE1wbmdqY2tFcmtScjRIOVlFOWRnS0FBMVlESTBUeHNvbHRkLVpy!2m2!1d37.51784!2d127.1135108!3f262.29281744348305!4f-1.6728893012544006!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank24") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540495078100/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa24"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157546421!6m8!1m7!1sDYb-WdjYelOVX5mPT-8dVQ!2m2!1d37.51191585471826!2d127.1080336811777!3f64.8038864829905!4f5.688478060387922!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank25") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540495364610/200?:language=ko-KR&pu%202blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa25"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157600247!6m8!1m7!1ssdp6OUvLmnV4K71ntl5sgQ!2m2!1d37.51175305953766!2d127.0786034156057!3f346.39187719603376!4f3.470029698741797!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank26") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/2_16540495637380/200?:language=ko-KR&pGS25%201%20ublish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa26"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157673861!6m8!1m7!1sDAvI95Rj8w2fBFqUeMqLqA!2m2!1d37.51643540362866!2d127.1161462052624!3f6.399629809263789!4f-4.627083062479812!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank27") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            "https://public.tableau.com/views/GS251/200?:language=ko-KR&publish=yes%20()&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa27"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157779886!6m8!1m7!1sCAoSLEFGMVFpcE9pSlJ3T0xqYk1HQVFiUEZNVzhnUHVLNkFMVlBsM2JwS2dqYTBU!2m2!1d37.5183314!2d127.0795382!3f329.39253738990374!4f-1.7107209498328473!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank28") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540496216240/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa28"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157844593!6m8!1m7!1s3Jmg8Zw9PWi0itiUpDkjhg!2m2!1d37.50869113459148!2d127.1042290600644!3f326.11830737715917!4f6.800813921813884!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank29") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/_16540496514380/200?:language=ko-KR&pu%202blish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa29"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652157966267!6m8!1m7!1s4DkQvbHZrfsmbI-uirWXlA!2m2!1d37.50619382908882!2d127.1089622637657!3f14.484547233499377!4f-2.4287962023614966!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "songpa-rank30") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          src =
            " https://public.tableau.com/views/2_16540496800980/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악

          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa30"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652084313140!6m8!1m7!1s6ubf6nrHNQc3UkIjbsS8JA!2m2!1d37.51152577003203!2d127.0859773056641!3f192.65278558878884!4f-11.549048139179177!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank1") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/14_16540852272930/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075230210!6m8!1m7!1s47FPjt6Gm7g9pVDo9KXV2w!2m2!1d37.54413248058086!2d126.849629114405!3f67.8676585661783!4f-14.545992714647241!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank2") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540852565830/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all2"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075562969!6m8!1m7!1sDM0RwNHPxKFwrQ4P1SpEbw!2m2!1d37.54432079189784!2d126.8304197196621!3f34.849606!4f0!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank3") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540852853030/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all3"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652075734027!6m8!1m7!1s78qgqNSLQU4p3qiu1NrJYw!2m2!1d37.57400142920815!2d126.8238567817212!3f231.61018595376967!4f-11.444187171207261!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank4") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/3_16540853136890/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all4"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076088481!6m8!1m7!1slUuPOWjerhwqIi2wgv8ZsQ!2m2!1d37.59604606179397!2d126.8080561253807!3f147.30631212022234!4f-5.58392918217659!5f3.286447292694244"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank5") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540853417750/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all5"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076486568!6m8!1m7!1s5AV0_MjalkhfzdubjCni4A!2m2!1d37.55122247338193!2d126.8305025093383!3f164.67381945722383!4f8.457912458942374!5f1.4216668963788166"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank6") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/1_16540856525510/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all6"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079389080!6m8!1m7!1snCejJmE4hM4aAfSR1-zotA!2m2!1d37.4715708695983!2d127.1232927851823!3f95.04031720123298!4f7.770605458841388!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank7") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540856813430/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all7"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079389080!6m8!1m7!1snCejJmE4hM4aAfSR1-zotA!2m2!1d37.4715708695983!2d127.1232927851823!3f95.04031720123298!4f7.770605458841388!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank8") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540853703330/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all8"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076892809!6m8!1m7!1src_sesnA08iNyxAac44e_g!2m2!1d37.57711498546706!2d126.7932220777377!3f338.886913414309!4f-7.0348041492837154!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank9") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540853979560/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all9"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652076934506!6m8!1m7!1sgYV45ZIO3sU-TZSvVKchgQ!2m2!1d37.57341508104298!2d126.8301772636473!3f12.125351891227496!4f0!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank10") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/3_16540857094390/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all10"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079472420!6m8!1m7!1sFp3Xa2MC7OmRXJsC2WcFXg!2m2!1d37.51699927617588!2d127.1371002949459!3f178.65488131465295!4f-7.004184797789634!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank11") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540854269140/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all11"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652077190102!6m8!1m7!1sCAoSLEFGMVFpcE5qRmpFb3d5UEl5RUJPN3RvbFllSFQ4Wm1uTl9ONzd0anNwdzhy!2m2!1d37.54889319999999!2d126.8402105!3f305.2544321643814!4f0!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank12") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540854552790/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all12"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652077285216!6m8!1m7!1szHjS0hbU2tmQN8dTOpYR5g!2m2!1d37.5622150880634!2d126.7996561891029!3f212.52209849033244!4f7.02935605420133!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank13") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/7_16540857380940/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all13"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079620597!6m8!1m7!1sbcPVz3qbzUV4Gsgbex88mA!2m2!1d37.50815752084522!2d127.0733105154341!3f317.26003596832254!4f19.770556846110665!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank14") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540854830030/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all14"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652077490326!6m8!1m7!1spfpnxIEMohqTBif68wl-aw!2m2!1d37.54857868798399!2d126.8536334075814!3f121.37728880782299!4f8.329446351475937!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank15") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540855107660/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all15"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652077747823!6m8!1m7!1sizsHvE-EqG2__qfaUOnqsg!2m2!1d37.58368913913107!2d126.8170772946!3f349.11873972653837!4f-0.8731079100463148!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank16") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540855394490/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all16"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652077872990!6m8!1m7!1sEO9KnQ8d2TMtC3oUN2VaYQ!2m2!1d37.59715212350153!2d126.7981389620064!3f69.95162660999208!4f-3.0604511228013678!5f1.884555480020929"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank17") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/3_16540857663860/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all17"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079779815!6m8!1m7!1sefEnCjTNESD1_P-QamFALw!2m2!1d37.50818109490393!2d127.0723389897338!3f7.632363991208704!4f-8.548194348155903!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank18") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540855684680/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all18"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652078011625!6m8!1m7!1serMYK4-CecyIVJD4VGj0bA!2m2!1d37.58589681008797!2d126.8088983175839!3f208.39859443842155!4f8.851315875715727!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank19") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/12_16540855953480/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all19"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080098087!6m8!1m7!1sXdpWt8hzT5wiB51CVFI5Gg!2m2!1d37.48803402240416!2d127.136659536506!3f85.79207940264536!4f2.446846938526406!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank20") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540856247940/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all20"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652078141994!6m8!1m7!1sR2x8FgPpfoSCyK_bw_TExg!2m2!1d37.54531370390436!2d126.847741188083!3f47.7602066364889!4f-10.3228383288791!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank21") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/68_16540857941710/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all21"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080226370!6m8!1m7!1saS9GU4n6PTHvHg8MC12jzQ!2m2!1d37.48814726602655!2d127.1455362643135!3f96.02285507317086!4f-8.904757259743576!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank22") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540858225720/sheet12?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all22"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652078510509!6m8!1m7!1sBk9hWdB-Dz7qHSLoZDgC9g!2m2!1d37.55677014825617!2d126.7797320621931!3f294.7917084716014!4f-7.834341069780663!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank23") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540858500110/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all23"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080271904!6m8!1m7!1sHZPjizq3QMR2SCL76NE8RQ!2m2!1d37.49094864319247!2d127.1492816332236!3f207.97605618265584!4f-11.738333966113515!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank24") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540858791750/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all24"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080475325!6m8!1m7!1su3AhxZXS9gciQSEehk-4Uw!2m2!1d37.5124903019385!2d127.1418809894203!3f236.5369742290101!4f4.625251615538218!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank25") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540859085760/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all25"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080640160!6m8!1m7!1sAYIYXoYcUYVrNAxgFFAM2w!2m2!1d37.49443141670417!2d127.1096424312917!3f256.0149301320474!4f2.9236662441384738!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank26") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540859366950/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all26"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080789808!6m8!1m7!1sBHkKx_sk_jJYpOqRHiROjQ!2m2!1d37.52541780767211!2d127.1136362512488!3f274.2983244565495!4f-9.658268532759294!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank27") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/4105_16540859641650/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all27"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080897199!6m8!1m7!1sCAoSLEFGMVFpcE1iZE01OVNiRVdPd1N2bXd5bWlFS096b1J2bERpaFI3SVF5Zm9L!2m2!1d37.5200629!2d127.1227327!3f180.91682347874303!4f-5.480619235241264!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank28") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540859921790/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all28"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080999140!6m8!1m7!1s6AkqGIl5EVzqDcQ7h9s1HA!2m2!1d37.51643030813117!2d127.0792926265787!3f209.78391518995528!4f10.55350388499454!5f0.4000000000000002"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank29") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540860207760/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all29"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652081044090!6m8!1m7!1sJALfDqpr6UjSM5Mvct_kQw!2m2!1d37.50282420540945!2d127.0840442387265!3f271.36965918096865!4f4.602896070985935!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-all-rank30") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/_16540860487920/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-all30"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652082213286!6m8!1m7!1sOSamHyjgo7J2y21L6DdOmA!2m2!1d37.51449427518504!2d127.0899175152889!3f0.7986698450054064!4f-15.646538324395877!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank1") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/1_16540856525510/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652078808438!6m8!1m7!1sWImXEj5LMEQom7RWgvYlKw!2m2!1d37.48922150272004!2d127.1427410948038!3f245.43994462374172!4f3.8607822319240768!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank2") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540856813430/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa2"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079389080!6m8!1m7!1snCejJmE4hM4aAfSR1-zotA!2m2!1d37.4715708695983!2d127.1232927851823!3f95.04031720123298!4f7.770605458841388!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank3") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/3_16540857094390/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa3"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079472420!6m8!1m7!1sFp3Xa2MC7OmRXJsC2WcFXg!2m2!1d37.51699927617588!2d127.1371002949459!3f178.65488131465295!4f-7.004184797789634!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank4") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/7_16540857380940/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa4"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079620597!6m8!1m7!1sbcPVz3qbzUV4Gsgbex88mA!2m2!1d37.50815752084522!2d127.0733105154341!3f317.26003596832254!4f19.770556846110665!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank5") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/3_16540857663860/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa5"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079779815!6m8!1m7!1sefEnCjTNESD1_P-QamFALw!2m2!1d37.50818109490393!2d127.0723389897338!3f7.632363991208704!4f-8.548194348155903!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank6") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/68_16540857941710/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa6"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080098087!6m8!1m7!1sXdpWt8hzT5wiB51CVFI5Gg!2m2!1d37.48803402240416!2d127.136659536506!3f85.79207940264536!4f2.446846938526406!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank7") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540858225720/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa7"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080226370!6m8!1m7!1saS9GU4n6PTHvHg8MC12jzQ!2m2!1d37.48814726602655!2d127.1455362643135!3f96.02285507317086!4f-8.904757259743576!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank8") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540858500110/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa8"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080271904!6m8!1m7!1sHZPjizq3QMR2SCL76NE8RQ!2m2!1d37.49094864319247!2d127.1492816332236!3f207.97605618265584!4f-11.738333966113515!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank9") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540858791750/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa9"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080475325!6m8!1m7!1su3AhxZXS9gciQSEehk-4Uw!2m2!1d37.5124903019385!2d127.1418809894203!3f236.5369742290101!4f4.625251615538218!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank10") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540859085760/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa10"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080640160!6m8!1m7!1sAYIYXoYcUYVrNAxgFFAM2w!2m2!1d37.49443141670417!2d127.1096424312917!3f256.0149301320474!4f2.9236662441384738!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank11") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540859366950/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa11"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080789808!6m8!1m7!1sBHkKx_sk_jJYpOqRHiROjQ!2m2!1d37.52541780767211!2d127.1136362512488!3f274.2983244565495!4f-9.658268532759294!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank12") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/4105_16540859641650/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa12"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080897199!6m8!1m7!1sCAoSLEFGMVFpcE1iZE01OVNiRVdPd1N2bXd5bWlFS096b1J2bERpaFI3SVF5Zm9L!2m2!1d37.5200629!2d127.1227327!3f180.91682347874303!4f-5.480619235241264!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank13") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540859921790/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa13"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080999140!6m8!1m7!1s6AkqGIl5EVzqDcQ7h9s1HA!2m2!1d37.51643030813117!2d127.0792926265787!3f209.78391518995528!4f10.55350388499454!5f0.4000000000000002"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank14") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540860207760/sheet12?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa14"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652081044090!6m8!1m7!1sJALfDqpr6UjSM5Mvct_kQw!2m2!1d37.50282420540945!2d127.0840442387265!3f271.36965918096865!4f4.602896070985935!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-songpa-rank15") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540860487920/sheet12?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-songpa15"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652082213286!6m8!1m7!1sOSamHyjgo7J2y21L6DdOmA!2m2!1d37.51449427518504!2d127.0899175152889!3f0.7986698450054064!4f-15.646538324395877!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank1") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/14_16540852272930/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652078808438!6m8!1m7!1sWImXEj5LMEQom7RWgvYlKw!2m2!1d37.48922150272004!2d127.1427410948038!3f245.43994462374172!4f3.8607822319240768!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank2") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540852565830/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo2"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079389080!6m8!1m7!1snCejJmE4hM4aAfSR1-zotA!2m2!1d37.4715708695983!2d127.1232927851823!3f95.04031720123298!4f7.770605458841388!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank3") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540852853030/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo3"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079472420!6m8!1m7!1sFp3Xa2MC7OmRXJsC2WcFXg!2m2!1d37.51699927617588!2d127.1371002949459!3f178.65488131465295!4f-7.004184797789634!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank4") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/3_16540853136890/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo4"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079620597!6m8!1m7!1sbcPVz3qbzUV4Gsgbex88mA!2m2!1d37.50815752084522!2d127.0733105154341!3f317.26003596832254!4f19.770556846110665!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank5") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540853417750/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo5"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652079779815!6m8!1m7!1sefEnCjTNESD1_P-QamFALw!2m2!1d37.50818109490393!2d127.0723389897338!3f7.632363991208704!4f-8.548194348155903!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank6") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540853703330/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo6"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080098087!6m8!1m7!1sXdpWt8hzT5wiB51CVFI5Gg!2m2!1d37.48803402240416!2d127.136659536506!3f85.79207940264536!4f2.446846938526406!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank7") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540853979560/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo7"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080226370!6m8!1m7!1saS9GU4n6PTHvHg8MC12jzQ!2m2!1d37.48814726602655!2d127.1455362643135!3f96.02285507317086!4f-8.904757259743576!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank8") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540854269140/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo8"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080271904!6m8!1m7!1sHZPjizq3QMR2SCL76NE8RQ!2m2!1d37.49094864319247!2d127.1492816332236!3f207.97605618265584!4f-11.738333966113515!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank9") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540854552790/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo9"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080475325!6m8!1m7!1su3AhxZXS9gciQSEehk-4Uw!2m2!1d37.5124903019385!2d127.1418809894203!3f236.5369742290101!4f4.625251615538218!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank10") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540854830030/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo10"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080640160!6m8!1m7!1sAYIYXoYcUYVrNAxgFFAM2w!2m2!1d37.49443141670417!2d127.1096424312917!3f256.0149301320474!4f2.9236662441384738!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank11") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540855107660/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo11"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080789808!6m8!1m7!1sBHkKx_sk_jJYpOqRHiROjQ!2m2!1d37.52541780767211!2d127.1136362512488!3f274.2983244565495!4f-9.658268532759294!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank12") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540855394490/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo12"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080897199!6m8!1m7!1sCAoSLEFGMVFpcE1iZE01OVNiRVdPd1N2bXd5bWlFS096b1J2bERpaFI3SVF5Zm9L!2m2!1d37.5200629!2d127.1227327!3f180.91682347874303!4f-5.480619235241264!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank13") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540855684680/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo13"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652080999140!6m8!1m7!1s6AkqGIl5EVzqDcQ7h9s1HA!2m2!1d37.51643030813117!2d127.0792926265787!3f209.78391518995528!4f10.55350388499454!5f0.4000000000000002"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank14") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/12_16540855953480/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo14"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652081044090!6m8!1m7!1sJALfDqpr6UjSM5Mvct_kQw!2m2!1d37.50282420540945!2d127.0840442387265!3f271.36965918096865!4f4.602896070985935!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }

      if (node.checked && ioid == "d-gangseo-rank15") {
        if (node.id == "poi") {
          d3.select("dirbutton").style("visibility", "visible");
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            " https://public.tableau.com/views/_16540856247940/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link &amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          d3.select("dirbutton").style("visibility", "hidden");
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "d-gangseo15"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeat;justify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          d3.select("dirbutton").style("visibility", "hidden");
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.selectAll("#vizContainer>*").remove();
          const addiframe = document.createElement("iframe");
          addiframe.setAttribute(
            "src",
            "https://www.google.com/maps/embed?pb=!4v1652082213286!6m8!1m7!1sOSamHyjgo7J2y21L6DdOmA!2m2!1d37.51449427518504!2d127.0899175152889!3f0.7986698450054064!4f-15.646538324395877!5f0.7820865974627469"
          );
          addiframe.setAttribute("width", "100%");
          addiframe.setAttribute("height", "700");
          addiframe.setAttribute("style", "border:0");
          addiframe.setAttribute("allowfullscreen", "");
          addiframe.setAttribute("loading", "lazy");
          addiframe.setAttribute(
            "referrerpolicy",
            "no-referrer-when-downgrade"
          );
          document.getElementById("vizContainer").appendChild(addiframe);
        }
      }
    });
  })();
}
function guselect(gu) {
  //tableau뷰 바꿔주겠습니다.
  if (gu == "전체구") {
    ioid = "전체구";
    src =
      "https://public.tableau.com/views/200_16538982504110/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src);
    allgu();
    var poi = document.getElementById("poi");
    poi.checked = true;
    var ew = document.getElementById("edgeweight");
    ew.checked = true;
    edir();
  } else if (gu == "강서구") {
    ioid = "강서구";
    src =
      "https://public.tableau.com/views/gangseo/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src); //강서구 뷰를 보여주겠다.
    gangseo();
    var poi = document.getElementById("poi");
    poi.checked = true;
    var ew = document.getElementById("edgeweight");
    ew.checked = true;
    edir();
  } else if (gu == "송파구") {
    ioid = "송파구";
    src =
      "https://public.tableau.com/views/songpa/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src); //송파구 뷰를 보여주겠다.
    songpa();
    varpoi = document.getElementById("poi");
    poi.checked = true;
    var ew = document.getElementById("edgeweight");
    ew.checked = true;
    edir();
  }
}
function allgu() {
  //순위 랭킹 바꾸기
  d3.selectAll("#poi-ranking>*").remove(); //랭킹목록 초기화
  d3.selectAll("#duration-ranking>*").remove(); //랭킹목록 초기화(duration-ranking 추가 필요)
  d3.selectAll("#gps-ranking>*").remove(); //랭킹목록 초기화
  //dt추가
  innername = [
    "올림픽공원역 3번출구",
    "GS25 한강잠실4호점 자전거도로",
    "안양천합수부 길목",
    "여름캠핑장 자전거도로",
    "안양천합수부 중앙",
    "발산역 6,7번출구",
    "수상관장 콜택시승간장 자전거도로",
    "잠실마루쉼터 자전거도로",
    "GS25 한강잠실2호점 자전거도로",
    "올림픽공원 평화의 광장",
    "한강공원 잠실제1주차장 자전거도로",
    "잠실역 2번출구",
    "안양천합수부 자전거도로",
    "화곡역 7번 출구",
    "올림픽공원프라자",
    "올림픽공원 세계평화의문",
    "가양역 9번 출구",
    "마곡역 교차로",
    "올림픽공원 국기광장",
    "잠실역 7,8번 출구",
    "석촌역 교차로",
    "NC백화점 강서점 버스정류장",
    "NC백화점 강서점 정문",
    "홈플러스 가양점",
    "구암근린공원 근처 자전거도로",
    "공암나루공원 근처 자전거도로",
    "발산역 1번출구",
    "안양천코스",
    "잠실역 교차로",
    "잠실역 10번출구",
  ];
  var adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("전체구 POI순위"));
  document.getElementById("poi-ranking").appendChild(adddt);
  //ol설정
  var adddd = document.createElement("dd");
  var addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < innername.length; i++) {
    let addli = document.createElement("li");
    aid = "all-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "allpoiselect");
    adda.setAttribute("onclick", "javascript:poiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
    adddd.appendChild(addol);
  }
  //li추가한 ol추가
  document.getElementById("poi-ranking").appendChild(adddd);

  all_d_innername = [
    "까치산로 14길 빌라촌",
    "화곡 푸르지오 아파트",
    "강서 물재생센터",
    "강서 둘레길 3코스",
    "수명산 근린공원",
    "위례송파1로 개발지구",
    "송파구 자원순환공원",
    "개화역 차량기지",
    "강서 도로 사업소",
    "올림픽선수촌3단지아파트 어린이놀이터",
    "우장산 아이파크 어린이놀이터장",
    "한국공항공사 본사",
    "잠실우성아파트 7동 앞",
    "강서대학교 운동장",
    "강서구립 방화테니스장",
    "아라한강갑문 인증센터",
    "잠실우성아파트 3동 앞",
    "서울교통공사 방화차량사업소",
    "위례서로 개발지구",
    "까치산로 12길 빌라촌",
    "거원중학교",
    "강서 주말농장",
    "오금로 68길 빌라촌",
    "오륜테니스장",
    "가락시장 건어물가공처리장",
    "풍성초등학교",
    "올림픽공원 야생화단지",
    "신천중학교",
    "잠실우성4차아파트 105동 앞",
    "잠신고등학교",
  ];
  adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("머문시간 순위"));
  document.getElementById("duration-ranking").appendChild(adddt);
  //ol설정
  adddd = document.createElement("dd");
  addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < all_d_innername.length; i++) {
    let addli = document.createElement("li");
    aid = "d-all-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "allpoiselect");
    adda.setAttribute("onclick", "javascript:poiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = all_d_innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
    adddd.appendChild(addol);
  }
  //li추가한 ol추가
  document.getElementById("duration-ranking").appendChild(adddd);
}
function poiselect(allrank) {
  //poi가 선택됐을 때 아래에 추가하는 부분
  switch (allrank) {
    case "all-rank1": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank2": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank3": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank4": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank5": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank6": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank7": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank8": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank9": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank10": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank11": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank12": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank13": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank14": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank15": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank16": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank17": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank18": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank19": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank20": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank21": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank22": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank23": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank24": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank25": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank26": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank27": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank28": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank29": {
      buttontableaureview(allrank);
      break;
    }
    case "all-rank30": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank1": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank2": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank3": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank4": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank5": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank6": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank7": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank8": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank9": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank10": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank11": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank12": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank13": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank14": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank15": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank16": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank17": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank18": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank19": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank20": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank21": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank22": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank23": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank24": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank25": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank26": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank27": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank28": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank29": {
      buttontableaureview(allrank);
      break;
    }
    case "gangseo-rank30": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank1": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank2": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank3": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank4": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank5": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank6": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank7": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank8": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank9": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank10": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank11": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank12": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank13": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank14": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank15": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank16": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank17": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank18": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank19": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank20": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank21": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank22": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank23": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank24": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank25": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank26": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank27": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank28": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank29": {
      buttontableaureview(allrank);
      break;
    }
    case "songpa-rank30": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank1": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank2": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank3": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank4": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank5": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank6": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank7": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank8": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank9": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank10": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank11": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank12": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank13": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank14": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank15": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank16": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank17": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank18": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank19": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank20": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank21": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank22": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank23": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank24": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank25": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank26": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank27": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank28": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank29": {
      buttontableaureview(allrank);
      break;
    }
    case "d-all-rank30": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank1": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank2": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank3": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank4": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank5": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank6": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank7": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank8": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank9": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank10": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank11": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank12": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank13": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank14": {
      buttontableaureview(allrank);
      break;
    }
    case "d-songpa-rank15": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank1": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank2": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank3": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank4": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank5": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank6": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank7": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank8": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank9": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank10": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank11": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank12": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank13": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank14": {
      buttontableaureview(allrank);
      break;
    }
    case "d-gangseo-rank15": {
      buttontableaureview(allrank);
      break;
    }

    default: {
      console.log("ㄴㄴ");
      break;
    }
  }
}
function gangseo() {
  //순위 랭킹 바꾸기
  d3.selectAll("#poi-ranking>*").remove(); //랭킹목록 초기화
  d3.selectAll("#duration-ranking>*").remove(); //랭킹목록 초기화(duration-ranking 추가 필요)
  //dt추가
  innername = [
    "안양천합수부 길목",
    "안양천합수부 중앙",
    "발산역 6,7번출구",
    "안양천합수부 자전거도로",
    "화곡역 7번 출구",
    "가양역 9번 출구",
    "마곡역 교차로",
    "NC백화점 강서점 버스정류장",
    "NC백화점 강서점 정문",
    "홈플러스 가양점",
    "구암근린공원 근처 자전거도로",
    "공암나루공원 근처 자전거도로",
    "발산역 1번출구",
    "안양천코스",
    "LG유플러스 마곡사옥 앞",
    "증미역 3번출구",
    "염창나들목",
    "염창교 자전거도로",
    "황금내근린공원 근처 자전거도로",
    "등촌역 중앙",
    "스타벅스 발산역점",
    "우장산역 2번출구",
    "발산근린공원 교차로",
    "개화나들목 근처 자전거도로",
    "마곡나루역 1번출구",
    "미니스톱 발산역점",
    "양천향교역 6번출구",
    "버거킹 마곡점",
    "한국가스기술공사(발산역방면)",
    "명덕고교입구교차로",
  ];
  var adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("강서구 POI순위"));
  document.getElementById("poi-ranking").appendChild(adddt);
  //ol설정
  var adddd = document.createElement("dd");
  var addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < innername.length; i++) {
    let addli = document.createElement("li");
    aid = "gangseo-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "gangseopoiselect");
    adda.setAttribute("onclick", "javascript:poiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
    adddd.appendChild(addol);
  }
  //li추가한 ol추가
  document.getElementById("poi-ranking").appendChild(adddd);

  gangseo_d_innername = [
    "까치산로 14길 빌라촌",
    "화곡 푸르지오 아파트",
    "강서 물재생센터",
    "강서 둘레길 3코스",
    "수명산 근린공원",
    "개화역 차량기지",
    "강서 도로 사업소",
    "우장산 아이파크 어린이놀이터",
    "한국공항공사 본사",
    "강서대학교 운동장",
    "강서구립 방화테니스장",
    "아라한강갑문 인증센터",
    "서울교통공사 방화차량사업소",
    "까치산로 12길 빌라촌",
    "강서 주말농장",
  ];
  adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("머문시간 순위"));
  document.getElementById("duration-ranking").appendChild(adddt);
  //ol설정
  adddd = document.createElement("dd");
  addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < gangseo_d_innername.length; i++) {
    let addli = document.createElement("li");
    aid = "d-songpa-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "allpoiselect");
    adda.setAttribute("onclick", "javascript:poiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = gangseo_d_innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
    adddd.appendChild(addol);
  }
  //li추가한 ol추가
  document.getElementById("duration-ranking").appendChild(adddd);
}

function songpa() {
  //순위 랭킹 바꾸기
  d3.selectAll("#poi-ranking>*").remove(); //랭킹목록 초기화
  d3.selectAll("#duration-ranking>*").remove(); //랭킹목록 초기화(duration-ranking 추가 필요)
  //dt추가
  innername = [
    "올림픽공원역 3번출구",
    "GS25 한강잠실4호점 자전거도로",
    "여름캠핑장 자전거도로",
    "수상관장 콜택시승간장 자전거도로",
    "잠실마루쉼터 자전거도로",
    "GS25 한강잠실2호점 자전거도로",
    "올림픽공원 평화의 광장",
    "한강공원 잠실제1주차장 자전거도로",
    "잠실역 2번출구",
    "올림픽공원프라자",
    "올림픽공원 세계평화의문",
    "올림픽공원 국기광장",
    "잠실역 7,8번 출구",
    "석촌역 교차로",
    "잠실역 교차로",
    "잠실역 10번출구",
    "더컨벤션 잠실점 교차로",
    "잠실한강공원앞 교차로",
    "정국숲3호 자전거도로",
    "올림픽공원 한얼광장",
    "올림픽공원 북2문입구",
    "방이맛골",
    "몽촌토성역 1번출구",
    "방이삼거리",
    "종합운동장사거리",
    "한성백제역 2번출구",
    "GS25 한강잠실1호점 자전거도로",
    "석촌호수 (남쪽)",
    "송파근린공원 교차로",
    "잠실새내역 2번출구",
  ];
  var adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("송파구 POI순위"));
  document.getElementById("poi-ranking").appendChild(adddt);
  //ol설정
  var adddd = document.createElement("dd");
  var addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < innername.length; i++) {
    let addli = document.createElement("li");
    aid = "songpa-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "songpapoiselect");
    adda.setAttribute("onclick", "javascript:poiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
    adddd.appendChild(addol);
  }
  //li추가한 ol추가
  document.getElementById("poi-ranking").appendChild(adddd);

  songpa_d_innername = [
    "위례송파1로 개발지구",
    "송파구 자원순환공원",
    "올림픽선수촌3단지아파트 어린이놀이터",
    "잠실우성아파트 7동 앞",
    "잠실우성아파트 3동 앞",
    "위례서로 개발지구",
    "거원중학교",
    "오금로 68길 빌라촌",
    "오륜테니스장",
    "가락시장 건어물가공처리장",
    "풍성초등학교",
    "올림픽공원 야생화단지",
    "신천중학교",
    "잠실우성4차아파트 105동 앞",
    "잠신고등학교",
  ];
  adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("머문시간 순위"));
  document.getElementById("duration-ranking").appendChild(adddt);
  //ol설정
  adddd = document.createElement("dd");
  addol = document.createElement("ol");
  //li추가(top 30개)
  for (let i = 0; i < songpa_d_innername.length; i++) {
    let addli = document.createElement("li");
    aid = "d-songpa-rank" + (i + 1);
    //a태그 추가
    let adda = document.createElement("a");
    adda.setAttribute("href", "#");
    adda.setAttribute("id", aid); //
    adda.setAttribute("name", "allpoiselect");
    adda.setAttribute("onclick", "javascript:poiselect(this.id)"); //id마다 접근할 예정
    adda.innerHTML = songpa_d_innername[i];
    //li 아래에 a추가
    addli.appendChild(adda);
    //ol에 li들 추가하기
    addol.appendChild(addli);
    adddd.appendChild(addol);
  }
  //li추가한 ol추가
  document.getElementById("duration-ranking").appendChild(adddd);
}

function tablemaker(rplace, rusername, rdate, rreviewin) {
  for (let i = rusername.length - 1; i >= 0; i--) {
    //최신순
    //유저,날짜부분
    let uuser = document.createElement("div");
    uuser.setAttribute("class", "ss");
    uuser.setAttribute("style", "display:flex");
    //유저
    let uusername = document.createElement("div");
    uusername.setAttribute("class", "uusername");
    uusername.innerHTML = rusername[i];
    //날짜
    let uudate = document.createElement("div");
    uudate.setAttribute("class", "uudate");
    uudate.innerHTML = rdate[i];

    uuser.appendChild(uusername);
    uuser.appendChild(uudate);
    document.getElementById("ifa").appendChild(uuser);
    //리뷰부분
    let uureview = document.createElement("div");
    uureview.setAttribute("class", "uureview");
    uureview.innerHTML = rreviewin[i];
    document.getElementById("ifa").appendChild(uureview);
    //한줄 추가
    const brtag = document.createElement("hr");
    document.getElementById("ifa").appendChild(brtag);
  }
}

function reviewing(rplace) {
  const reviewdiv = document.createElement("div"); //div생성
  reviewdiv.setAttribute("class", "col-lg-12"); //css
  reviewdiv.setAttribute("name", "reviewdiv");

  const reviewform = document.createElement("form"); //form 생성
  reviewform.setAttribute("action", "/addreview"); //css용
  reviewform.setAttribute("method", "POST"); //css용
  reviewform.setAttribute("target", "blackifr"); //페이지 이동 방지
  //reviewdiv.appendChild(reviewform);
  //닉네임
  const nickinput = document.createElement("input"); //input생성
  nickinput.setAttribute("class", "nickinput");
  nickinput.setAttribute("type", "text");
  nickinput.setAttribute("name", "username");
  nickinput.setAttribute("placeholder", "닉네임");
  nickinput.setAttribute("autocomplete", "off");
  nickinput.setAttribute("required", "");
  reviewform.appendChild(nickinput);
  //한줄 띄우기
  const brtag = document.createElement("br");
  reviewform.appendChild(brtag);
  document.getElementById("ifa").appendChild(reviewdiv);
  //리뷰 + 버튼그룹을 위한 div 생성
  const reviewgroup = document.createElement("div");
  reviewgroup.setAttribute("id", "rplace"); //
  reviewgroup.setAttribute("name", rplace); //

  //리뷰
  const reviewinput = document.createElement("textarea"); //input생성
  reviewinput.setAttribute("class", "reviewinput");
  reviewinput.setAttribute("type", "text");
  reviewinput.setAttribute("name", "innertext");
  reviewinput.setAttribute(
    "placeholder",
    rplace + "에 대한 리뷰를 남겨주세요."
  );
  reviewinput.setAttribute("required", "");
  reviewgroup.appendChild(reviewinput); //group에 input삽입
  //버튼
  const reviewbutton = document.createElement("button");
  reviewbutton.setAttribute("class", "btn btn-outline-secondary reviewbtn");
  reviewbutton.innerHTML = "등록";
  reviewbutton.setAttribute("onclick", "javascript:his()");
  reviewgroup.appendChild(reviewbutton); //group에 button삽입

  reviewform.appendChild(reviewgroup); //input과 button 그룹을 form에 붙이기
  reviewdiv.appendChild(reviewform); //form을 최종 div에 붙이기
  document.getElementById("ifa").appendChild(reviewdiv); //div 최종게시
  //rplace를 넘길 필요가 있음(h3.js로)
  var formr = document.createElement("form");
  formr.setAttribute("method", "post");
  formr.setAttribute("action", "/rplaces");
  formr.setAttribute("target", "blackifr");
  var hF = document.createElement("input");
  hF.setAttribute("type", "hidden");
  hF.setAttribute("name", "rplace");
  hF.setAttribute("value", rplace);
  formr.appendChild(hF);
  document.body.appendChild(formr);
  formr.submit();
}
function buttontableaureview(allrank) {
  //버튼 바꾸기
  var poi = document.getElementById("poi");
  poi.checked = true;

  //태블로 뷰 갱신
  ioid = allrank; //위에 버튼그룹 연결을 위한 ioid설정
  poidlocmoim(); //위에 버튼그룹 연결
  var ew = document.getElementById("edgeweight");
  ew.checked = true;
  edir();

  d3.selectAll("#ifa>*").remove(); //ifa초기화//ifa에 리뷰 넣겠습니다.
  var liinnertext = document.getElementById(allrank).innerText; //이름 가져오기
  //console.log(liinnertext);
  let ifatitle = document.createElement("h1");
  ifatitle.setAttribute("style", "text-align:left");
  ifatitle.innerText = liinnertext + " 방문자들의 리뷰"; //올림픽공원 방문자들의 리뷰
  document.getElementById("ifa").appendChild(ifatitle);
  //한줄 추가
  const brtag = document.createElement("hr");
  document.getElementById("ifa").appendChild(brtag);
  //달린 리뷰 추가하기
  //console.log(username);//리뷰를 위해 loaddb.js에서 변수를 가져올 수 있음을 확인(완료)
  var rvusername = []; //유저이름배열
  var rvdate = []; //날짜들배열
  var rvreviewin = []; //리뷰들배열
  for (let i = 0; i < place.length; i++) {
    //이름이 일치하는 동안 리뷰들을 불러오겠다.
    if (liinnertext == place[i]) {
      rvusername.push(username[i]);
      rvdate.push(date[i]);
      rvreviewin.push(reviewin[i]);
    }
    //리뷰테이블 만들기 - 장소,이름배열,날짜배열,리뷰배열 보내기
  }
  console.log(rvusername);
  tablemaker(liinnertext, rvusername, rvdate, rvreviewin);
  //리뷰 달 수 있는 부분추가하기
  reviewing(liinnertext);
}
function his() {
  //데이터베이스 새로고침
  setTimeout(() => {
    place = [];
    username = [];
    date = [];
    reviewin = [];
    $.ajax({
      url: "dbs",
      dataType: "json",
    }).done(function (result) {
      jsonRepository = result;
      //console.log(result);
      for (var i = 0; i < jsonRepository.length; i++) {
        place.push(jsonRepository[i]["place"]);
        username.push(jsonRepository[i]["username"]);
        date.push(jsonRepository[i]["date"]);
        reviewin.push(jsonRepository[i]["reviewin"]);
      }
      console.log(username);
      d3.selectAll("#ifa>*").remove(); //ifa초기화//ifa에 리뷰 넣겠습니다.
      var liinnertext = document.getElementById(ioid).innerText; //이름 가져오기
      //console.log(liinnertext);
      let ifatitle = document.createElement("h1");
      ifatitle.setAttribute("style", "text-align:left");
      ifatitle.innerText = liinnertext + " 방문자들의 리뷰"; //올림픽공원 방문자들의 리뷰
      document.getElementById("ifa").appendChild(ifatitle);
      //한줄 추가
      const brtag = document.createElement("hr");
      document.getElementById("ifa").appendChild(brtag);
      //달린 리뷰 추가하기
      //console.log(username);//리뷰를 위해 loaddb.js에서 변수를 가져올 수 있음을 확인(완료)
      var rvusername = []; //유저이름배열
      var rvdate = []; //날짜들배열
      var rvreviewin = []; //리뷰들배열
      for (let i = 0; i < place.length; i++) {
        //이름이 일치하는 동안 리뷰들을 불러오겠다.
        if (liinnertext == place[i]) {
          rvusername.push(username[i]);
          rvdate.push(date[i]);
          rvreviewin.push(reviewin[i]);
        }
        //리뷰테이블 만들기 - 장소,이름배열,날짜배열,리뷰배열 보내기
      }
      tablemaker(liinnertext, rvusername, rvdate, rvreviewin);
      //리뷰 달 수 있는 부분추가하기
      reviewing(liinnertext);
    }, 0);
  }, 1000);
}
function maketableau(src) {
  d3.selectAll("#vizContainer>*").remove();
  let tableaucontainer = document.createElement("iframe");
  tableaucontainer.setAttribute("frameborder", "0");
  tableaucontainer.setAttribute("allowtransparency", "true");
  tableaucontainer.setAttribute("allowfullscreen", "true");
  tableaucontainer.setAttribute("title", "데이터 비주얼리제이션");
  tableaucontainer.setAttribute("marginheight", "0");
  tableaucontainer.setAttribute("marginwidth", "0");
  tableaucontainer.setAttribute("scrolling", "no");
  tableaucontainer.setAttribute(
    "style",
    "display:block;width:100%;height:700px"
  );
  tableaucontainer.setAttribute("visibility", "visible");
  tableaucontainer.setAttribute("src", src);
  document.getElementById("vizContainer").appendChild(tableaucontainer);
  //edgedir버튼 달기
  var eddiv = document.createElement("div");
  eddiv.setAttribute("class", "dirbutton btn-group-sm");
  eddiv.setAttribute("role", "group");
  var edinput = document.createElement("input");
  edinput.setAttribute("type", "radio");
  edinput.setAttribute("class", "btn-check");
  edinput.setAttribute("name", "edir");
  edinput.setAttribute("id", "edgeweight");
  edinput.setAttribute("autocomplete", "off");
  edinput.setAttribute("checked", "");
  edinput.setAttribute("onclick", "javascript:edir(event)");
  eddiv.appendChild(edinput);
  var edlabel = document.createElement("label");
  edlabel.setAttribute("class", "btn btn-outline-primary");
  edlabel.setAttribute("for", "edgeweight");
  edlabel.innerHTML = "연결선 강도";
  eddiv.appendChild(edlabel);

  var edinput2 = document.createElement("input");
  edinput2.setAttribute("type", "radio");
  edinput2.setAttribute("class", "btn-check");
  edinput2.setAttribute("name", "edir");
  edinput2.setAttribute("id", "direction");
  edinput2.setAttribute("autocomplete", "off");
  edinput2.setAttribute("onclick", "javascript:edir(event)");
  eddiv.appendChild(edinput2);
  var edlabel2 = document.createElement("label");
  edlabel2.setAttribute("class", "btn btn-outline-primary");
  edlabel2.setAttribute("for", "direction");
  edlabel2.innerHTML = "방향";
  eddiv.appendChild(edlabel2);

  document.getElementById("vizContainer").appendChild(eddiv);
}
function mainsearch() {
  searchinput = document.getElementById("name").value; // 안에 넣은 value값 가져오기
  switch (searchinput) {
    case "올림픽공원역 3번출구": {
      ioid = "songpa-rank1";
      searchsetting(ioid);
      break;
    }
    case "GS25 한강잠실4호점 자전거도로": {
      ioid = "songpa-rank2";
      searchsetting(ioid);
      break;
    }
    default: {
      alert("키워드에 대한 검색결과가 없습니다.");
      break;
    }
  }
}
$(function () {
  var availableTags = [
    //search autocomplete 이름만 넣읍시다
    "올림픽공원역 3번출구",
    "GS25 한강잠실4호점 자전거도로",
    "안양천합수부 길목",
    "여름캠핑장 자전거도로",
    "안양천합수부 중앙",
    "발산역 6,7번출구",
    "수상관장 콜택시승간장 자전거도로",
    "잠실마루쉼터 자전거도로",
    "GS25 한강잠실2호점 자전거도로",
    "올림픽공원 평화의 광장",
    "한강공원 잠실제1주차장 자전거도로",
    "잠실역 2번출구",
    "안양천합수부 자전거도로",
    "화곡역 7번 출구",
    "올림픽공원프라자",
    "올림픽공원 세계평화의문",
    "가양역 9번 출구",
    "마곡역 교차로",
    "올림픽공원 국기광장",
    "잠실역 7,8번 출구",
    "석촌역 교차로",
    "NC백화점 강서점 버스정류장",
    "NC백화점 강서점 정문",
    "홈플러스 가양점",
    "구암근린공원 근처 자전거도로",
    "공암나루공원 근처 자전거도로",
    "발산역 1번출구",
    "안양천코스",
    "잠실역 교차로",
    "잠실역 10번출구",
    "까치산로 14길 빌라촌",
    "화곡 푸르지오 아파트",
    "강서 물재생센터",
    "강서 둘레길 3코스",
    "수명산 근린공원",
    "위례송파1로 개발지구",
    "송파구 자원순환공원",
    "개화역 차량기지",
    "강서 도로 사업소",
    "올림픽선수촌3단지아파트 어린이놀이터",
    "우장산 아이파크 어린이놀이터장",
    "한국공항공사 본사",
    "잠실우성아파트 7동 앞",
    "강서대학교 운동장",
    "강서구립 방화테니스장",
    "아라한강갑문 인증센터",
    "잠실우성아파트 3동 앞",
    "서울교통공사 방화차량사업소",
    "위례서로 개발지구",
    "까치산로 12길 빌라촌",
    "거원중학교",
    "강서 주말농장",
    "오금로 68길 빌라촌",
    "오륜테니스장",
    "가락시장 건어물가공처리장",
    "풍성초등학교",
    "올림픽공원 야생화단지",
    "신천중학교",
    "잠실우성4차아파트 105동 앞",
    "잠신고등학교",
  ];
  $("#name").autocomplete({
    source: availableTags,
  });
});

function searchsetting(ioid) {
  songpa();
  poidlocmoim();
  poiselect(ioid);
  edir();
  $("#name").val("");
}
function edir() {
  //edgeweight / direction 선택 시
  (async () => {
    const Node2 = document.getElementsByName("edir");

    Node2.forEach((node) => {
      if (node.checked && node.id == "edgeweight") {
        switch (ioid) {
          case "전체구": {
            src =
              "https://public.tableau.com/views/200_16538982504110/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "강서구": {
            src =
              "https://public.tableau.com/views/gangseo/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "송파구": {
            src =
              "https://public.tableau.com/views/songpa/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank1": {
            src =
              "https://public.tableau.com/views/3_16540483623260/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank2": {
            src =
              "https://public.tableau.com/views/GS254/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank3": {
            src =
              "https://public.tableau.com/views/_16540166157120/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank4": {
            src =
              "https://public.tableau.com/views/_16540484199620/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank5": {
            src =
              "https://public.tableau.com/views/_16540167545260/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank6": {
            src =
              "https://public.tableau.com/views/67_16540168524010/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank7": {
            src =
              "https://public.tableau.com/views/_16540484467760/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank8": {
            src =
              " https://public.tableau.com/views/_16540484760320/200?:language=ko-KR&puGS25%202%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank9": {
            src =
              " https://public.tableau.com/views/GS252/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank10": {
            src =
              " https://public.tableau.com/views/_16540485343840/200?:language=ko-KR&pu%201%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank11": {
            src =
              " https://public.tableau.com/views/1_16540485617570/200?:language=ko-KR&p%202ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank12": {
            src =
              " https://public.tableau.com/views/2_16540485900300/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank13": {
            src =
              " https://public.tableau.com/views/_16540175631880/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank14": {
            src =
              " https://public.tableau.com/views/7_16540176878250/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank15": {
            src =
              " https://public.tableau.com/views/_16540486202460/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank16": {
            src =
              " https://public.tableau.com/views/_16540486480310/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank17": {
            src =
              " https://public.tableau.com/views/9_16540177615100/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank18": {
            src =
              " https://public.tableau.com/views/_16540549357620/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank19": {
            src =
              " https://public.tableau.com/views/_16540486759560/200?:language=ko-KR&pu%207,8%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank20": {
            src =
              " https://public.tableau.com/views/78_16540487057420/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank21": {
            src =
              " https://public.tableau.com/views/_16540487327900/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank22": {
            src =
              " https://public.tableau.com/views/NC_16540179172370/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank23": {
            src =
              " https://public.tableau.com/views/NC_16540179172370/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank24": {
            src =
              " https://public.tableau.com/views/_16540217790770/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank25": {
            src =
              " https://public.tableau.com/views/_16540218080230/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank26": {
            src =
              " https://public.tableau.com/views/_16540218372420/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank27": {
            src =
              " https://public.tableau.com/views/1_16540218655130/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank28": {
            src =
              " https://public.tableau.com/views/_16540218938270/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank29": {
            src =
              " https://public.tableau.com/views/_16540487625730/200?:language=ko-KR&pu%2010blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank30": {
            src =
              " https://public.tableau.com/views/10_16540487908030/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank1": {
            src =
              "https://public.tableau.com/views/_16540166157120/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank2": {
            src =
              "https://public.tableau.com/views/_16540167545260/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank3": {
            src =
              "https://public.tableau.com/views/67_16540168524010/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank4": {
            src =
              "https://public.tableau.com/views/_16540175631880/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank5": {
            src =
              " https://public.tableau.com/views/7_16540176878250/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank6": {
            src =
              " https://public.tableau.com/views/9_16540177615100/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank7": {
            src =
              " https://public.tableau.com/views/_16540549357620/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank8": {
            src =
              " https://public.tableau.com/views/NC_16540179172370/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank9": {
            src =
              " https://public.tableau.com/views/NC_16540217492700/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank10": {
            src =
              " https://public.tableau.com/views/_16540217790770/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank11": {
            src =
              " https://public.tableau.com/views/_16540218080230/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank12": {
            src =
              " https://public.tableau.com/views/_16540218372420/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank13": {
            src =
              " https://public.tableau.com/views/1_16540218655130/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank14": {
            src =
              " https://public.tableau.com/views/_16540218938270/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank15": {
            src =
              " https://public.tableau.com/views/LG_16540219223590/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank16": {
            src =
              " https://public.tableau.com/views/3_16540219517500/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank17": {
            src =
              " https://public.tableau.com/views/_16540219797520/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank18": {
            src =
              " https://public.tableau.com/views/_16540220087340/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank19": {
            src =
              " https://public.tableau.com/views/_16540220373640/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank20": {
            src =
              " https://public.tableau.com/views/_16540220654850/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank21": {
            src =
              " https://public.tableau.com/views/_16540220941170/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank22": {
            src =
              " https://public.tableau.com/views/2_16540221225840/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank23": {
            src =
              " https://public.tableau.com/views/_16540221519970/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank24": {
            src =
              " https://public.tableau.com/views/_16540221807180/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank25": {
            src =
              " https://public.tableau.com/views/1_16540222087740/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank26": {
            src =
              " https://public.tableau.com/views/_16540222372560/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank27": {
            src =
              " https://public.tableau.com/views/6_16540222653000/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank28": {
            src =
              " https://public.tableau.com/views/_16540222940490/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank29": {
            src =
              " https://public.tableau.com/views/_16540223227630/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank30": {
            src =
              " https://public.tableau.com/views/_16540474415680/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank1": {
            src =
              "https://public.tableau.com/views/3_16540483623260/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank2": {
            src =
              "https://public.tableau.com/views/GS254/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank3": {
            src =
              "https://public.tableau.com/views/_16540484199620/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank4": {
            src =
              "https://public.tableau.com/views/_16540484467760/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank5": {
            src =
              "https://public.tableau.com/views/_16540484760320/200?:language=ko-KR&puGS25%202%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank6": {
            src =
              "https://public.tableau.com/views/GS252/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank7": {
            src =
              "https://public.tableau.com/views/_16540485343840/200?:language=ko-KR&pu%201%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank8": {
            src =
              "https://public.tableau.com/views/1_16540485617570/200?:language=ko-KR&p%202ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank9": {
            src =
              "https://public.tableau.com/views/2_16540485900300/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank10": {
            src =
              "https://public.tableau.com/views/_16540486202460/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank11": {
            src =
              "https://public.tableau.com/views/_16540486480310/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank12": {
            src =
              "https://public.tableau.com/views/_16540486759560/200?:language=ko-KR&pu%207,8%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank13": {
            src =
              "https://public.tableau.com/views/78_16540487057420/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank14": {
            src =
              "https://public.tableau.com/views/_16540487327900/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank15": {
            src =
              "https://public.tableau.com/views/_16540487625730/200?:language=ko-KR&pu%2010blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank16": {
            src =
              "https://public.tableau.com/views/10_16540487908030/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank17": {
            src =
              "https://public.tableau.com/views/_16540488185330/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank18": {
            src =
              "https://public.tableau.com/views/_16540488484960/200?:language=ko-KR&pu3%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank19": {
            src =
              "https://public.tableau.com/views/3_16540488777470/200?:language=ko-KR&p%20ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank20": {
            src =
              "https://public.tableau.com/views/_16540489064520/200?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank21": {
            src =
              "https://public.tableau.com/views/2_16540494220700/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank22": {
            src =
              "https://public.tableau.com/views/_16540494514320/200?:language=ko-KR&pu%201blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank23": {
            src =
              "https://public.tableau.com/views/1_16540494780530/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank24": {
            src =
              "https://public.tableau.com/views/_16540495078100/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank25": {
            src =
              "https://public.tableau.com/views/_16540495364610/200?:language=ko-KR&pu%202blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank26": {
            src =
              "https://public.tableau.com/views/2_16540495637380/200?:language=ko-KR&pGS25%201%20ublish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank27": {
            src =
              "https://public.tableau.com/views/GS251/200?:language=ko-KR&publish=yes%20()&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank28": {
            src =
              "https://public.tableau.com/views/_16540496216240/200?:language=ko-KR&pu%20blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank29": {
            src =
              "https://public.tableau.com/views/_16540496514380/200?:language=ko-KR&pu%202blish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank30": {
            src =
              "https://public.tableau.com/views/2_16540496800980/200?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }

          case "d-all-rank1": {
            src =
              " https://public.tableau.com/views/14_16540852272930/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank2": {
            src =
              " https://public.tableau.com/views/_16540852565830/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank3": {
            src =
              " https://public.tableau.com/views/_16540852853030/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank4": {
            src =
              " https://public.tableau.com/views/3_16540853136890/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank5": {
            src =
              " https://public.tableau.com/views/_16540853417750/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank6": {
            src =
              " https://public.tableau.com/views/1_16540856525510/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank7": {
            src =
              " https://public.tableau.com/views/_16540856813430/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank8": {
            src =
              " https://public.tableau.com/views/_16540853703330/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank9": {
            src =
              "https://public.tableau.com/views/_16540853979560/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank10": {
            src =
              " https://public.tableau.com/views/3_16540857094390/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank11": {
            src =
              " https://public.tableau.com/views/_16540854269140/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank12": {
            src =
              " https://public.tableau.com/views/_16540854552790/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank13": {
            src =
              " https://public.tableau.com/views/7_16540857380940/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank14": {
            src =
              " https://public.tableau.com/views/_16540854830030/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank15": {
            src =
              " https://public.tableau.com/views/_16540855107660/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank16": {
            src =
              " https://public.tableau.com/views/_16540855394490/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank17": {
            src =
              " https://public.tableau.com/views/3_16540857663860/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank18": {
            src =
              " https://public.tableau.com/views/_16540855684680/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank19": {
            src =
              " https://public.tableau.com/views/12_16540855953480/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank20": {
            src =
              " https://public.tableau.com/views/_16540856247940/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank21": {
            src =
              " https://public.tableau.com/views/68_16540857941710/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank22": {
            src =
              " https://public.tableau.com/views/_16540858225720/sheet12?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank23": {
            src =
              " https://public.tableau.com/views/_16540858500110/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank24": {
            src =
              " https://public.tableau.com/views/_16540858791750/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank25": {
            src =
              " https://public.tableau.com/views/_16540859085760/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank26": {
            src =
              " https://public.tableau.com/views/_16540859366950/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank27": {
            src =
              " https://public.tableau.com/views/4105_16540859641650/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank28": {
            src =
              " https://public.tableau.com/views/_16540859921790/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank29": {
            src =
              " https://public.tableau.com/views/_16540860207760/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank30": {
            src =
              " https://public.tableau.com/views/_16540860487920/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }

          case "d-songpa-rank1": {
            src =
              " https://public.tableau.com/views/1_16540856525510/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank2": {
            src =
              " https://public.tableau.com/views/_16540856813430/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank3": {
            src =
              " https://public.tableau.com/views/3_16540857094390/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank4": {
            src =
              " https://public.tableau.com/views/7_16540857380940/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank5": {
            src =
              " https://public.tableau.com/views/3_16540857663860/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank6": {
            src =
              " https://public.tableau.com/views/68_16540857941710/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank7": {
            src =
              " https://public.tableau.com/views/_16540858225720/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank8": {
            src =
              " https://public.tableau.com/views/_16540858500110/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank9": {
            src =
              " https://public.tableau.com/views/_16540858791750/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank10": {
            src =
              " https://public.tableau.com/views/_16540859085760/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank11": {
            src =
              " https://public.tableau.com/views/_16540859366950/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank12": {
            src =
              " https://public.tableau.com/views/4105_16540859641650/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank13": {
            src =
              " https://public.tableau.com/views/_16540859921790/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank14": {
            src =
              " https://public.tableau.com/views/_16540860207760/sheet12?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank15": {
            src =
              " https://public.tableau.com/views/_16540860487920/sheet12?:language=ko-KR&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }

          case "d-gangseo-rank1": {
            src =
              " https://public.tableau.com/views/14_16540852272930/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank2": {
            src =
              " https://public.tableau.com/views/_16540852565830/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank3": {
            src =
              " https://public.tableau.com/views/_16540852853030/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank4": {
            src =
              " https://public.tableau.com/views/3_16540853136890/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank5": {
            src =
              " https://public.tableau.com/views/_16540853417750/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank6": {
            src =
              " https://public.tableau.com/views/_16540853703330/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank7": {
            src =
              " https://public.tableau.com/views/_16540853979560/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse ";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank8": {
            src =
              " https://public.tableau.com/views/_16540854269140/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank9": {
            src =
              " https://public.tableau.com/views/_16540854552790/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank10": {
            src =
              " https://public.tableau.com/views/_16540854830030/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank11": {
            src =
              " https://public.tableau.com/views/_16540855107660/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank12": {
            src =
              " https://public.tableau.com/views/_16540855394490/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank13": {
            src =
              " https://public.tableau.com/views/_16540855684680/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank14": {
            src =
              " https://public.tableau.com/views/12_16540855953480/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank15": {
            src =
              " https://public.tableau.com/views/_16540856247940/sheet12?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
        }
      } else if (node.checked && node.id == "direction") {
        switch (ioid) {
          case "전체구": {
            src =
              "https://public.tableau.com/views/dirall/sheet2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "강서구": {
            src =
              "https://public.tableau.com/views/dirgangseo/sheet2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "송파구": {
            src =
              "https://public.tableau.com/views/dirsongpa/sheet2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank1": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank2": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank3": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank4": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank5": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank6": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank7": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank8": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank9": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank10": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank11": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank12": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank13": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank14": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank15": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank16": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank17": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank18": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank19": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank20": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank21": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank22": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank23": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank24": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank25": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank26": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank27": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank28": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank29": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "all-rank30": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank1": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank2": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank3": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank4": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank5": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank6": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank7": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank8": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank9": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank10": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank11": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank12": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank13": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank14": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank15": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank16": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank17": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank18": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank19": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank20": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank21": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank22": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank23": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank24": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank25": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank26": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank27": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank28": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank29": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "gangseo-rank30": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank1": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank2": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank3": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank4": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank5": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank6": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank7": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank8": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank9": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank10": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank11": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank12": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank13": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank14": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank15": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank16": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank17": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank18": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank19": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank20": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank21": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank22": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank23": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank24": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank25": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank26": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank27": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank28": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank29": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "songpa-rank30": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank1": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank2": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank3": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank4": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank5": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank6": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank7": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank8": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank9": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank10": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank11": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank12": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank13": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank14": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank15": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank16": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank17": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank18": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank19": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank20": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank21": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank22": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank23": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank24": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank25": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank26": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank27": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank28": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank29": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-all-rank30": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank1": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank2": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank3": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank4": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank5": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank6": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank7": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank8": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank9": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank10": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank11": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank12": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank13": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank14": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-songpa-rank15": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank1": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank2": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank3": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank4": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank5": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank6": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank7": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank8": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank9": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank10": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank11": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank12": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank13": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank14": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
          case "d-gangseo-rank15": {
            src = "";
            d3.select("#vizContainer>iframe").attr("src", src);
            break;
          }
        }
      }
    });
  })();
}
