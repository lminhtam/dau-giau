import React, { useEffect, useState } from "react";
import "./cliplist1.css";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import BottomInfo from "../../shared/bottomInnfo/bottomInfo";
import { categories, oneCard } from "pages/Video/listvideo.page";

const infoTitle = [
  {
    title: "TÊN SERIES 1 LOREM ISPUM",
    description:
      "Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.",
    link: "../../assets/images/series1/stream_img_1.png",
  },
  {
    title: "TÊN SERIES LOREM ISPUM",
    description:
      "Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.",
    link: "../../assets/images/series1/stream_img_1.png",
  },
];

function titleSeries(props) {
  return (
    <div
      className="titleSeries"
      style={{ backgroundImage: `url(require(${props.link}))` }}
    >
      <div className="nameTitleSeries">{props.title}</div>
      <div className="descriptionTitleSeries">{props.description}</div>
      <div className="arrowTitleSeries">
        <div className="arrowSeries"></div>
        <div className="lineArrowSeries"></div>
      </div>
    </div>
  );
}

function ClipList1() {
  const [listEps, setListEps] = useState([]);
  const [listTitles, setListTitles] = useState([]);

  useEffect(() => {
    setListEps(categories);
    setListTitles(infoTitle);
  }, []);
  return (
    <>
      <FixedButton />
      <div className="cliplist1">
        {listTitles &&
          listTitles.length > 0 &&
          listTitles.map((item) => (
            <>
              {titleSeries(item)}
              {listEps && listEps.length > 0 && (
                <div id="cardSeries">
                  {listEps.map((item) => oneCard(item))}
                </div>
              )}
            </>
          ))}
      </div>
      <BottomInfo />
    </>
  );
}

export default ClipList1;
