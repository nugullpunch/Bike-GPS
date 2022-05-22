//&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse
var ioid = "전체구"; //어떤 id에 접근했었는지 표시하기위한 ioid, 아래에서 값 선언될 것임.
function poidlocmoim() {
  (async () => {
    const NodeList = document.getElementsByName("options");
    const Node2 = document.getElementsByName("gus");

    NodeList.forEach((node) => {
      if (node.checked && ioid == "전체구") {
        //ioid가 전체구일 때
        if (node.id == "poi") {
          //poi지점 파악
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/source_16527093881440/Source?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
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
            "https://public.tableau.com/views/source_16527093881440/Source?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
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
          //강서구 전체 스트리트뷰는 없습니다.
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
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
            "https://public.tableau.com/views/source_16527093881440/Source?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
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
          //송파구 전체 스트리트뷰는 없습니다.
          console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          alert("송파구 전체는 스트리트뷰가 없습니다.");
          moim = document.getElementById("moim");
          moim.checked = false;
        }
      }

      if (node.checked && ioid == "all-rank1") {
        //ioid가 all-rank1일 때(전체 POI1위)(버튼작업)
        if (node.id == "poi") {
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "https://public.tableau.com/views/source_16527093881440/Source?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악
          //console.log(ioid);
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //all-rank1에 대한 스트리트뷰
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
      if (node.checked && ioid == "songpa-rank1") {
        if (node.id == "poi") {
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa1"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa2"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa3"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa4"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa5"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa6"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa7"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa8"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa9"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa10"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa11"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa12"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa13"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa14"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa15"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa16"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa17"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa18"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa19"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa20"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa21"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa22"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa23"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa24"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa25"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa26"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa27"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa28"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa29"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
          //poi지점 파악
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          src =
            "&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
          maketableau(src);
        } else if (node.id == "dloc") {
          //대여소위치파악

          d3.select("#vizContainer>*").remove();
          let tableaucontainer = document.createElement("img");
          tableaucontainer.setAttribute("src", "songpa30"); //사진 설정
          tableaucontainer.setAttribute("alt", ioid);
          tableaucontainer.setAttribute(
            "style",
            "display:flex;width:100%;position:center center;repeat:no-repeatjustify-content: center;align-items: center;"
          );
          document.getElementById("vizContainer").appendChild(tableaucontainer);
        } else if (node.id == "moim") {
          //console.log(node.id); //노드 id 확인 dloc, moim, poi 잘나옴
          d3.select("#vizContainer>*").remove();
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
    });
  })();
}
function guselect(gu) {
  //tableau뷰 바꿔주겠습니다.
  if (gu == "전체구") {
    ioid = "전체구";
    src =
      "https://public.tableau.com/shared/PH9SPCY5Z?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src);
    allgu();
  } else if (gu == "강서구") {
    ioid = "강서구";
    src =
      "https://public.tableau.com/shared/WSQ9TPWMH?:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src); //강서구 뷰를 보여주겠다.
    gangseo();
  } else if (gu == "송파구") {
    ioid = "송파구";
    src =
      "https://public.tableau.com/views/Network2_16514805636400/2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link&amp;:size=1121,696&amp;:embed=y&amp;:showVizHome=n&amp;:bootstrapWhenNotified=y&amp;:apiID=host0#navType=1&amp;navSrc=Parse";
    d3.select("#vizContainer>iframe").attr("src", src); //송파구 뷰를 보여주겠다.
    songpa();
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
  const adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("전체구 POI순위"));
  document.getElementById("poi-ranking").appendChild(adddt);
  //ol설정
  const addol = document.createElement("ol");
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
  }
  //li추가한 ol추가
  document.getElementById("poi-ranking").appendChild(addol);
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

    default: {
      console.log("ㄴㄴ");
      break;
    }
  }
}
function gangseo() {
  //순위 랭킹 바꾸기
  d3.selectAll("#ranking>*").remove(); //랭킹목록 초기화
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
  const adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("강서구 POI순위"));
  document.getElementById("ranking").appendChild(adddt);
  //ol설정
  const addol = document.createElement("ol");
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
  }
  //li추가한 ol추가
  document.getElementById("poi-ranking").appendChild(addol);
}

function songpa() {
  //순위 랭킹 바꾸기
  d3.selectAll("#poi-ranking>*").remove(); //랭킹목록 초기화
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
  const adddt = document.createElement("dt");
  adddt.appendChild(document.createTextNode("송파구 POI순위"));
  document.getElementById("poi-ranking").appendChild(adddt);
  //ol설정
  const addol = document.createElement("ol");
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
  }
  //li추가한 ol추가
  document.getElementById("poi-ranking").appendChild(addol);
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
  reviewbutton.setAttribute("class", "reviewbtn");
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
  poi = document.getElementById("poi");
  poi.checked = true;
  //태블로 뷰 갱신
  ioid = allrank; //위에 버튼그룹 연결을 위한 ioid설정
  poidlocmoim(); //위에 버튼그룹 연결
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
      console.log(result);
    }, 0);
  }, 1500);
  //ifa
  setTimeout(() => {
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
  }, 1650);
}
function maketableau(src) {
  d3.select("#vizContainer>*").remove();
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
}
function mainsearch() {
  searchinput = document.getElementById("name").value; // 안에 넣은 value값 가져오기
  switch (searchinput) {
    case "올림픽":
    case "올림픽공원역":
    case "올림픽공원역 3번출구":
    case "올림픽공원역3번출구": {
      ioid = "songpa-rank1";
      searchsetting(ioid);
      break;
    }
    case "GS25 한강잠실4호점 자전거도로":
    case "GS25 한강잠실4호점":
    case "GS25한강잠실4호점": {
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
function searchsetting(ioid) {
  songpa();
  poidlocmoim();
  poiselect(ioid);
  $("#name").val("");
}
