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

function Menu(props) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const titleAnimate = useSpring({
    height: hoverIndex > 0 ? "8vh" : "4vh",
  });
  return (
    <div id="pageBg">
      <FixedButton type={2} />
      <div className="pineContainer">
        <img
          className="pines"
          src={require("../../assets/icon/element-pines.png")}
          alt="pine"
        />
        <img
          className="pine-circle"
          src={require("../../assets/icon/element-pines-circle.png")}
          alt="pine-circle"
        />
      </div>
      <div id="menuContainer">
        {menuData.map((item, index) => (
          <Link
            to={item.link}
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={() => {
              setHoverIndex(index)
              console.log('hover', index)
            }}
            onMouseOut={() => setHoverIndex(-1)}
          >
            <div id="menuTitleContainer">
              {index === hoverIndex ? (
                <animated.div
                  id={`filter${index}`}
                  style={`title${index}Animate`}
                >
                  <div
                    style={{
                      width: "100%",
                      background: item.lineColor,
                      height: "4vh",
                    }}
                  />
                </animated.div>
              ) : (
                <div
                  id={`filter${index}`}
                  style={{
                    background: item.lineColor,
                  }}
                />
              )}
              <span id="menuTitle">{item.title}</span>
            </div>
          </Link>
        ))}
        {/* <div class="campaign">
          <h1 class="text">CAMPAIGN</h1>
          <img
            class="filter-campaign"
            src={require("../../assets/icon/menu-filter-campaign.png")}
            alt="filter-campaign"
          />
        </div>
        <div class="project">
          <h1 class="text">PROJECT</h1>
          <img
            class="filter-project"
            src={require("../../assets/icon/menu-filter-project.png")}
            alt="filter-project"
          />
        </div>
        <div class="contact-us">
          <h1 class="text">CONTACT US</h1>
          <img
            class="filter-contact-us"
            src={require("../../assets/icon/menu-filter-contact-us.png")}
            alt="filter-contact-us"
          />
        </div> */}
      </div>
      <div className="pineContainer">
        <img
          className="pines"
          src={require("../../assets/icon/element-pines.png")}
          alt="pine"
        />
        <img
          className="pine-circle-right"
          src={require("../../assets/icon/element-pines-circle.png")}
          alt="pine-circle"
        />
      </div>
    </div>
  );
}

export default Menu;
