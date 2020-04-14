import React from "react";
import { Link } from "react-router-dom";
import "../project.css";

const FLEX_DIRECTION = ["column-reverse", "row", "column", "row-reverse"];

export default class ArticleButton extends React.Component {
  render() {
    const { item, isHover, index } = this.props;
    return (
      <Link
        to={`/${item.link}`}
        className="link"
        onMouseEnter={this.props.onHover}
        onMouseOut={this.props.onOut}
      >
        <div
          style={{
            display: "flex",
            flexDirection: FLEX_DIRECTION[index],
            alignItems: index === 2 || index === 3 ? "flex-end" : "flex-start",
            width: "25vw",
            height: "50vh",
          }}
        >
          <img
            src={require(`../../../assets/icon/${item.title}`)}
            alt={item.title}
            style={{
              width: index === 1 || index === 3 ? "13vh" : "20vw",
              height: index === 1 || index === 3 ? "20vw" : "13vh",
            }}
          />
          {isHover && (
            <img
              style={{
                width: "5vw",
              }}
              alt="error"
              src={require(`../../../assets/icon/${item.img}`)}
            />
          )}
        </div>
      </Link>
    );
  }
}
