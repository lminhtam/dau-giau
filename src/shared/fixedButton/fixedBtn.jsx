import React from "react";
import "./fixedBtn.css";
import "font-awesome/css/font-awesome.min.css";

export default class FixedButton extends React.Component {
  render() {
    return (
      <div className="container">
        <img
          src={require('../../assets/icon/logo.png')}
          alt="Logo"
          style={{width: '3vw'}}
          className="logo"
        />
        <i
          className="fa fa-bars"
          style={{
            position: "absolute",
            top: "2vh",
            right: "2vw",
            fontSize: "3vw",
            color: 'white'
          }}
        />
        <h3 className="leftBot">CAMPAIGN</h3>
        <h3 className="rightBot">PROJECT</h3>
      </div>
    );
  }
}
