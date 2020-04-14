import React from "react";
import "../project.css";
import { Link } from "react-router-dom";

export default class ArticleButton extends React.Component {
  render() {
    const { item, isHover, index } = this.props;
    return (
      <Link to={item.link} className="link" onMouseEnter={this.props.onHover}>
        {isHover && (
          <img
            style={{ transform: `rotate(${index * 90}deg)`, width: "5vw" }}
            alt="error"
            src={require(`../../../assets/icon/${item.img}`)}
          />
        )}
        <p
          style={{ transform: `rotate(${index * 90}deg)` }}
          className="btnTitle"
        >
          {item.title}
        </p>
      </Link>
    );
  }
}
