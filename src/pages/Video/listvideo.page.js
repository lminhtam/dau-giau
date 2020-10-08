import React, { useEffect, useState } from "react";
import BottomInfo from "shared/bottomInnfo/bottomInfo";
import FixedButton from "shared/fixedButton/fixedBtn";
import "./listvideo.css";

export const categories = [
  {
    link: require("../../assets/images/series1/tree-forest.png"),
    title: "NAME OF SERIES CLIP 2 CHAP 1",
    description:
      "Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.",
  },
  {
    link: require("../../assets/images/series1/tree-forest.png"),
    title: "NAME OF SERIES CLIP 2 CHAP 1",
    description:
      "Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.",
  },
  {
    link: require("../../assets/images/series1/tree-forest.png"),
    title: "NAME OF SERIES CLIP 2 CHAP 1",
    description:
      "Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.",
  },
];

export function oneCard(item) {
  return (
    <div className="oneCard">
      <div className="squareBorderOneCard"></div>
      <img className="pictureOneCard" src={item.link} alt={item.link} />
      <div className="nameTitleOneCard">{item.title}</div>
      <div className="descriptionOneCard">{item.description}</div>
      <div className="arrowOneCard">
        <div className="arrowCard"></div>
        <div className="lineArrowCard"></div>
      </div>
    </div>
  );
}

const titleChapter = [{ 1: "TÊN CHAPTER" }, { 2: "TÊN NÀO ĐÓ" }];

function ListVideo() {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [listEps, setListEps] = useState([]);

  useEffect(() => {
    setListEps(categories);
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <FixedButton />
      <div className="listVideo">
        <iframe
          title="Intro Campaign"
          width="100%"
          height={`${(width * 0.6 * 9) / 16}`}
          src={"https://www.youtube.com/embed/VbjJHXfVOl4"}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h1 className="nameChapter">
          CHAPTER 1 - <b>{titleChapter[0][1]}</b>
        </h1>
        <div className="lineChapter"></div>
        {listEps && listEps.length > 0 && (
          <div className="section">
            <h2 className="sectionName">DANH SÁCH TẬP</h2>
            <div className="cardSeries">
              {listEps.map((item) => oneCard(item))}
            </div>
          </div>
        )}
      </div>
      <BottomInfo />
    </>
  );
}

export default ListVideo;
