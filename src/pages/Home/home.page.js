import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { useInterval } from "../../shared/ultility";
import "./home.css";

function Home(props) {
  const [hoverCampaign, setHoverCampaign] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);
  const [eyeBlink, setEyeBlink] = useState(false);
  const [hoverLogo, setHoverLogo] = useState(false);
  const [logoClick, setLogoClick] = useState(true);

  // useInterval(() => {
  //   setEyeBlink(false);
  //   setTimeout(() => {
  //     setEyeBlink(true);
  //   }, 500);
  // }, 2000);
  const leftMove = useSpring({
    marginRight: hoverLogo ? 0 : "-13vw",
    opacity: hoverLogo ? 1 : 0,
  });
  const rightMove = useSpring({
    marginLeft: hoverLogo ? 0 : "-13vw",
    opacity: hoverLogo ? 1 : 0,
  });
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
        <img
          className="mat1"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
        />
        {/* {(hoverLogo === true || logoClick === true) && (
          <animated.div style={leftMove}> */}
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
          {/* </animated.div>
        )} */}
      </div>
      <div
        style={{ height: "50vh", width: "13vw" }}
        // onMouseEnter={() => setHoverLogo(true)}
        // onMouseOut={() => setHoverLogo(false)}
        // onClick={() => setLogoClick(!logoClick)}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={require("../../assets/icon/logoBig.png")}
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
        {/* {(hoverLogo === true || logoClick === true) && (
          <animated.div style={rightMove}> */}
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
          {/* </animated.div>
        )} */}
        <img
          className="mat2"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
        />
      </div>
    </div>
  );
}

export default Home;
