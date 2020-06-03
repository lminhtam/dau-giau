import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import "./home.css";

function Home(props) {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [logoClick, setLogoClick] = useState(false);

  const leftMove = useSpring({
    marginRight: !hoverLogo ? "-13vw" : "0vw",
    opacity: hoverLogo ? 1 : 0,
  });
  const rightMove = useSpring({
    marginLeft: !hoverLogo ? "-13vw" : "0vw",
    opacity: hoverLogo ? 1 : 0,
  });
  return (
    <div className="background">
      <div className="wrapLeft">
        {(hoverLogo || logoClick) && (
          <animated.div style={logoClick ? {} : leftMove}>
            <Link to="/project" className="linkLeft">
              SẢN PHẨM
            </Link>
          </animated.div>
        )}
        <img
          className="mat1"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
        />
      </div>
      <div
        style={{ height: "50vh" }}
        onMouseEnter={logoClick ? () => {} : () => setHoverLogo(true)}
        onMouseOut={logoClick ? () => {} : () => setHoverLogo(false)}
        onClick={() => setLogoClick(!logoClick)}
      >
        <img
          style={{ height: "100%" }}
          src={require("../../assets/icon/logo.svg")}
          alt="logo"
        />
        <Link to="/game">
          <div className="gameWrap">
            <img
              className="play"
              src={require("../../assets/icon/Group.png")}
              alt="game"
            />
            <img
              className="rectangle"
              src={require("../../assets/icon/Rectangle 3.png")}
              alt="bg"
            />
          </div>
        </Link>
      </div>
      <div className="wrapRight">
        <img
          className="mat2"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
        />
        {(hoverLogo || logoClick) && (
          <animated.div style={logoClick ? {} : rightMove}>
            <Link to="/campaign" className="linkRight">
              DỰ ÁN
            </Link>
          </animated.div>
        )}
      </div>
    </div>
  );
}

export default Home;
