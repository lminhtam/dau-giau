import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import "../project.css";

const FLEX_DIRECTION = ["column-reverse", "row", "column", "row-reverse"];
const CONTENT_FLEX = ["row", "column", "row-reverse", "column-reverse"];

export default function ArticleButton(props) {
  const { item, isHover, index } = props;
  const [buttonClick, setButtonClick] = useState(false);
  const iconAnimate = useSpring({
    opacity: isHover ? 1 : 0,
  });
  const filter = {
    article0: useSpring({
      left: isHover ? "52vw" : "50vw",
      bottom: isHover ? "53vh" : "50vh",
    }),
    article1: useSpring({
      left: isHover ? "52vw" : "50vw",
      top: isHover ? "53vh" : "50vh",
    }),
    article2: useSpring({
      right: isHover ? "52vw" : "50vw",
      top: isHover ? "53vh" : "50vh",
    }),
    article3: useSpring({
      right: isHover ? "52vw" : "50vw",
      bottom: isHover ? "53vh" : "50vh",
    }),
  };
  const title = {
    animate0: useSpring({
      marginBottom: isHover ? "0vh" : "-5vh",
    }),
    animate1: useSpring({
      marginLeft: isHover ? "2vw" : "-5vw",
    }),
    animate2: useSpring({
      marginTop: isHover ? "0vh" : "-5vh",
    }),
    animate3: useSpring({
      marginRight: isHover ? "2vw" : "-5vw",
    }),
  };
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
      <animated.div
        style={filter[`article${index}`]}
        id={`filterPrj${index}`}
        onMouseEnter={buttonClick ? () => {} : () => props.onHover()}
        onMouseOut={buttonClick ? () => {} : () => props.onOut()}
        onClick={() => setButtonClick(!buttonClick)}
      />
      <img
        src={require(`../../../assets/icon/${item.title}`)}
        alt={item.title}
        style={{
          width: index === 1 || index === 3 ? "13vh" : "20vw",
          height: index === 1 || index === 3 ? "20vw" : "13vh",
        }}
        onMouseEnter={buttonClick ? () => {} : () => props.onHover()}
        onMouseOut={buttonClick ? () => {} : () => props.onOut()}
        onClick={() => setButtonClick(!buttonClick)}
      />
      {(isHover || buttonClick) && (
        <div
          style={{
            display: "flex",
            flexDirection: CONTENT_FLEX[index],
            alignItems: index === 3 || index === 0 ? "flex-end" : "flex-start",
          }}
        >
          <animated.img
            style={buttonClick ? {} : iconAnimate}
            id="iconStyle"
            alt="error"
            src={require(`../../../assets/icon/${item.img}`)}
          />
          {item.items && item.items.length > 0 ? (
            <animated.div
              className={`title${index}`}
              style={buttonClick ? {} : title[`animate${index}`]}
            >
              {item.items.map((data) => (
                <span>{data.title}</span>
              ))}
            </animated.div>
          ) : (
            <animated.span
              style={buttonClick ? {} : title[`animate${index}`]}
              className={`title${index}`}
            >
              COMING SOON
            </animated.span>
          )}
        </div>
      )}
    </div>
  );
}
