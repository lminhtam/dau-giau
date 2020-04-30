import React from "react";
import { Link } from "react-router-dom";
import "../project.css";
import { animated, useSpring } from "react-spring";

const FLEX_DIRECTION = ["column-reverse", "row", "column", "row-reverse"];
const CONTENT_FLEX = ["row", "column", "row-reverse", "column-reverse"];
const getPosition = (index) => {
  switch (index) {
    case 0:
      return { left: "50vw", bottom: "50vh" };
    case 1:
      return { left: "50vw", top: "50vh" };
    case 2:
      return { right: "50vw", top: "50vh" };
    case 3:
      return { right: "50vw", bottom: "50vh" };
    default:
      return {};
  }
};
export default function ArticleButton(props) {
  const { item, isHover, index } = props;
  const filter = {
    article0: useSpring({
      left: isHover ? "53vw" : "50vw",
      bottom: isHover ? "55vh" : "50vh",
    }),
    article1: useSpring({
      left: isHover ? "53vw" : "50vw",
      top: isHover ? "55vh" : "50vh",
    }),
    article2: useSpring({
      right: isHover ? "53vw" : "50vw",
      top: isHover ? "55vh" : "50vh",
    }),
    article3: useSpring({
      right: isHover ? "53vw" : "50vw",
      bottom: isHover ? "55vh" : "50vh",
    }),
  };
  console.log(filter[`article${index}`]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: FLEX_DIRECTION[index],
        alignItems: index === 2 || index === 3 ? "flex-end" : "flex-start",
        width: "25vw",
        height: "50vh",
      }}
    >
      <Link
        to={item.link}
        className="link"
        onMouseEnter={() => props.onHover()}
        onMouseOut={() => props.onOut()}
      >
        <animated.div style={filter[`article${index}`]}>
          <div
            style={{
              width: index === 1 || index === 3 ? "13vh" : "20vw",
              height: index === 1 || index === 3 ? "20vw" : "13vh",
              position: "absolute",
              ...getPosition(index),
              mixBlendMode: "multiply",
              backgroundColor: item.filterColor,
            }}
          />
        </animated.div>
      </Link>
      <Link
        to={item.link}
        className="link"
        onMouseEnter={() => props.onHover()}
        onMouseOut={() => props.onOut()}
        style={{
          width: index === 1 || index === 3 ? "13vh" : "20vw",
          height: index === 1 || index === 3 ? "20vw" : "13vh",
        }}
      >
        <img
          src={require(`../../../assets/icon/${item.title}`)}
          alt={item.title}
          style={{
            width: index === 1 || index === 3 ? "13vh" : "20vw",
            height: index === 1 || index === 3 ? "20vw" : "13vh",
          }}
        />
      </Link>
      {isHover && (
        <div
          style={{
            display: "flex",
            flexDirection: CONTENT_FLEX[index],
            alignItems: index === 3 || index === 0 ? "flex-end" : "flex-start",
          }}
        >
          <img
            style={{
              width: "5vw",
            }}
            alt="error"
            src={require(`../../../assets/icon/${item.img}`)}
          />
          {item.items && item.items.length > 0 ? (
            <div className={`title${index}`}>
              {item.items.map((data) => (
                <span>{data.title}</span>
              ))}
            </div>
          ) : (
            <span className={`title${index}`}>COMING SOON</span>
          )}
        </div>
      )}
    </div>
  );
}
