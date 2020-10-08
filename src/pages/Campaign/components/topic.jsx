import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "../campaign.css";

const topic = [
  {
    img: require("../../../assets/icon/topic.svg"),
    title: "Lorem ipsum dolor sit",
    des:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: require("../../../assets/icon/topic.svg"),
    title: "COMING SOON",
    des: null,
  },
  {
    img: require("../../../assets/icon/topic.svg"),
    title: "COMING SOON",
    des: null,
  },
  {
    img: require("../../../assets/icon/topic.svg"),
    title: "COMING SOON",
    des: null,
  },
];

export default class Topic extends React.Component {
  render() {
    return (
      <div id="topicFullBg">
        <div id="topicBg">
          {topic &&
            topic.length > 0 &&
            topic.map((item) => (
              <div id="topicItem">
                <img style={{ flex: 1 }} src={item.img} alt="topic" />
                <div id="textContainer">
                  <div id="divDash">
                    <span id="titleText">{item.title}</span>
                    {item.des && <span id="desText">{item.des}</span>}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
