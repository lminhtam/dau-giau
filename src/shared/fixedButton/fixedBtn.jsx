import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./fixedBtn.css";

export default class FixedButton extends React.Component {
  static defaultProps = {
    type: 1,
  };
  static contextTypes = {
    router: () => true,
  };
  render() {
    return (
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={require("../../assets/icon/logo.png")}
            alt="Logo"
            style={{ width: "3%" }}
            id="logo"
          />
        </Link>
        {this.props.type === 2 ? (
          <img
            // onClick={() => this.context.router.goBack()}
            id="close"
            src={require("../../assets/icon/close.png")}
            alt="close"
          />
        ) : (
          <div id="rightTop">
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <i
                className="fa fa-bars"
                style={{ fontSize: "4vmax", color: "white" }}
              />
            </Link>
            {this.props.type !== 3 && (
              <Link to="/game" id="gameWrap">
                <div id="rectangle" />
                <img
                  id="play"
                  src={require("../../assets/icon/Group.png")}
                  alt="game"
                />
              </Link>
            )}
          </div>
        )}
        {this.props.type === 1 && (
          <Link
            to={"/campaign"}
            style={{ textDecoration: "none", color: "#FF0000" }}
          >
            <div id="triangleLeft" />
            <h3
              className="leftBot"
              style={{
                color: this.props.from === "campaign" ? "white" : "black",
                WebkitTextStroke:
                  this.props.from === "campaign" ? "0px white" : "1px white",
              }}
            >
              CAMPAIGN
            </h3>
          </Link>
        )}
        {this.props.type === 1 && (
          <Link
            to={"/project"}
            style={{ textDecoration: "none", color: "#FFF500" }}
          >
            <div id="triangleRight" />
            <h3
              className="rightBot"
              style={{
                color: this.props.from === "project" ? "white" : "black",
                WebkitTextStroke:
                  this.props.from === "project" ? "0px white" : "1px white",
              }}
            >
              PROJECT
            </h3>
          </Link>
        )}
      </div>
    );
  }
}
