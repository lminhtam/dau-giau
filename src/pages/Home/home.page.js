import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home(props) {
  return (
    <div className="background">
      <div className="wrapLeft">
        <span className="flipTitile">CAMPAIGN</span>
        <img
          className="mat1"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
        />
        <Link to="/campaign" className="linkLeft">
          CAMPAIGN
        </Link>
        <img
          id="filter-campaign"
          src={require("../../assets/icon/Rectangle 53.png")}
          alt="filter"
        />
      </div>
      <div style={{ height: "50vmin", width: "13vmax" }}>
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
      </div>
      <div className="wrapRight">
        <Link to="/project" className="linkRight">
          PROJECT
        </Link>
        <img
          id="filter-project"
          src={require("../../assets/icon/Rectangle 54.png")}
          alt="filter"
        />
        <img
          className="mat2"
          src={require("../../assets/icon/mat.svg")}
          alt="mat"
        />
        <span className="flipTitile">PROJECT</span>
      </div>
    </div>
  );
}

export default Home;
