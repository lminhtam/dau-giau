import React, { useState } from "react";
import "./project.css";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import ArticleButton from "./component/articleButton";

const data = [
  { title: "SHORT FILM", img: "film.png", link: "/short-film" },
  { title: "MANIPULATION", img: "manipulation.png", link: "/manipulation" },
  { title: "PHOTO SHOT", img: "photoshot.png", link: "/photoshot" },
  { title: "SERIES CLIP", img: "clips.png", link: "/clips" },
];

function Project(props) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div
      style={{
        backgroundColor: "#121212",
        flexDirection: "row",
        display: "flex",
        width: '100vw'
      }}
    >
      <FixedButton />
      <div className="pineContainer">
        <img alt="pine" style={{width: '5vw'}} src={require("../../assets/icon/pine.png")} />
      </div>
      <div className="titleContainer">
        {data.map((item, index) => (
          <ArticleButton
            item={item}
            index={index}
            isHover={index === hoverIndex}
            onHover={() => setHoverIndex(index)}
          />
        ))}
      </div>
      <div className="pineContainer">
        <img alt="pine" style={{width: '5vw'}} src={require("../../assets/icon/pine.png")} />
      </div>
    </div>
  );
}

export default Project;
