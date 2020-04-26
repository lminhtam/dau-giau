import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useSpring, animated } from "react-spring";

function Home(props) {
  const [hoverCampaign, setHoverCampaign] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);
  const campaignAnimate = useSpring({
    bottom: hoverCampaign ? "18vh" : "25vh",
    right: hoverCampaign ? "65vw" : "56.5vw",
  });
  const projectAnimate = useSpring({
    top: hoverProject ? "18vh" : "25vh",
    left: hoverProject ? "65vw" : "56.5vw",
  });
  return (
    <div className="background">
      <div className="wrapLeft">
        {/* <span className="flipTitile">CAMPAIGN</span> */}
        <img
          className="mat1"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
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
            style={projectAnimate}
          />
        </Link>
        <img
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
