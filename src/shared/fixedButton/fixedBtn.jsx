import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import "./fixedBtn.css";

function FixedButton(props) {
  const history = useHistory();
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
      {props.type === 2 ? (
        <Link
          style={{ textDecoration: "none", zIndex: 3000 }}
          onClick={() => history.goBack()}
          id="rightTop"
        >
          <MdClose size={60} color="white" />
        </Link>
      ) : (
        <div id="rightTop">
          <Link to="/menu" style={{ textDecoration: "white", zIndex: 3000 }}>
            <MdMenu size={60} color="white" />
          </Link>
          {props.type !== 3 && (
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
      {props.type === 1 && (
        <Link
          to={"/campaign"}
          style={{ textDecoration: "none", zIndex: 3000, position: "fixed" }}
        >
          <img
            src={
              props.from === "campaign"
                ? require("../../assets/images/campaign.svg")
                : require("../../assets/images/campaign-outline.svg")
            }
            alt="logo"
            className="leftBot"
          />
        </Link>
      )}
      {props.type === 1 && (
        <Link
          to={"/project"}
          style={{ textDecoration: "none", zIndex: 3000, position: "fixed" }}
        >
          <img
            src={
              props.from === "project"
                ? require("../../assets/images/project.svg")
                : require("../../assets/images/project-outline.svg")
            }
            alt="logo"
            className="rightBot"
          />
        </Link>
      )}
    </div>
  );
}

FixedButton.defaultProps = {
  type: 1,
};

export default FixedButton;
