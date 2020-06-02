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
            src={require("../../assets/icon/logoSmall.svg")}
            alt="Logo"
            style={{ width: "5%" }}
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
              <div>
                <Link to="/game" style={{ textDecoration: "none" }}>
                  <img
                    id="play"
                    src={require("../../assets/icon/game.svg")}
                    alt="game"
                  />
                </Link>
              </div>
            )}
          </div>
        )}
        {this.props.type === 1 && (
          <Link
            to={"/campaign"}
            style={{ textDecoration: "none", zIndex: 3000, position: "fixed" }}
          >
            <div id="triangleLeft" />
            <span
              className="leftBot"
              style={{
                color: this.props.from === "campaign" ? "white" : "black",
                WebkitTextStroke:
                  this.props.from === "campaign" ? "0px white" : "1px white",
              }}
            >
              VỀ DỰ ÁN
            </span>
          </Link>
        )}
        {this.props.type === 1 && (
          <Link
            to={"/project"}
            style={{ textDecoration: "none", zIndex: 3000, position: "fixed" }}
          >
            <div id="triangleRight" />
            <span
              className="rightBot"
              style={{
                color: this.props.from === "project" ? "white" : "black",
                WebkitTextStroke:
                  this.props.from === "project" ? "0px white" : "1px white",
              }}
            >
              SẢN PHẨM
            </span>
          </Link>
        )}
      </div>
    );
  }
}
