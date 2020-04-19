import React from "react";
import { Link } from "react-router-dom";
import "../project.css";

const FLEX_DIRECTION = ["column-reverse", "row", "column", "row-reverse"];
const CONTENT_FLEX = ["row", "column", "row-reverse", "column-reverse"];
export default class ArticleButton extends React.Component {
  render() {
    const { item, isHover, index } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: FLEX_DIRECTION[index],
          alignItems: index === 2 || index === 3 ? "flex-end" : "flex-start",
          width: "25vw",
          height: "50vh",
        }}
      >
        <Link
          to={item.link}
          className="link"
          onMouseEnter={this.props.onHover}
          onMouseOut={this.props.onOut}
          style={{
            width: index === 1 || index === 3 ? "13vh" : "20vw",
            height: index === 1 || index === 3 ? "20vw" : "13vh",
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
        </Link>
        {isHover && (
          <div
            style={{
              display: "flex",
              flexDirection: CONTENT_FLEX[index],
              alignItems:
                index === 3 || index === 0 ? "flex-end" : "flex-start",
            }}
          >
            <img
              style={{
                width: "5vw",
              }}
              alt="error"
              src={require(`../../../assets/icon/${item.img}`)}
            />
            {item.items && item.items.length > 0 ? (
              <div className={`title${index}`}>
                {item.items.map((data) => (
                  <span>{data.title}</span>
                ))}
              </div>
            ) : (
              <span className={`title${index}`}>COMING SOON</span>
            )}
          </div>
        )}
      </div>
    );
  }
}
