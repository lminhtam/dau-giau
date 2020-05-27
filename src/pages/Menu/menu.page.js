import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import "./menu.css";

const menuData = [
  {
    title: "CAMPAIGN",
    link: "/campaign",
    lineColor: "#FF0000",
  },
  {
    title: "PROJECT",
    link: "/project",
    lineColor: "#00D1FF",
  },
  {
    title: "CONTACT US",
    link: "/contact",
    lineColor: "#FAFF00",
  },
];

function MenuButton(props) {
  const { item, isHover, index } = props;
  const filterAnimate = useSpring({
    height: isHover ? "16vh" : "4vh",
  });
  const titleAnimate = useSpring({
    fontSize: isHover ? "10vmax" : "6vmax",
    lineHeight: isHover ? "16vh" : "8vh",
  });
  return (
    <Link
      to={item.link}
      style={{ textDecoration: "none", color: item.lineColor }}
      onMouseEnter={() => props.setHover(index)}
      onMouseOut={() => props.setHover(-1)}
    >
      <div id="menuTitleContainer" onMouseEnter={() => props.setHover(index)}>
        <animated.div
          id={`filter${index}`}
          style={filterAnimate}
          onMouseEnter={() => props.setHover(index)}
        />
        <animated.span
          style={titleAnimate}
          id="menuTitle"
          onMouseEnter={() => props.setHover(index)}
        >
          {item.title}
        </animated.span>
      </div>
    </Link>
  );
}

function Menu(props) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div id="pageBg">
      <FixedButton type={2} />
      <div className="pineContainer">
        <img
          className="pines"
          src={require("../../assets/icon/pine.svg")}
          alt="pine"
        />
      </div>
      <div id="menuContainer">
        {menuData.map((item, index) => (
          <MenuButton
            item={item}
            index={index}
            isHover={index === hoverIndex}
            setHover={(index) => setHoverIndex(index)}
          />
        ))}
      </div>
      <div className="pineContainer">
        <img
          className="pines"
          src={require("../../assets/icon/pine.svg")}
          alt="pine"
        />
      </div>
    </div>
  );
}

export default Menu;
