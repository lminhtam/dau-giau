import React, { useState } from "react";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import ArticleButton from "./component/articleButton";
import "./project.css";

const data = [
  { title: "short-film.png", img: "film.png", link: "/short-film" },
  { title: "manip-title.png", img: "manipulation.png", link: "/manipulation" },
  { title: "photoshot-title.png", img: "photoshot.png", link: "/photoshot" },
  { title: "clips-title.png", img: "clips.png", link: "/clips" },
];

function Project(props) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div
      style={{
        backgroundColor: "#121212",
        flexDirection: "row",
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <FixedButton />
      <div className="pineContainer">
        <img
          alt="pine"
          style={{ width: "5vw" }}
          src={require("../../assets/icon/pine.png")}
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
          alt="pine"
          style={{ width: "5vw" }}
          src={require("../../assets/icon/pine.png")}
        />
      </div>
    </div>
  );
}

export default Project;