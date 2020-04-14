import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home(props) {
  return (
    <div className="background">
      <Link to="/campaign" className="link">
        <p className="btnTitle">CAMPAIGN</p>
      </Link>
      <img
        src={require("../../assets/icon/logoBig.png")}
        alt="Logo"
        style={{ width: "12vw" }}
      ></img>
      <Link to="/project" className="link">
        <p className="btnTitle">PROJECT</p>
      </Link>
    </div>
  );
}

export default Home;
