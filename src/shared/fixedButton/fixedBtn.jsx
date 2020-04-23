import React from "react";
import "./fixedBtn.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

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
                <img
                  id="play"
                  src={require("../../assets/icon/Group.png")}
                  alt="game"
                />
                <div id="rectangle" />
              </Link>
            )}
          </div>
        )}
        {this.props.type === 1 && (
          <Link to={"/campaign"}>
            <h3 className="leftBot">CAMPAIGN</h3>
          </Link>
        )}
        {this.props.type === 1 && (
          <Link to={"/project"}>
            <h3 className="rightBot">PROJECT</h3>
          </Link>
        )}
      </div>
    );
  }
}
