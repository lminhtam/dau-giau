import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home(props) {
  return (
    <div className="background" style={{ width: "100%", height: "100%" }}>
      <Link to="/campaign">
        <h1 style={{ color: "white" }}>CAMPAIGN</h1>
      </Link>
      <img
        src="../../assets/icon/logo.png"
        alt="Logo"
        height="100"
        width="100"
      ></img>
      <Link to="/project">
        <h1 style={{ color: "white" }}>PROJECT</h1>
      </Link>
    </div>
  );
}

export default Home;
