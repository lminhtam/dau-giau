import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useSpring, animated } from "react-spring";
import { useInterval } from "../../shared/ultility";

function Home(props) {
  const [hoverCampaign, setHoverCampaign] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);
  const [eyeBlink, setEyeBlink] = useState(false);

  useInterval(() => {
    setEyeBlink(false);
    setTimeout(() => {
      setEyeBlink(true)
    }, 500)
  }, 2000);
  const campaignAnimate = useSpring({
    bottom: hoverCampaign ? "18vh" : "25vh",
    right: hoverCampaign ? "65vw" : "56.5vw",
  });
  const projectAnimate = useSpring({
    top: hoverProject ? "18vh" : "25vh",
    left: hoverProject ? "65vw" : "56.5vw",
  });
  const eyeAnimate = useSpring({
    height: eyeBlink ? "25%" : "0%",
  });
  return (
    <div className="background">
      <div className="wrapLeft">
        {/* <span className="flipTitile">CAMPAIGN</span> */}
        <animated.img
          className="mat1"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
          style={eyeAnimate}
        />
        <Link
          to="/campaign"
          className="linkLeft"
          onMouseEnter={() => setHoverCampaign(true)}
          onMouseOut={() => setHoverCampaign(false)}
        >
          CAMPAIGN
        </Link>
        <Link to="/campaign">
          <animated.div
            id="filter-campaign"
            onMouseEnter={() => setHoverCampaign(true)}
            onMouseOut={() => setHoverCampaign(false)}
            style={campaignAnimate}
          />
        </Link>
      </div>
      <div style={{ height: "50vh", width: "13vw" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src={require("../../assets/icon/logoBig.png")}
          alt="logo"
        />
        {/* <img
          className="filter-logo"
          src={require("../../assets/icon/Rectangle 1.png")}
          alt="filter"
        /> */}
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
        <Link
          to="/project"
          className="linkRight"
          onMouseEnter={() => setHoverProject(true)}
          onMouseOut={() => setHoverProject(false)}
        >
          PROJECT
        </Link>
        <Link to="/project">
          <animated.div
            id="filter-project"
            onMouseEnter={() => setHoverProject(true)}
            onMouseOut={() => setHoverCampaign(false)}
            style={projectAnimate}
          />
        </Link>
        <animated.img
          style={eyeAnimate}
          className="mat2"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
        />
        {/* <span className="flipTitile">PROJECT</span> */}
      </div>
    </div>
  );
}

export default Home;
