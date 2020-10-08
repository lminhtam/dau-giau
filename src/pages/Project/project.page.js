import React, { useState } from "react";
import FixedButton from "shared/fixedButton/fixedBtn";
import ArticleButton from "./component/articleButton";
import "./project.css";

const data = [
  {
    title: "short-film.svg",
    img: "film.png",
    link: "/short-film",
    items: [],
    filterColor: "#00FF19",
  },
  {
    title: "manip-title.svg",
    img: "manipulation.png",
    link: "/manipulation",
    items: [],
    filterColor: "#0085FF",
  },
  {
    title: "photoshot-title.svg",
    img: "photoshot.png",
    link: "/photoshot",
    items: [],
    filterColor: "#FF00D6",
  },
  {
    title: "clips-title.svg",
    img: "clips.png",
    link: "/clips",
    items: [{ title: "Post most" }, { title: "Accident by trash" }],
    filterColor: "#FF0000",
  },
];

function Project(props) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className="pageBg">
      <FixedButton from="project" />
      <div
        style={{
          backgroundColor: "#121212",
          flexDirection: "row",
          display: "flex",
          flex: 1,
        }}
      >
        <div className="pineContainer">
          <img
            className="pines"
            src={require("../../assets/icon/pine.svg")}
            alt="pine"
          />
        </div>
        <div className="titleContainer">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ArticleButton
              item={data[3]}
              index={3}
              isHover={3 === hoverIndex}
              onHover={() => setHoverIndex(3)}
              onOut={() => setHoverIndex(-1)}
            />
            <ArticleButton
              item={data[2]}
              index={2}
              isHover={2 === hoverIndex}
              onHover={() => setHoverIndex(2)}
              onOut={() => setHoverIndex(-1)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ArticleButton
              item={data[0]}
              index={0}
              isHover={0 === hoverIndex}
              onHover={() => setHoverIndex(0)}
              onOut={() => setHoverIndex(-1)}
            />
            <ArticleButton
              item={data[1]}
              index={1}
              isHover={1 === hoverIndex}
              onHover={() => setHoverIndex(1)}
              onOut={() => setHoverIndex(-1)}
            />
          </div>
        </div>
        <div className="pineContainer">
          <img
            className="pines"
            src={require("../../assets/icon/pine.svg")}
            alt="pine"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
