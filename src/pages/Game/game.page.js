import React, { useState } from "react";

const data = [
  { title: "short-film.png", img: "film.png", link: "/short-film" },
  { title: "manip-title.png", img: "manipulation.png", link: "/manipulation" },
  { title: "photoshot-title.png", img: "photoshot.png", link: "/photoshot" },
  { title: "clips-title.png", img: "clips.png", link: "/clips" },
];

function Game(props) {
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
      <h3>game nè</h3>
    </div>
  );
}

export default Game;
