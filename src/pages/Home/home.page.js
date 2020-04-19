import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home(props) {
  return (
    // <div className="background">
    //   <Link to="/campaign" className="link">
    //     <p className="btnTitle">CAMPAIGN</p>
    //   </Link>
    //   <img
    //     src={require("../../assets/icon/logoBig.png")})}
    //     alt="Logo"
    //     style={{ width: "12vw" }}
    //   ></img>
    //   <Link to="/project" className="link">
    //     <p className="btnTitle">PROJECT</p>
    //   </Link>
    // </div>
    <div className="wrap">
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
          {/* <img
              className="filter-campaign"
              src={require("../../assets/icon/Rectangle 53.png")}
              alt="filter"
            /> */}
        </div>
        <div>
          <img
            style={{ height: "50vh" }}
            src={require("../../assets/icon/logoBig.png")}
            alt="logo"
          />
          {/* <img
          className="filter-logo"
          src={require("../../assets/icon/Rectangle 1.png")}
          alt="filter"
        /> */}
          <div>
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
          {/* <img
            className="filter-project"
            src={require("../../assets/icon/Rectangle 54.png")}
            alt="filter"
          /> */}
          <img
            className="mat2"
            src={require("../../assets/icon/mat.svg")}
            alt="mat"
          />
          <span className="flipTitile">PROJECT</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
