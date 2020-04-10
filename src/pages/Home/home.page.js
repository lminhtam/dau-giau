import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home(props) {
  return (
    <div className="background">
      <Link to="/campaign">
        <h1 style={{ color: "white", fontSize: '6vw' }}>CAMPAIGN</h1>
      </Link>
      <img
        src={require('../../assets/icon/logoBig.png')}
        alt="Logo"
        style={{width: '12vw'}}
      ></img>
      <Link to="/project">
        <h1 style={{ color: "white", fontSize: '6vw'}}>PROJECT</h1>
      </Link>
    </div>
  );
}

export default Home;
